import type { IsWork } from "@/definition";
import { useRoute } from "vue-router";
let route = useRoute();
const projects = true;
if (route?.path === "/project") {
  projects;
}
export const works = [
  {
    id: 1,
    company: "HandyPal",
    location: "Lagos, Nigeria",
    year: "2025 - 2026",
    title: "FullStack Developer",
    role: "full-time",
    description:
      "HandyPal is a modern web-based platform designed to connect users with skilled service providers for everyday tasks such as home repairs, maintenance, and other on-demand services. The application streamlines the process of finding reliable professionals by offering an intuitive interface where users can browse services, view provider details, and book appointments. The platform focuses on user convenience and efficiency, featuring a clean and responsive design that ensures accessibility across devices. Users can easily navigate through available services, select their preferred provider, and schedule jobs without unnecessary complexity.On the provider side, HandyPal enables service professionals to showcase their skills, manage availability, and receive booking requests, creating a two-sided marketplace that benefits both customers and workers.",
    languages: [
      "Reactjs",
      "Shadcn",
      "Typescript",
      "Tanstack",
      "Prisma",
      "PostgreSQL",
    ],
    icons: [
      "vscode-icons:file-type-reactjs",
      "simple-icons:shadcnui",
      "devicon:typescript",
      "devicon:prisma",
      "devicon:postgresql",
    ],
    img: "/img/handypal.png",
    link: "https://handypal.vercel.app/",
    contribution: projects
      ? [
          "User-friendly interface for browsing and booking services",
          "Responsive design for mobile and desktop users",
          "Service provider profiles with relevant details",
          "Seamless booking workflow",
          "Scalable structure for adding more services and features",
        ]
      : null,
  },
  {
    id: 2,
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
    link: "https://www.jlb.techskool.org/",
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
