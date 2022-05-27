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
        {pills?.map(item => <Pills key={item.name} medicinePills={item} />)}
      </VStack>
    </VStack>
  )
}


const dummyData: MedicinePills[] = [
  {
    image: 'https://bit.ly/dan-abramov', 
    name: 'Paracetamol',
    mg: '100 mg', 
    remainingPills: 10,
    remainingDays: 10
  },
  {
    image: 'https://bit.ly/dan-abramov', 
    name: 'Ibuprofeno',
    mg: '100 mg', 
    remainingPills: 20,
    remainingDays: 20
  },
  {
    image: 'https://bit.ly/dan-abramov', 
    name: 'Tapsin',
    mg: '100 mg', 
    remainingPills: 30,
    remainingDays: 30
  },
];

export default MedicinesList;