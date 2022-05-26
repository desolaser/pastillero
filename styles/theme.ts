import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  textStyles: {
    pillName: {
      fontSize: ["15px", "20px"],
      fontWeight: "semibold",
      lineHeight: "150%",
      letterSpacing: "0.15px",
    },
    pillMg: {
      fontSize: ["13px", "18px"],
      fontWeight: "normal",
      lineHeight: "150%",
      letterSpacing: "0.15px",
    },
    remainingPills: {
      fontSize: ["13px", "18px"],
      fontWeight: "normal",
      lineHeight: "150%",
      letterSpacing: "0.15px",
      textDecoration: "underline"
    },
    remainingDays: {
      fontSize: ["12px", "17px"],
      fontWeight: "normal",
      lineHeight: "150%",
      letterSpacing: "0.04px",
      textDecoration: "underline"
    },
  },
});

export default theme;