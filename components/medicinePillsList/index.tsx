import {
  Box,
  VStack,
  Text,
} from "@chakra-ui/react";
import MedicinePills from "../../model/MedicinePills";
import Pills from "./Pills";

const MedicinesList = () => (
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
      {dummyData.map(item => <Pills key={item.name} medicinePills={item} />)}
    </VStack>
  </VStack>
);

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