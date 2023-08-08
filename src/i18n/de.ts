import type { Schema } from "~/i18n";

export const de: Schema = {
  name: "Mark Bundschuh",
  about:
    "Informatikstudent an der Ohio State University. Interessiert an Cybersicherheit, Softwareentwicklung, Serveradministration und Technologie.",
  "meta.index.title": "Mark Bundschuh",
  "meta.index.description": "Softwareentwickler",
  "meta.resume.title": "Lebenslauf von Mark Bundschuh",
  "meta.resume.description":
    "Marks Lebenslauf, gestaltet mit Tailwind (als pdf ausdrucken)",
  "meta.card.front.title": "Visitenkarte von Mark Bundschuh (Vorderseite)",
  "meta.card.back.title": "Visitenkarte von Mark Bundschuh (Rückseite)",
  "meta.card.description":
    "Marks Visitenkarte, gestaltet mit Tailwind (als pdf ausdrucken)",

  "misc.resume": "Lebenslauf",
  "misc.relational-databases": "Relationale Datenbanken",
  "misc.phone": "[redacted]",

  "card.profression": "Softwareentwickler",

  "objective.title": "Zielsetzung",
  "objective.text": "Praktikumsmöglichkeit für den Sommer 2024.",

  "personal-project.canvas-cli.description":
    "Benutz die Canvas API um Dateien auf Canvas hochzuladen und mehr",

  "personal-project.cdr.description":
    "Löst der Graph der Klassenvoraussetzungen an der OSU und erstellt ein interaktives Diagramm",

  "personal-project.homelab.description":
    "Homelab Kubernetes-Cluster, der viele Apps wie Nextcloud, Searxng, Gitea und mehr hostet",

  "interests.title": "Leidenschaften",
  "interests.description":
    "Softwareentwicklung, Linux, Homelab & Serveradministration, Cybersicherheit",

  "skills.title": "Fähigkeiten",
  "skills.preferred-tech.title": "Bevorzugte Technologien",
  "skills.familiar-tech.title": "Bekannte Technologien",
  "skills.infrastructure.title": "Infrastruktur",
  "skills.tools.title": "Werkzeuge",

  "languages.title": "Sprachen",
  "languages.description": "Zweisprachig, Deutsch und Englisch",

  "hobbies.title": "Hobbys",
  "hobbies.description":
    "Dungeons & Dragons spielen, Videospiele, Kartenspiele",

  "education.title": "Ausbildung",
  "education.description":
    "The Ohio State University, USA. Informatik, Abschlussjahr 2026",

  "projects.title": "Persönliche Projekte",

  "experience.title": "Erfahrung",
  "experience.present": "Jetzt",

  "experience.intern-kudu.header": "Kudu Dynamics",
  "experience.intern-kudu.subheader": "Praktikum · Sommerferien 2023",
  "experience.intern-kudu.description": "Lorem ipsum dolar sit amet.",

  "experience.vice-president-cyber.header": "Cybersicherheits Klub bei OSU",
  "experience.vice-president-cyber.subheader":
    "Vizepräsident · Winter 2023-jetzt",
  "experience.vice-president-cyber.description":
    "Partizipieren bei Hacking und Cybersicherheitswettbewerben. Verwalte die Klub Infrastruktur auf AWS und veranstalte jährlich BuckeyeCTF.",

  "experience.internship-insigma.header": "INSIGMA IT Engineering GmbH",
  "experience.internship-insigma.subheader":
    "Praktikum · Sommerferien 2021 · Homeoffice",
  "experience.internship-insigma.description":
    "Homeoffice Praktikum bei einer Softwarefirma. Arbeitete an der Migration einer alten Website zu C# ASP.NET MVC. Kommunikation war ausschließlich auf Deutsch.",
} as const;
