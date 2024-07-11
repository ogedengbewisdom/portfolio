import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Drawers from "./Drawer";
import Footer from "./Footer";

const RootPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box maxWidth={"1440px"} marginX={"auto"}>
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
        gridTemplateRows={"50px 1fr 50px"}
        gridTemplateColumns={"80px"}
        minH={"100vh"}
        paddingX={{ base: "1rem", md: "2rem", xl: "5rem" }}
        paddingY={{ base: "0.5rem", md: "1rem" }}
      >
        <GridItem area={"header"}>
          <Header onOpen={onOpen} />
        </GridItem>
        <GridItem area={"main"} width="100%">
          <Drawers isOpen={isOpen} onClose={onClose} />
          <Outlet />
        </GridItem>
        <GridItem area={"footer"} mt={{ base: "2.5rem", md: "3rem" }}>
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RootPage;
