// import Image from "next/image";
// import styles from "./page.module.css";
import {Box, Stack} from '@mui/material'

const item = ['tomato', 'potato', 'onions', 'apples', 'oranges']

export default function Home() {
  return (
    <Box width="100wh" height="100vh"
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    >

    <Stack width="800px" height="600px" spacing={2}>
      {item.map((i) => (
        <Box
        key={i}
        width="100%"
        height="l0px"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'fofof0'}
        >
          {i}
        </Box>
      ))}
    </Stack>

    </Box>
  )
  
}
