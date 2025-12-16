type StackInfo = {
  icon: string;
  title: string;
  description: string;
};

export const stackInfo: { [key: string]: StackInfo } = {
  html: {
    icon: "/images/html.png",
    title: "HTML",
    description: "Markup language for web",
  },
  css: {
    icon: "/images/css.png",
    title: "CSS",
    description: "Styles for web pages",
  },
  js: {
    icon: "/images/javascript.png",
    title: "JavaScript",
    description: "Scripting language for interactivity",
  },
  sass: {
    icon: "/images/sass.svg",
    title: "Sass",
    description: "CSS preprocessor",
  },
  angular: {
    icon: "/images/angular.png",
    title: "Angular",
    description: "Frontend framework by Google",
  },
  typescript: {
    icon: "/images/typescript.svg",
    title: "TypeScript",
    description: "JavaScript with types",
  },
  rxjs: {
    icon: "/images/rxjs.png",
    title: "RxJS",
    description: "Reactive programming library",
  },
  git: {
    icon: "/images/git.png",
    title: "Git",
    description: "Version control system",
  },
  github: {
    icon: "/images/github.png",
    title: "GitHub",
    description: "Code hosting platform",
  },
  gitlab: {
    icon: "/images/gitlab.svg",
    title: "GitLab",
    description: "DevOps and version control",
  },
  mysql: {
    icon: "/images/mysql.svg",
    title: "MySQL",
    description: "Relational database",
  },
  prisma: {
    icon: "/images/prisma.svg",
    title: "Prisma",
    description: "ORM for databases",
  },
  jenkins: {
    icon: "/images/jenkins.svg",
    title: "Jenkins",
    description: "Automation server",
  },
  cypress: {
    icon: "/images/cypress.png",
    title: "Cypress",
    description: "End-to-end testing tool",
  },
  jest: {
    icon: "/images/jest.svg",
    title: "Jest",
    description: "JavaScript testing framework",
  },
  bootstrap: {
    icon: "/images/bootstrap.png",
    title: "Bootstrap",
    description: "CSS framework",
  },
  tailwind: {
    icon: "/images/tailwind.png",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
  },
  react: {
    icon: "/images/react.png",
    title: "React",
    description: "JavaScript library for UI",
  },
  nextjs: {
    icon: "/images/nextjs.png",
    title: "Next.js",
    description: "React framework for SSR",
  },
};
