// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif',
  },
});

export default theme;
