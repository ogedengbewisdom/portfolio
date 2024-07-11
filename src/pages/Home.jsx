import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  ChakraUi,
  Css3,
  Giithub,
  Git,
  HtmlInput,
  Javascript,
  Nextjs,
  React,
  Tailwind,
  Typescript,
} from "../widget/Icons";
import { PROJECTS } from "../../PROJECTS";

const SKILLS = [
  { title: "HTML5", tag: <HtmlInput /> },
  { title: "CSS3", tag: <Css3 /> },
  { title: "Javascript", tag: <Javascript /> },
  { title: "Typescript", tag: <Typescript /> },
  { title: "Github", tag: <Giithub /> },
  { title: "Git", tag: <Git /> },
  { title: "React", tag: <React /> },
  { title: "Nextjs", tag: <Nextjs /> },
  { title: "Tailwind", tag: <Tailwind /> },
  { title: "Chakra UI", tag: <ChakraUi /> },
];

const Home = () => {
  return (
    <Box
      mt={"3rem"}
      color={"#DFE6EF"}
      display={"flex"}
      flexDir={"column"}
      gap={{ base: "4rem", md: "6rem" }}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        color={"#DFE6EF"}
      >
        <Image
          src="/vecteezy_3d-male-character-happy-working-on-a-laptop_24785816.png"
          width={400}
          height={400}
        />
        <Box maxW={"35rem"}>
          <Heading
            textAlign={"center"}
            color={"#DFE6EF"}
            fontFamily={"galano grotesque"}
            fontWeight={800}
          >
            Hi
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={"1.3rem"}
            fontWeight={"500"}
            my={"1rem"}
            fontFamily={"galano grotesque"}
            // fontWeight={800}
          >
            I&apos;m Ogedengbe Wisdom
          </Text>
          <Text
            textAlign={"center"}
            fontSize={"1.3rem"}
            fontWeight={"400"}
            // fontFamily={"Playwrite ES Deco"}
            fontStyle={"italic"}
          >
            A Front-End developer I build pixel-perfect, engaging, accessible
            digital experiences and integrate APIs.
          </Text>
        </Box>
      </Box>
      <Box>
        <Heading
          id="about"
          fontSize={"2rem"}
          textAlign={"center"}
          my={"1rem"}
          fontWeight={700}
          fontFamily={"galano grotesque"}
        >
          About me
        </Heading>
        <Box
          display={"flex"}
          gap={{ base: "2rem", md: "2rem", xl: "4rem" }}
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box maxWidth={""} borderLeft={"5px solid"} borderRadius={"10px"}>
            <Text
              marginLeft={"0.7rem"}
              fontSize={"1.2rem"}
              fontWeight={500}
              fontFamily={"galano grotesque"}
              // fontStyle={"italic"}
              lineHeight={"35px"}
            >
              I&apos;m a dedicated and awesome Software Engineer interested in
              solving innovative real world problems to make the world a better
              place for everybody to live. I have a passion for learning and
              sharing my knowledge with others. I collaborate on Innovative and
              Real life project with an incredible objective towards achieving a
              life changing results.
            </Text>
          </Box>
          <Image src="/aboutme.png" width={300} height={300} />
        </Box>
      </Box>
      <Box>
        <Heading
          id="skills"
          fontSize={"2rem"}
          textAlign={"center"}
          fontWeight={700}
          fontFamily={"galano grotesque"}
        >
          Skills
        </Heading>

        <SimpleGrid
          mt={"4rem"}
          columns={{ base: 2, md: 3, lg: 4, xl: 7 }}
          spacingX={{ md: "4rem", lg: "6rem", xl: "6rem" }}
          spacingY={{ base: "6rem" }}
        >
          {SKILLS.map((skill, index) => {
            return (
              <Box
                key={index}
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
              >
                {skill.tag}
                <Text fontSize={"1rem"}>{skill.title}</Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading
          id="projects"
          fontSize={"2rem"}
          textAlign={"center"}
          my={"1rem"}
          fontWeight={700}
          fontFamily={"galano grotesque"}
          // textDecoration={"underline"}
        >
          Selected Projects
        </Heading>
        <Box
          mt={{ base: "3rem", xl: "5rem" }}
          display={"flex"}
          flexDirection={"column"}
          gap={"5rem"}
        >
          {PROJECTS.map((project, index) => {
            return (
              <Box
                key={index}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDir={{ base: "column", md: "row" }}
                gap={{ base: "3rem", xl: "8rem" }}
              >
                <Image
                  borderRadius={"10px"}
                  src={project.image}
                  boxSize={{ md: "50%", xl: "30%" }}
                />

                <Box>
                  <Box
                    display={"flex"}
                    justifyContent={{ base: "center", md: "start" }}
                    marginY={{ base: "1rem", md: "0rem" }}
                    alignItems={"center"}
                    gap={"1rem"}
                  >
                    {project.icon ? (
                      <project.icon />
                    ) : (
                      <Image src="/sungasLogo.png" boxSize={"100px"} />
                    )}
                    <Text
                      fontSize={"1.5rem"}
                      fontWeight={700}
                      fontFamily={"galano grotesque"}
                    >
                      {project.name}
                    </Text>
                  </Box>
                  <Box
                    maxW={"30rem"}
                    display={"flex"}
                    flexDir={"column"}
                    gap={"1rem"}
                    alignItems={{ base: "center", md: "start" }}
                    fontWeight={600}
                    fontFamily={"galano grotesque"}
                  >
                    <Text fontSize={"1rem"} marginTop={"1rem"}>
                      {project.description}
                    </Text>
                    <Text fontSize={"0.8rem"} fontWeight={400}>
                      {project.tech}
                    </Text>
                    <a href={project.href} target="_blank">
                      <Button borderRadius={"20px"}>View product</Button>
                    </a>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        marginTop={"-5rem"}
      >
        <Image
          src="parternership.png"
          alt="Partnership"
          width={600}
          height={500}
        />
        <Heading fontSize={{ base: "1.5rem", md: "2rem" }} textAlign={"center"}>
          {"Let's Forge an Exciting Partnership Together!"}
        </Heading>
      </Box>
    </Box>
  );
};

export default Home;
