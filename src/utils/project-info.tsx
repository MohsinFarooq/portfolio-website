export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
}
export const projects: Project[] = [
  {
    id: 1,
    name: "Weatherly360",
    description:
      "A vanilla JS weather app with real-time conditions and forecasts. Includes PWA support for offline use and an end-to-end test suite built with Cypress.",
    tech: ["JavaScript", "OpenWeather API", "PWA", "Cypress", "Vercel"],
    liveUrl: "https://weatherly360.vercel.app/",
    githubUrl: "https://github.com/MohsinFarooq/Weather-App",
    status: "Live",
  },
  {
    id: 2,
    name: "WebQR Generator",
    description:
      "Generate QR codes instantly from any URL or text. Fast, lightweight, and runs entirely in the browser — no backend required.",
    tech: ["JavaScript", "qrcode.js", "HTML5", "Netlify"],
    liveUrl: "https://webqrgenerator.netlify.app/",
    githubUrl: "https://github.com/MohsinFarooq/webqr-generator",
    status: "Live",
  },
];
