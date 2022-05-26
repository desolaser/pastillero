import {
  HStack,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import MedicinePills from "../../model/MedicinePills";

type PillsProps = {
  medicinePills: MedicinePills
};

const Pills = ({ medicinePills }: PillsProps) => {
  return (
    <HStack spacing={8}>
      <Image
        boxSize='62px'
        objectFit='cover'
        src={medicinePills.image}
        alt={medicinePills.name}
      />
      <VStack align={'left'} spacing={0}>
        <Text textStyle="pillName">
          {medicinePills.name}
        </Text>
        <Text textStyle="pillMg" color="rgba(0, 0, 0, 0.54)">
          {medicinePills.mg}          
        </Text>
        <Text textStyle="remainingPills">
          {`Quedan ${medicinePills.remainingPills} comprimidos`}
        </Text>
        <Text textStyle="remainingDays">
          {`Para ${medicinePills.remainingDays} días`}
        </Text>
      </VStack>
      
    </HStack>
  );
}

export default Pills;