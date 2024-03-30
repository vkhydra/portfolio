"use client";

import { useEffect, useRef, useState } from "react";
import CarouselItem from "./carouselItem";
import Swiper from "swiper";
import styled from "styled-components";
import {
  CarouselContainer,
  CarouselWrapper,
  Button,
} from "@/styles/styled-components/caroulsel";
import { ArrowLeftCircle, ArrowRightCircle } from "./heroIcons/heroIcons";
export default function Carousel() {
  const projects = [
    {
      title: "FocusTime",
      description:
        "É um projeto desenvolvido para aqueles que ficam muito tempo parados com seus afazeres(trabalho, estudos, jogos), ou simplesmente não praticam alongamentos para sua saúde corporal.",
      link: "https://focustime.vercel.app/ ",
      technologies: ["Next"],
    },
    {
      title: "Em Breve",
      description: "",
      link: "",
      technologies: ["Em Breve"],
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <CarouselContainer className="max-w-md h-full mx-auto mt-11">
      <CarouselWrapper>
        {projects
          .filter((project, index) => index === currentSlide)
          .map((project, index) => (
            <CarouselItem
              key={index}
              link={project.link}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
      </CarouselWrapper>
      <Button $prev onClick={handlePrev}>
        <ArrowLeftCircle className="w-10" />
      </Button>
      <Button $next onClick={handleNext}>
        <ArrowRightCircle className="w-10" />
      </Button>
    </CarouselContainer>
  );
}
