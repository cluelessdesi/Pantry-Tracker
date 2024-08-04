// import Image from "next/image";
// import styles from "./page.module.css";
"use client"
import {Box, Stack, Typography, Button, Modal, TextField} from '@mui/material'
import { firestore } from '@/firebase'
import { collection, getDocs, query, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'


// const item = ['tomato', 'potato', 'onions', 'apples', 'oranges', 'pomegrenate', 'papaya', 'mango']

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadown: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column', 
  gap: 3,
}

export default function Home() {
  
  const [pantry, setPantry] = useState([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [itemName, setItemName] = useState('')

  const updatePantry = async() => {
    const snapshot = query(collection(firestore, 'pantry'))
    const docs = await getDocs(snapshot)
    const pantryList = []
    docs.forEach( (doc) => {
      pantryList.push(doc.id)
    })
    // console.log(pantryList)
    setPantry(pantryList)
  }

  useEffect(
    () => { updatePantry() }, []
  )

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'pantry'), item)
    await setDoc(docRef, {})
    updatePantry()
  }

  const delItem = async (item) => {
    const docRef = doc(collection(firestore, 'pantry'), item)
    await deleteDoc(docRef).then(() => {
      updatePantry()
    })
  }

  return (
    <Box width="100wh" height="100vh"
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    gap={2}
    >
    
    <Button variant="contained">Add Item</Button>

    <Box width='800px' height='100px' bgcolor={'#ADD8E6'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant='h3' color='#333' textAlign={'center'} fontWeight={'bold'}>
        Pantry Items
      </Typography>
    </Box>
    <Stack width="800px" height="300px" spacing={2} overflow={'auto'}>
      {pantry.map((i) => (
        <Box
        key={i}
        width="100%"
        minHeight="200px"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'f0f0f0'}
        >
          <Typography variant='h5' color='#639' textAlign={'center'}>
            {
              i.charAt(0).toUpperCase() + i.slice(1)
            }
          </Typography>
        </Box>
      ))}
    </Stack>

    </Box>
  )
  
}
