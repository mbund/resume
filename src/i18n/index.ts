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
  "projects.title": string;
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

export type SkillMeta = {
  name: string;
  url?: string;
  icon: string;
};

function createSkillsData<T extends Record<string, SkillMeta>>(data: T): T {
  return data;
}

const skillsData = createSkillsData({
  typescript: {
    name: "TypeScript",
    url: "https://typescriptlang.org",
    icon: "logos:typescript-icon",
  },
  react: {
    name: "React",
    url: "https://react.dev",
    icon: "logos:react",
  },
  nextjs: {
    name: "Next.js",
    url: "https://nextjs.org",
    icon: "logos:nextjs-icon",
  },
  astro: {
    name: "Astro",
    url: "https://astro.build",
    icon: "simple-icons:astro",
  },
  tailwind: {
    name: "TailwindCSS",
    url: "https://tailwindcss.com",
    icon: "logos:tailwindcss-icon",
  },
  css: {
    name: "CSS",
    url: "https://w3.org/Style/CSS/Overview",
    icon: "logos:css-3",
  },
  zig: {
    name: "Zig",
    url: "https://ziglang.org",
    icon: "vscode-icons:file-type-zig",
  },
  rust: { name: "Rust", url: "https://rust-lang.org", icon: "logos:rust" },
  c: { name: "C", icon: "logos:c" },
  cpp: { name: "C++", icon: "logos:c-plusplus" },
  python: { name: "Python", url: "https://python.org", icon: "logos:python" },
  bash: { name: "Bash/shells", icon: "logos:bash-icon" },
  kotlin: {
    name: "Kotlin",
    url: "https://kotlinlang.org",
    icon: "logos:kotlin",
  },
  csharp: {
    name: "C#",
    url: "https://dotnet.microsoft.com/languages/csharp",
    icon: "logos:c-sharp",
  },
  debian: { name: "Debian", url: "https://debian.org", icon: "logos:debian" },
  ubuntu: { name: "Ubuntu", url: "https://ubuntu.com", icon: "logos:ubuntu" },
  fedora: {
    name: "Fedora",
    url: "https://fedoraproject.org",
    icon: "logos:fedora",
  },
  nixos: {
    name: "NixOS",
    url: "https://nixos.org",
    icon: "vscode-icons:file-type-nix",
  },
  kubernetes: {
    name: "Kubernetes",
    url: "https://kubernetes.io",
    icon: "logos:kubernetes",
  },
  systemd: {
    name: "systemd",
    url: "https://systemd.io",
    icon: "vscode-icons:file-type-light-systemd",
  },
  aws: {
    name: "AWS",
    url: "https://aws.amazon.com",
    icon: "logos:aws",
  },
  vscode: {
    name: "VSCode",
    url: "https://code.visualstudio.com",
    icon: "logos:visual-studio-code",
  },
  vim: { name: "Vim/neovim", url: "https://neovim.io", icon: "logos:vim" },
  docker: {
    name: "Docker",
    url: "https://docker.com",
    icon: "logos:docker-icon",
  },
  git: { name: "git", url: "https://git-scm.com", icon: "logos:git-icon" },
});

export const skills: typeof skillsData = skillsData;
