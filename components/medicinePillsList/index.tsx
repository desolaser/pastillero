import {
  Box,
  VStack,
  Text,
  Spinner
} from "@chakra-ui/react";
import usePillBox from "../../hooks/usePillBox";
import MedicinePills from "../../model/MedicinePills";
import Pills from "./Pills";

const MedicinesList = () => {
  const { pills, isLoading, isError } = usePillBox(0);

  if (isLoading) return <Spinner />
  if (isError) return <Text color='red.500'>
    Hubo un error
  </Text>
  
  return (    
    <VStack align={'left'}>
      <Box bgColor="#F5F5F5" py={2}>
        <Text 
          mx={'1rem'} 
          fontSize={"19px"} 
          lineHeight={"28px"} 
          letterSpacing={"0.15px"}>
          Te queda
        </Text>
      </Box>
      <VStack w={'full'}>
        {pills?.map((item: MedicinePills) => 
          <Pills key={item.name} medicinePills={item} />)}
      </VStack>
    </VStack>
  )
}

export default MedicinesList;