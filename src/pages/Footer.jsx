import { Facebook, Github, Linkedin, TwitterX } from "../widget/Icons";
import { Box, List, ListItem } from "@chakra-ui/react";

const LINKS = [
  { title: "About me", links: "about" },
  { title: "Skills", links: "skills" },
  { title: "Projects", links: "projects" },
  { title: "Contact", links: "contact" },
];

const Footer = () => {
  return (
    <>
      <Box
        id="contact"
        as="footer"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ base: "1rem", md: "4rem" }}
        paddingBottom={"2rem"}
      >
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
        <a href="https://github.com/ogedengbewisdom" target="_blank">
          {" "}
          <Github />
        </a>
      </Box>
      <List
        color={"#CCC"}
        display={{ base: "flex" }}
        alignItems={"center"}
        // gap={"1rem"}
        justifyContent={"center"}
        fontSize={"1rem"}
        mb={"1rem"}
        // initial={{ x: "80vw" }}
        // animate={{ x: 0 }}
        // transition={{ duration: 2 }}
      >
        {LINKS.map((link, index) => {
          return (
            <ListItem
              key={index}
              position="relative"
              padding="0 8px"
              // animate={{ scale: 1.1 }}
              // transition={{ duration: 0.6, type: "linear" }}
              // whileHover={{
              //   scale: 1.1,
              //   fontWeight: 600,
              // }}
            >
              <a href={`/#${link.links}`}>{link.title}</a>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Footer;
