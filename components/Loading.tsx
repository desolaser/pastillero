import {
  Box,
  Center,
  Spinner,
} from "@chakra-ui/react";

const Loading = () => (
  <Box p={4} mt={2}>
    <Center>
      <Spinner />
    </Center>
  </Box>
);

export default Loading;