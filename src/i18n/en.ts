import type { Schema } from "~/i18n";

export const en: Schema = {
  name: "Mark Bundschuh",
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

  "personal-project.rhombus.description":
    "Next generation CTF framework for players to compete in solving technical cybersecurity based challenges. Built from the ground up with a focus on usability including innovative features such as an integrated ticketing system through a Discord bot, and challenge healthchecks. Fully free and open source and easy to self-host. (WIP)",

  "personal-project.canvas-cli.description":
    "Using the Canvas LMS API, upload files to submit assignments for class from the command line. Works with any Canvas instance (not just OSU's Carmen). Interacts with the REST API and has a slick interface.",

  "personal-project.homelab.description":
    "Homelab Kubernetes cluster managed with GitOps practices, self-hosting many services like Bitwarden, Nextcloud, Prometheus, Grafana, and more. Learning networking and infrastructure through reusing old hardware. Practicing good backup and monitoring practices, and always improving.",

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
    "The Ohio State University, BS in Computer Science and Engineering. December 2025 expected graduation",

  "projects.title": "Personal Projects",

  "experience.title": "Experience",
  "experience.present": "Present",

  "experience.intern-kudu.header": "Kudu Dynamics",
  "experience.intern-kudu.subheader": "Intern · Summer 2023",
  "experience.intern-kudu.description":
    "In support of Kudu Dynamics' DARPA PACE effort, developed a VSCode extension to assist in Linux Kernel development and bug triaging process. Integrated automated tooling to examine and reveal higher impact risks from known bugs in the kernel. Continuously field tested the extension by reproducing known CVEs to find valuable UI/UX improvement areas. Participated in daily stand up meetings, sprint planning and retrospective meetings, code reviews following an Agile-like development process.",

  "experience.cyber-club.header": "Cybersecurity Club at OSU",
  "experience.cyber-club.subheader": "President · Winter 2024-present",
  "experience.cyber-club.description":
    "Participate in hacking and cybersecurity competitions throughout the year. Manage club infrastructure on AWS and host BuckeyeCTF yearly. BuckeyeCTF 2023 included over 600 teams worldwide online, and 90 in person players. Managed logistical challenges of the in person event, as well as technical challenges (only ~3 minutes of downtime due to us upscaling our Traefik instance). All hosted on AWS and managed with Terraform. Coordinated with 7 different sponsor companies to provide funding and prizes for the event. Last year served as Vice President, and now this year as President.",

  "experience.internship-insigma.header": "INSIGMA IT Engineering GmbH",
  "experience.internship-insigma.subheader": "Intern · Summer 2021 · Remote",
  "experience.internship-insigma.description":
    "Remote internship with a software company. Helped migrate a Visual Basic website to C# ASP.NET MVC. Also worked with Microsoft SQL Server and web technologies like CSS and TypeScript. Communication was done entirely in German.",
} as const;
