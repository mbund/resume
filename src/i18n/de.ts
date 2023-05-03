import type { IncompleteSchema } from ".";

export const de: IncompleteSchema = {
  name: "Mark Bundschuh",
  about:
    "Informatikstudent an der Ohio State University. Interessiert an Cybersicherheit, Softwareentwicklung, Serveradministration und Technologie.",
  "misc.resume": "Lebenslauf",
  "meta.index.title": "Mark Bundschuh",
  "meta.index.description": "Softwareentwickler",
  "meta.resume.title": "Lebenslauf von Mark Bundschuh",
  "meta.resume.description":
    "Marks Lebenslauf, gestaltet mit Tailwind (als pdf ausdrucken)",

  "objective.title": "Zielsetzung",
  "objective.text": "Praktikumsmöglichkeit für den Sommer 2023.",

  "personal-project.canvas-cli.description":
    "Benutz die Canvas API um Dateien auf Canvas hochzuladen und mehr",

  "personal-project.cdr.description":
    "Klassenabhängigkeiten visualisieren an der OSU",

  "personal-project.nix-config.description":
    "Meine NixOS und home-manager Konfiguration, die ich für meine tägliche Arbeit verwende",

  "interests.title": "Leidenschaften",
  "interests.description":
    "Softwareentwicklung, Linux, Homelab & Serveradministration, Cybersicherheit",

  "skills.title": "Fähigkeiten",
  "skills.preferred-tech.title": "Bevorzugte Technologien",
  "skills.familiar-tech.title": "Bekannte Technologien",
  "skills.infrastructure.title": "Infrastruktur",
  "skills.tools.title": "Werkzeuge",
  "misc.relational-databases": "Relationale Datenbanken",

  "languages.title": "Sprachen",
  "languages.description": "Zweisprachig, Deutsch und Englisch",

  "hobbies.title": "Hobbys",
  "hobbies.description":
    "Dungeons & Dragons spielen, Videospiele, Kartenspiele",

  "education.title": "Ausbildung",
  "education.description":
    "The Ohio State University, USA. Informatik, Abschlussjahr 2026",

  "experience.title": "Erfahrung",
  "experience.present": "Jetzt",

  "experience.vice-president-cyber.header": "Cybersicherheits Klub bei OSU",
  "experience.vice-president-cyber.subheader":
    "Vizepräsident · Winter 2023-jetzt",
  "experience.vice-president-cyber.description":
    "Partizipieren bei Hacking und Cybersicherheitswettbewerben. Verwalte die Klub Infrastruktur auf AWS und veranstalte jährlich BuckeyeCTF.",

  "experience.coauthor-sandcat.header": "Outbreak of FIP in three Sand Cats",
  "experience.coauthor-sandcat.subheader":
    "Mitautor · 2023 · Forschung · Andere Erfahrung",
  "experience.coauthor-sandcat.description":
    "Das Genom eines unbekannten Virus assembliert, das 2020 Sandkatzen aus dem Zoo infizierte.",

  "experience.internship-insigma.header": "INSIGMA IT Engineering GmbH",
  "experience.internship-insigma.subheader":
    "Praktikum · Sommerferien 2021 · Homeoffice",
  "experience.internship-insigma.description":
    "Homeoffice Praktikum bei einer Softwarefirma. Arbeitete an der Migration einer alten Website zu C# ASP.NET MVC. Kommunikation war ausschließlich auf Deutsch.",
} as const;
