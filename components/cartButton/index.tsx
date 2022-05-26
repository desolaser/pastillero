import { Box } from "@chakra-ui/react";
import PlusIcon from "./PlusIcon";
import CartIcon from "./CartIcon";

const CartButton = () => {
  return (
    <Box style={{ position: "relative" }}>
      <CartIcon w={12} h={12} p={0} m={0} />
      <PlusIcon 
        style={{
          position: "absolute",
          right: "-11px",
          bottom: "12px"
        }}
        w={12} h={12} p={0} m={0} />
    </Box>
  )
};

export default CartButton;
