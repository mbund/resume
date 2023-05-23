import { en } from "./en";
import { de } from "./de";

export const languages = ["en", "de"] as const;
export type Language = (typeof languages)[number];

export type Schema = {
  name: string;
  about: string;
  "meta.index.title": string;
  "meta.index.description": string;
  "meta.resume.title": string;
  "meta.resume.description": string;
  "meta.card.front.title": string;
  "meta.card.back.title": string;
  "meta.card.description": string;

  "misc.resume": string;
  "misc.relational-databases": string;
  "misc.phone": string;

  "card.profression": string;

  "objective.title": string;
  "objective.text": string;
  "personal-project.canvas-cli.description": string;
  "personal-project.cdr.description": string;
  "personal-project.homelab.description": string;
  "interests.title": string;
  "interests.description": string;
  "skills.title": string;
  "skills.preferred-tech.title": string;
  "skills.familiar-tech.title": string;
  "skills.infrastructure.title": string;
  "skills.tools.title": string;
  "languages.title": string;
  "languages.description": string;
  "education.title": string;
  "education.description": string;
  "hobbies.title": string;
  "hobbies.description": string;
  "experience.title": string;
  "experience.present": string;
  "experience.intern-kudu.header": string;
  "experience.intern-kudu.subheader": string;
  "experience.intern-kudu.description": string;
  "experience.vice-president-cyber.header": string;
  "experience.vice-president-cyber.subheader": string;
  "experience.vice-president-cyber.description": string;
  "experience.internship-insigma.header": string;
  "experience.internship-insigma.subheader": string;
  "experience.internship-insigma.description": string;
  "experience.coauthor-sandcat.header": string;
  "experience.coauthor-sandcat.subheader": string;
  "experience.coauthor-sandcat.description": string;
};

export type IncompleteSchema = {
  [key in keyof Schema]?: Schema[key];
};

const defaultedSchema = (schema: IncompleteSchema | Schema): Schema => {
  const defaults = en;

  return { ...defaults, ...schema } as Schema;
};

export const getLanguage = (lang: Language): Schema => {
  switch (lang) {
    case "en":
      return defaultedSchema(en);
    case "de":
      return defaultedSchema(de);
  }
};
