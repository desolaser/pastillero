import {
  HStack,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import MedicinePills from "../../model/MedicinePills";

type MedicinePillsProps = {
  medicinePills: MedicinePills
};

const MedicinePills = ({ medicinePills }: MedicinePillsProps) => {
  return (
    <HStack spacing={16}>
      <Image
        boxSize='50px'
        objectFit='cover'
        src={medicinePills.image}
        alt={medicinePills.name}
      />
      <VStack align={'left'}>
        <Text>
          {medicinePills.name}
        </Text>
        <Text>
          {medicinePills.mg}          
        </Text>
        <Text>
          {`Quedan ${medicinePills.remainingPills} píldoras para ${medicinePills.remainingDays} días.`}
        </Text>
      </VStack>
    </HStack>
  );
}

export default MedicinePills;