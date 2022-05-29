import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,Button,
  useDisclosure,
  Stack,
  Radio
} from '@chakra-ui/react'

const Drawer1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (
    <>
    <div style={{display:"grid",justifyContent:"center" ,marginTop:"20px"}}>

  
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          <Radio value='top'>Top</Radio>
          <Radio value='right'>Right</Radio>
          <Radio value='bottom'>Bottom</Radio>
          <Radio value='left'>Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Logo</DrawerHeader>
          <DrawerBody>
           <div>Home</div>
           <div>Trending</div>
           <div>Explore</div>
           <div>Favourites</div>
           <div>Settings</div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </div>
    </>
  )
}

export default Drawer1