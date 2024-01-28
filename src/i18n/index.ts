import { en } from "./en";
import { de } from "./de";

export const languages = ["en", "de"] as const;
export type Language = (typeof languages)[number];

export type Schema = {
  name: string;
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
  "personal-project.rhombus.description": string;
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
  "experience.cyber-club.header": string;
  "experience.cyber-club.subheader": string;
  "experience.cyber-club.description": string;
  "experience.internship-insigma.header": string;
  "experience.internship-insigma.subheader": string;
  "experience.internship-insigma.description": string;
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
  url: string | undefined;
  icon: string;
};

function createSkillsData<T extends Record<string, SkillMeta>>(data: T): T {
  return data;
}

export const skills = createSkillsData({
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
  svelte: {
    name: "Svelte",
    url: "https://svelte.dev",
    icon: "devicon:svelte",
  },
  astro: {
    name: "Astro",
    url: "https://astro.build",
    icon: "devicon:astro",
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
    icon: "devicon:zig",
  },
  rust: { name: "Rust", url: "https://rust-lang.org", icon: "logos:rust" },
  c: { name: "C", url: undefined, icon: "logos:c" },
  cpp: { name: "C++", url: undefined, icon: "logos:c-plusplus" },
  python: { name: "Python", url: "https://python.org", icon: "logos:python" },
  bash: { name: "Bash/shells", url: undefined, icon: "logos:bash-icon" },
  kotlin: {
    name: "Kotlin",
    url: "https://kotlinlang.org",
    icon: "devicon:kotlin",
  },
  csharp: {
    name: "C#",
    url: "https://dotnet.microsoft.com/languages/csharp",
    icon: "devicon:csharp",
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
    icon: "devicon:nixos",
  },
  kubernetes: {
    name: "Kubernetes",
    url: "https://kubernetes.io",
    icon: "logos:kubernetes",
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
  terraform: {
    name: "Terraform",
    url: "https://terraform.io",
    icon: "logos:terraform-icon",
  },
  github_actions: {
    name: "Actions",
    url: "https://github.com/features/actions",
    icon: "logos:github-icon",
  },
});
