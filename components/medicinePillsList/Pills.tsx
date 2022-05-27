import {
  HStack,
  VStack,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import MedicinePills from "../../model/MedicinePills";
import CartButton from "../cartButton";

type PillsProps = {
  medicinePills: MedicinePills
};

const Pills = ({ medicinePills }: PillsProps) => {
  return (
    <Center w="full" borderBottom={'1px solid rgba(0, 0, 0, 0.12)'}>
      <HStack ml={6} pb={2} spacing={10} w="full">
        <HStack spacing={4}>
          <Image
            boxSize='62px'
            objectFit='contain'
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
            <Text 
              textStyle="remainingPills" 
              color="#0277BD"
              _hover={{
                color: "#F44336",
              }}
            >
              {`Quedan ${medicinePills.remainingPills} comprimidos`}
            </Text>
            <Text 
              textStyle="remainingDays" 
              color="#0277BD"              
              _hover={{
                color: "#F44336",
              }}
            >
              {`Para ${medicinePills.remainingDays} días`}
            </Text>
          </VStack>
        </HStack>
        <CartButton />
      </HStack>
    </Center>
  );
}

export default Pills;