import type { Schema } from ".";

export const en: Schema = {
  name: "Mark Bundschuh",
  about:
    "Computer Science and Engineering Student at the Ohio State University. Interested in cybersecurity, web development, system administration, and bleeding edge technology.",
  "meta.index.title": "Mark Bundschuh",
  "meta.index.description": "Cybersecurity enthusiest and software developer",
  "meta.resume.title": "Mark Bundschuh's Resume",
  "meta.resume.description":
    "Mark's resume styled with Tailwind (print to pdf to use)",
  "meta.card.front.title": "Mark Bundschuh's Business Card (Front)",
  "meta.card.back.title": "Mark Bundschuh's Business Card (Back)",
  "meta.card.description":
    "Mark's card styled with Tailwind (print to pdf to use)",

  "misc.resume": "Resume",
  "misc.relational-databases": "Relational Databases",
  "misc.phone": "[redacted]",

  "card.profression": "Software Developer",

  "objective.title": "Objective",
  "objective.text":
    "Internship opportunity for Summer 2024 that lets me apply and grow my skills in software.",

  "personal-project.canvas-cli.description":
    "Using the Canvas LMS API, upload files to submit assignments and more from the command line",

  "personal-project.cdr.description":
    "Solves the graph of class prerequisites at OSU and renders an interactive graph",

  "personal-project.homelab.description":
    "Homelab Kubernetes cluster managed with GitOps practices, self-hosting many services like Nextcloud, Searxng, Gitea, and more",

  "interests.title": "Interests",
  "interests.description":
    "Software development, Linux, homelab & server administration, cybersecurity",

  "skills.title": "Skills",
  "skills.preferred-tech.title": "Preferred Tech",
  "skills.familiar-tech.title": "Familiar Tech",
  "skills.infrastructure.title": "Infrastructure",
  "skills.tools.title": "Tools",

  "languages.title": "Languages",
  "languages.description": "Bilingual in English and German",

  "hobbies.title": "Hobbies",
  "hobbies.description": "Playing Dungeons & Dragons, video games, card games",

  "education.title": "Education",
  "education.description":
    "The Ohio State University, BS in Computer Science and Engineering. 2026 expected graduation",

  "projects.title": "Personal Projects",

  "experience.title": "Experience",
  "experience.present": "Present",

  "experience.intern-kudu.header": "Kudu Dynamics",
  "experience.intern-kudu.subheader": "Intern · Summer 2023",
  "experience.intern-kudu.description": "Lorem ipsum dolar sit amet.",

  "experience.vice-president-cyber.header": "Cybersecurity Club at OSU",
  "experience.vice-president-cyber.subheader":
    "Vice President · Winter 2023-present",
  "experience.vice-president-cyber.description":
    "Participate in hacking and cybersecurity competitions throughout the year. Manage club infrastructure on AWS and host BuckeyeCTF yearly.",

  "experience.coauthor-sandcat.header": "Outbreak of FIP in three Sand Cats",
  "experience.coauthor-sandcat.subheader":
    "Coauthor · 2023 · Research · Other experience",
  "experience.coauthor-sandcat.description":
    "Assembled genome of an unknown virus which infected sand cats from the zoo in 2020.",

  "experience.internship-insigma.header": "INSIGMA IT Engineering GmbH",
  "experience.internship-insigma.subheader": "Intern · Summer 2021 · Remote",
  "experience.internship-insigma.description":
    "Remote internship with a software company. Helped migrate an old website to C# ASP.NET MVC. Communication was done entirely in German.",
} as const;
