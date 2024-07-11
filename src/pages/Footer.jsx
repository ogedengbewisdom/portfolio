import { Facebook, Github, Linkedin, TwitterX } from "../widget/Icons";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
