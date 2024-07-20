import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Image, List, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LINKS = [
  { title: "About me", links: "about" },
  { title: "Skills", links: "skills" },
  { title: "Projects", links: "projects" },
  { title: "Contact", links: "contact" },
];

const Header = ({ onOpen }) => {
  const ListItemMotion = motion(ListItem);
  const ListMotion = motion(List);
  const BoxMotion = motion(Box);
  return (
    <Box
      as="header"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={{ base: "2rem 1rem", md: "2rem" }}
    >
      <Box color={"#FFF"} title="wisdom">
        <Image src="/weezy.jpg" boxSize={"40px"} borderRadius={"50%"} />
      </Box>
      <ListMotion
        color={"#CCC"}
        display={{ base: "none", lg: "flex" }}
        alignItems={"center"}
        gap={5}
        fontSize={"1rem"}
        initial={{ x: "80vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        {LINKS.map((link, index) => {
          return (
            <ListItemMotion
              key={index}
              position="relative"
              padding="0 8px"
              // animate={{ scale: 1.1 }}
              transition={{ duration: 0.6, type: "linear" }}
              whileHover={{
                scale: 1.1,
                fontWeight: 600,
              }}
            >
              <a href={`/#${link.links}`}>{link.title}</a>
            </ListItemMotion>
          );
        })}
      </ListMotion>
      <Box as="span" onClick={onOpen} display={{ base: "block", lg: "none" }}>
        <HamburgerIcon boxSize={10} color={"#CCC"} />
      </Box>
    </Box>
  );
};

export default Header;
