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
import { animate, motion } from "framer-motion";
import classes from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

const motionVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  vissible: {
    opacity: 1,
    x: 0,

    transition: {
      delay: 0.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
      stiffness: 120,
      when: "beforeChildren",
    },
  },
};

const childrenVariant = {
  // hover: {
  //   scale: 1.1,
  //   transition: { duration: 0.5, repeat: Infinity, repeatType: "loop" },
  // },
  hidden: {
    x: "-50vw",
    // opacity: 0,
  },
  vissible: {
    x: "60vw",
    transition: {
      type: "tween",
      duration: 10,
      repeat: Infinity,
    },
  },
};

const Home = () => {
  const MotionBox = motion(Box);
  const MotionButton = motion(Button);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      mt={"3rem"}
      color={"#DFE6EF"}
      display={"flex"}
      flexDir={"column"}
      gap={{ base: "4rem", md: "6rem" }}
      // overflowX={"hidden"}
      // variants={motionVariant}
      // initial={"hidden"}
      // animate={"vissible"}
    >
      <Box
        as={"div"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        color={"#DFE6EF"}
        data-aos="fade-right"
      >
        <MotionBox
          initial={{ y: "-70vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 3, type: "linear" }}
        >
          <Image
            src="/vecteezy_3d-male-character-happy-working-on-a-laptop_24785816.png"
            width={400}
            height={400}
          />
        </MotionBox>
        <Box maxW={"35rem"}>
          <Heading
            textAlign={"center"}
            color={"#DFE6EF"}
            fontFamily={"galano grotesque"}
            fontWeight={800}
            data-aos="fade-up"
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
          <MotionBox px={{ base: "1rem" }}>
            <Text
              textAlign={"center"}
              fontSize={"1.3rem"}
              fontWeight={"400"}
              // fontFamily={"Playwrite ES Deco"}
              // fontStyle={"italic"}
              fontFamily={"galano grotesque"}
            >
              Detailed and result-oriented Front-End developer passionate in
              building pixel-perfect, engaging, user intuitive accessible
              digital experiences.
            </Text>
          </MotionBox>
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
          <Box
            data-aos="fade-up"
            as={"div"}
            maxWidth={"70rem"}
            borderLeft={"5px solid"}
            borderRadius={"10px"}
            mx={{ base: "1rem", md: "2rem" }}
            pl={{ base: "0.2rem", md: "1rem" }}
          >
            <Text
              marginLeft={"0.7rem"}
              fontSize={"1.2rem"}
              fontWeight={500}
              fontFamily={"galano grotesque"}
              // fontStyle={"italic"}
              lineHeight={"35px"}
            >
              I&apos;m a dedicated and awesome Software developer with a year
              experience of working on solving innovative real world problems to
              make the world a better place for everybody to live. I have a
              passion for learning and sharing my knowledge with others. Highly
              adapt to both independent and collaborate on Innovative and Real
              life project with an incredible objective towards achieving a life
              changing results. Now learning web3 and exploring blockchain
              innovation.
            </Text>
          </Box>
          <Image
            data-aos="fade-up"
            // as={"div"}
            src="/aboutme.png"
            width={300}
            height={300}
          />
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

        <Box overflow={"hidden"} mt={"2rem"}>
          <MotionBox className={classes["slide-track"]}>
            {SKILLS.concat(SKILLS).map((skill, index) => {
              // Concatenate the SKILLS array to duplicate the items
              return (
                <Box key={index} className={classes.slide}>
                  {skill.tag}
                  <Text fontSize={"1rem"}>{skill.title}</Text>
                </Box>
              );
            })}
          </MotionBox>
        </Box>
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
          px={{ base: "1rem" }}
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
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  borderRadius={"10px"}
                  src={project.image}
                  boxSize={{ md: "50%", xl: "30%" }}
                />

                <Box
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
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
                      <MotionButton
                        borderRadius={"20px"}
                        // animate={{}}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        View product
                      </MotionButton>
                    </a>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        data-aos="fade-up"
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
        <Heading
          px={{ base: "0.7rem" }}
          fontSize={{ base: "1.5rem", md: "2rem" }}
          mb={"2rem"}
          textAlign={"center"}
        >
          {"Let's Forge an Exciting Partnership Together!"}
        </Heading>
      </Box>
    </Box>
  );
};

export default Home;
