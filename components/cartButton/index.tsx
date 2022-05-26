import { Box } from "@chakra-ui/react";
import PlusIcon from "./PlusIcon";
import CartIcon from "./CartIcon";

const CartButton = () => {
  return (
    <Box style={{ position: "relative" }}>
      <CartIcon w={16} h={16} p={0} m={0} />
      <PlusIcon 
        style={{
          position: "absolute",
          right: "-15px",
          bottom: "20px"
        }}
        w={16} h={16} p={0} m={0} />
    </Box>
  )
};

export default CartButton;
