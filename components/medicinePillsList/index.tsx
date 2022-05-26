import {
  VStack,
  Text,
} from "@chakra-ui/react";
import MedicinePills from "../../model/MedicinePills";
import Medicine from "./MedicinePills";

const MedicinesList = () => (
  <VStack>
    <Text>Qué Queda?</Text>
    <VStack>
      {dummyData.map(item => <Medicine key={item.name} medicinePills={item} />)}
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