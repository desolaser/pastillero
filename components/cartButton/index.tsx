import { Button } from "@chakra-ui/react";
import PlusIcon from "./PlusIcon";
import CartIcon from "./CartIcon";

const CartButton = () => {
  return (
    <Button style={{ position: "relative" }} variant="link">
      <CartIcon w={12} h={12} p={0} m={0} />
      <PlusIcon 
        style={{
          position: "absolute",
          right: "-11px",
          bottom: "12px"
        }}
        w={12} h={12} p={0} m={0} />
    </Button>
  )
};

export default CartButton;
