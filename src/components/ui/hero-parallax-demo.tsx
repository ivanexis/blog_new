"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";

export const products = [
  {
    title: "Hero Section",
    link: "#",
    thumbnail: "/01.jpg",
  },
  {
    title: "Logo",
    link: "#",
    thumbnail: "/02.jpg",
  },
  {
    title: "Web design",
    link: "#",
    thumbnail: "/03.jpg",
  },
  {
    title: "UI/UX Web Design",
    link: "#",
    thumbnail: "/04.jpg",
  },
  {
    title: "Project 5",
    link: "#",
    thumbnail: "/05.jpg",
  },
  {
    title: "Indigenous Cultural Imagery Design",
    link: "#",
    thumbnail: "/06.jpg",
  },
  {
    title: "User Login Interface",
    link: "#",
    thumbnail: "/07.jpg",
  },
  {
    title: "Online Shopping Platform",
    link: "#",
    thumbnail: "/08.jpg",
  },
  {
    title: "Course interface",
    link: "#",
    thumbnail: "/09.jpg",
  },
  {
    title: "Project 10",
    link: "#",
    thumbnail: "/10.jpg",
  },
  {
    title: "Web Design",
    link: "#",
    thumbnail: "/11.jpg",
  },
  {
    title: "Web design",
    link: "#",
    thumbnail: "/12.jpg",
  },
  {
    title: "Hero Section",
    link: "#",
    thumbnail: "/13.jpg",
  },
  {
    title: "Indigenous Cultural Imagery Design",
    link: "#",
    thumbnail: "/14.jpg",
  },
  {
    title: "Project 15",
    link: "#",
    thumbnail: "/15.jpg",
  },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
} 