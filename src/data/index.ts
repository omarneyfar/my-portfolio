import { hero } from "./hero";
import { about } from "./about";
import { skills } from "./skills";
import { projects } from "./projects";
import { contact } from "./contact";
import { cv } from "./cv";
import { AppData } from "./types";

const appData: AppData = {
  hero,
  about,
  skills,
  projects,
  contact,
  cv
};

export const getData = (lang: "en" | "fr" = "en") => {
  return appData;
};

export const getCV = (lang: "en" | "fr" = "en") => {
};

export const getProjects = (lang: "en" | "fr" = "en") => {
  return getData(lang).projects;
};

export const getSkills = (lang: "en" | "fr" = "en") => {
  return getData(lang).skills;
};

export const getAbout = (lang: "en" | "fr" = "en") => {
  return getData(lang).about;
};

export const getContact = (lang: "en" | "fr" = "en") => {
  return getData(lang).contact;
};

export const getHero = (lang: "en" | "fr" = "en") => {
  return getData(lang).hero;
};
