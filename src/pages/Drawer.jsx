import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { Facebook, Github, Linkedin, TwitterX } from "../widget/Icons";

const Drawers = ({ isOpen, onClose }) => {
  const LINKS = [
    { title: "About me", links: "about" },
    { title: "Skills", links: "skills" },
    { title: "Projects", links: "projects" },
    { title: "Contact", links: "contact" },
  ];

  return (
    <Drawer
      size={"xs"}
      isOpen={isOpen}
      placement="right"
      //   initialFocusRef={firstField}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bgColor={"#CCC"}>
        <DrawerCloseButton color={"#07111C"} fontSize={"1rem"} />

        <DrawerBody pt={"3rem"}>
          <List
            fontWeight={"600"}
            color={"#07111C"}
            display={{ base: "flex" }}
            alignItems={"flex-end"}
            flexDirection={"column"}
            gap={5}
            fontSize={"1rem"}
          >
            {LINKS.map((link, index) => {
              return (
                <ListItem key={index}>
                  <a href={`/#${link.links}`}>{link.title}</a>
                </ListItem>
              );
            })}
          </List>
        </DrawerBody>

        <DrawerFooter>
          <a
            href="https://mobile.facebook.com/ogedengbe.wisdom?eav=AfbBUxGr_sKTbS1_vPA3JcrtASWMJqy3BUPclcGc7RXfsCwwFO8Wd0YGZtdNWOLACGg&paipv=0"
            target="_blank"
          >
            {" "}
            <Facebook />
          </a>
          <a href="https://twitter.com/meesy0" target="_blank">
            {" "}
            <TwitterX />
          </a>
          <a
            href="https://www.linkedin.com/in/ogedengbe-wisdom-a5241320a/"
            target="_blank"
          >
            {" "}
            <Linkedin />
          </a>
          <a
            href="https://www.linkedin.com/in/ogedengbe-wisdom-a5241320a/"
            target="_blank"
          >
            {" "}
            <Github />
          </a>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Drawers;
