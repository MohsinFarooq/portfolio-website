export type StackCategory =
  | "Frontend"
  | "Backend"
  | "DevOps & Testing"
  | "Tools";

type StackInfo = {
  icon: string;
  title: string;
  category: StackCategory;
};

export const stackCategoryOrder: StackCategory[] = [
  "Frontend",
  "Backend",
  "DevOps & Testing",
  "Tools",
];

export const stackInfo: { [key: string]: StackInfo } = {
  html: {
    icon: "/images/html.png",
    title: "HTML",
    category: "Frontend",
  },
  css: {
    icon: "/images/css.png",
    title: "CSS",
    category: "Frontend",
  },
  js: {
    icon: "/images/javascript.png",
    title: "JavaScript",
    category: "Frontend",
  },
  sass: {
    icon: "/images/sass.svg",
    title: "Sass",
    category: "Frontend",
  },
  angular: {
    icon: "/images/angular.png",
    title: "Angular",
    category: "Frontend",
  },
  typescript: {
    icon: "/images/typescript.svg",
    title: "TypeScript",
    category: "Frontend",
  },
  rxjs: {
    icon: "/images/rxjs.png",
    title: "RxJS",
    category: "Frontend",
  },
  bootstrap: {
    icon: "/images/bootstrap.png",
    title: "Bootstrap",
    category: "Frontend",
  },
  tailwind: {
    icon: "/images/tailwind.png",
    title: "Tailwind CSS",
    category: "Frontend",
  },
  java: {
    icon: "/images/Java.svg",
    title: "Java",
    category: "Backend",
  },
  springboot: {
    icon: "/images/Spring.svg",
    title: "Spring Boot",
    category: "Backend",
  },
  mysql: {
    icon: "/images/mysql.svg",
    title: "MySQL",
    category: "Backend",
  },
  prisma: {
    icon: "/images/prisma.svg",
    title: "Prisma",
    category: "Backend",
  },
  docker: {
    icon: "/images/Docker.svg",
    title: "Docker",
    category: "DevOps & Testing",
  },
  jenkins: {
    icon: "/images/jenkins.svg",
    title: "Jenkins",
    category: "DevOps & Testing",
  },
  cypress: {
    icon: "/images/cypress.png",
    title: "Cypress",
    category: "DevOps & Testing",
  },
  jest: {
    icon: "/images/jest.svg",
    title: "Jest",
    category: "DevOps & Testing",
  },
  git: {
    icon: "/images/git.png",
    title: "Git",
    category: "Tools",
  },
  github: {
    icon: "/images/github.png",
    title: "GitHub",
    category: "Tools",
  },
  gitlab: {
    icon: "/images/gitlab.svg",
    title: "GitLab",
    category: "Tools",
  },
};
