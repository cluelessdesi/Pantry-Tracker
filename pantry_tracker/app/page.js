// import Image from "next/image";
// import styles from "./page.module.css";
import {Box, Stack, Typography} from '@mui/material'

const item = ['tomato', 'potato', 'onions', 'apples', 'oranges', 'garlic', 'kale', 'pomegrenate', 'tomato', 'potato', 'onions', 'apples', 'oranges', 'garlic', 'kale', 'pomegrenate']

export default function Home() {
  return (
    <Box width="100wh" height="100vh"
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    flexDirection={'column'}
    >
    
    <Box width='800px' height='100px' bgcolor={'#ADD8E6'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant='h3' color='#333' textAlign={'center'} fontWeight={'bold'}>
        Pantry Items
      </Typography>
    </Box>
    <Stack width="800px" height="300px" spacing={2} overflow={'auto'}>
      {item.map((i) => (
        <Box
        key={i}
        width="100%"
        height="300px"
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
