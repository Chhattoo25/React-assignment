import React from 'react'
import {
                     Breadcrumb,
                     BreadcrumbItem,
                     BreadcrumbLink,
                     BreadcrumbSeparator,
                   } from '@chakra-ui/react'

import {
                     Accordion,
                     AccordionItem,
                     AccordionButton,
                     AccordionPanel,
                     AccordionIcon,
                    
                   } from '@chakra-ui/react'
                   import { Box } from '@chakra-ui/react'
const Accoridon = () => {
let breadcrums = ["Home","India","Indore","Pune..."]
  return (
    <div>
<Breadcrumb>
{breadcrums.map((breadcrum,index)=>(

  <BreadcrumbItem key={index}>
    <BreadcrumbLink href='#' _hover={{color:"red"}}
    
    >{breadcrum}</BreadcrumbLink>
  </BreadcrumbItem>
))}

</Breadcrumb>

<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} bgColor="tomato">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default Accoridon