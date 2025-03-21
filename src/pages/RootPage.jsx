import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Drawers from "./Drawer";
import Footer from "./Footer";

const RootPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box maxWidth={"1440px"} marginX={"auto"}>
      <Box>
        <Header onOpen={onOpen} />

        <Box as="main">
          <Drawers isOpen={isOpen} onClose={onClose} />
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default RootPage;
