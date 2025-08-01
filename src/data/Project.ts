import type { IsWork } from "@/definition";
import { useRoute } from "vue-router";
let route = useRoute();
const projects = true;
// console.log(route?.path);

if (route?.path === "/project") {
  projects;
}

export const works = [
  {
    id: 1,
    company: "TechSkool",
    location: "Port Harcourt, Nigeria",
    year: "2025",
    title: "FullStack Developer",
    role: "Contract",
    description:
      "I built the complete webpage from frontend to backend, styling, component logic and the API connection .",
    languages: ["Reactjs", "Shadcn", "Typescript", "laravel", "inertiajs"],
    icons: [
      "vscode-icons:file-type-reactjs",
      "simple-icons:shadcnui",
      "devicon:typescript",
      "devicon:laravel",
      "devicon:inertiajs",
    ],
    img: "/img/jbl.png",
    link: "https://web.buysimply.app/",
    contribution: projects
      ? [
          "I built the Frontend using Reactjs, Tailwind and shadcn ui and React Router",
          "I built the Backend using Laravel",
          "I built and connected the API using inertiajs",
          "I integrated a payment gateway(Paystack) where users pay for their tickets",
          "I built the admin dashboard using Shadcn UI",
        ]
      : null,
  },
  {
    id: 2,
    company: "Buysimply",
    location: "Lagos, Nigeria",
    year: "2024",
    title: "Frontend Developer",
    role: "Contract",
    description:
      "I built the complete frontend architecture, styling, and component logic. API connectivity was implemented by a backend developer I collaborated with.",
    languages: ["Vue", "Vuetify", "Typescript"],
    icons: ["devicon:vuejs", "devicon:vuetify", "devicon:typescript"],
    img: "/img/buySimply.png",
    link: "https://www.jlb.techskool.org/",
    contribution: projects
      ? [
          "I built the Frontend using Vuejs, Tailwind ",

          // "I built the Backend using Laravel",
          // "I built and connected the API using inertiajs",
          // "I integrated a payment gateway(Paystack) where users pay for their tickets",
          // "I built the admin dashboard using Shadcn UI",
        ]
      : null,
  },
  {
    id: 3,
    company: "TriftToWin",
    location: "Lagos, Nigeria",
    year: "2024",
    title: "Frontend Developer",
    role: "Contract",
    description:
      "I built the complete frontend architecture, styling, and component logic. I also connected the api.",
    languages: ["Vue", "Vuetify", "Typescript"],
    icons: ["devicon:vuejs", "devicon:vuetify", "devicon:typescript"],
    img: "/img/trift.png",
    link: "https://play.google.com/store/apps/details?id=com.playthriftowin",
    contribution: projects
      ? [
          "I built the Frontend using Vuejs, Tailwind and Momentjs and VueRouter",
          "I also connected the api using Axios",
        ]
      : null,
  },
  {
    id: 4,
    company: "E skool",
    location: "Lagos, Nigeria",
    year: "2022",
    title: "Frontend Developer",
    role: "Contract",
    description:
      "I built the complete frontend architecture, styling, and component logic.",
    languages: ["React", "Tailwind", "Typescript"],
    icons: [
      "vscode-icons:file-type-reactjs",
      "devicon:tailwindcss",
      "devicon:typescript",
    ],
    img: "/img/eskool.png",
    link: "https://www.results.eskoolnow.com/",
    contribution: projects
      ? [
          "I built the Frontend using Reactjs, Tailwind and ChakraUi",
          // "I built the Backend using Laravel",
          // "I built and connected the API using inertiajs",
          // "I integrated a payment gateway(Paystack) where users pay for their tickets",
          // "I built the admin dashboard using Shadcn UI",
        ]
      : null,
  },
] as IsWork[];
