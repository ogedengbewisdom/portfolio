import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Image, List, ListItem } from "@chakra-ui/react";

const LINKS = [
  { title: "About me", links: "about" },
  { title: "Skills", links: "skills" },
  { title: "Projects", links: "projects" },
  { title: "Contact", links: "contact" },
];

const Header = ({ onOpen }) => {
  return (
    <Box
      as="header"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box color={"#FFF"} title="wisdom">
        <Image src="/weezy.jpg" boxSize={"40px"} borderRadius={"50%"} />
      </Box>
      <List
        color={"#CCC"}
        display={{ base: "none", lg: "flex" }}
        alignItems={"center"}
        gap={5}
        fontSize={"1rem"}
      >
        {LINKS.map((link, index) => {
          return (
            <ListItem
              key={index}
              position="relative"
              padding="0 8px"
              _after={{
                content: '""',
                position: "absolute",
                height: "3px",
                width: "100%",
                bottom: "-5px",
                left: 0,
                backgroundColor: "transparent",
                transition: "background-color 0.5s",
              }}
              _hover={{
                color: "white",
                _after: {
                  backgroundColor: "#FFF",
                },
              }}
            >
              <a href={`/#${link.links}`}>{link.title}</a>
            </ListItem>
          );
        })}
      </List>
      <Box as="span" onClick={onOpen} display={{ base: "block", lg: "none" }}>
        <HamburgerIcon boxSize={10} color={"#CCC"} />
      </Box>
    </Box>
  );
};

export default Header;
