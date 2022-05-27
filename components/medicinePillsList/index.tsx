import {
  Center,
  Box,
  VStack,
  Text,
  Button,
  Spinner
} from "@chakra-ui/react";
import usePillBox from "../../hooks/usePillBox";
import MedicinePills from "../../model/MedicinePills";
import Error from "../Error";
import Pills from "./Pills";

const MedicinesList = () => {
  const { pills, isLoading, isError } = usePillBox(0);

  if (isLoading) return (
    <Spinner />
  )
  
  return (
    <Center>
      {isError ? (
        <Error title="Hubo un error" text="Intente de nuevo más tarde" />  
      ) : (
        <VStack w={["sm"]} align={'left'}>
          <Box bgColor="#F5F5F5" py={2}>
            <Text 
              mx={'1rem'} 
              fontSize={"19px"} 
              lineHeight={"28px"} 
              letterSpacing={"0.15px"}>
              Te queda
            </Text>
          </Box>
          {pills.length == 0 ? (
            <VStack>
              <Text>
                No ha comprado ningún medicamento.
              </Text>
              <Button colorScheme={"blue"}>
                Presione aquí para comprar
              </Button>
            </VStack>
          ) : (
            <VStack w={["sm"]}>
              {pills.map((item: MedicinePills) => 
                <Pills key={item.name} medicinePills={item} />)}
            </VStack>
          )}
        </VStack>
      )}      
    </Center>
  )
}

export default MedicinesList;