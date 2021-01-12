// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
let theme = extendTheme({
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif',
  },
  components: {
    FormLabel: {
      baseStyle: {
        fontWeight: "600",
      },
    },
  },
});

export default theme;
