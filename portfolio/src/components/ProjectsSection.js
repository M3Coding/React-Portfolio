import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Pure HTML, CSS, JS Portfolio",
    description:
      "This a portfolio made from pure HTML, CSS, and Javascript.",
    getImageSrc: () => require("../assets/PureHTMLCSSJSPortfolio.png"),
  },
  {
    title: "Little Lemon Restaraunt",
    description:
      "A restaurant page with a menu, location, and reward signup page. ",
    getImageSrc: () => require("/Users/apostlee/Documents/GitHub/React-Portfolio/portfolio/src/assets/LittleLemon.png"),
  },
  {
    title: "React Calculator",
    description:
      "A react calculator 🔥️",
    getImageSrc: () => require("../assets/reactcalc.png"),
  },
  {
    title: "Simple Calculator",
    description:
      "The simplest calculator built with JavaScript functionality.",
    getImageSrc: () => require("../assets/simple calculator.jpeg"),
  },
  
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;