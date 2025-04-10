import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";
import { title } from "process";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+4 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "+200 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+50 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 4,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "./slider-0.jpg",
    },
    {
        id: 2,
        url: "./slider-2.jpg",
    },
    {
        id: 3,
        url: "./slider-3.jpg",
    },
    {
        id: 4,
        url: "./slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "YouPark",
        image: "./youpark.jpg",
        urlGithub: "https://github.com/JuaanDuque/YouPark",
        urlDemo: "",
    },
];


export const dataExperience = [
    {
        id: 1,
        title,
        experience: [
            {
                name: "HTML",
            },
            {
                name: "CSS",
            },
            {
                name: "JavaScript",
            },
            {
                name: "React",
            },
            {
                name: "Bootstrap",
            },
            {
                name: "Node JS",
            },
            {
                name: ".NET",
            },
            {
                name: "Java",
            },
            {
                name: "MySQL",
            },
            {
                name: "Git",
            },
        ],
    },
];

export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+57 3016507174",
        link: "https://wa.link/q2qh0j",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/JuaanDuque",
        link: "https://github.com/JuaanDuque",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "duque2607j@gmail.com",
        link: "mailto:duque2607j@gmail.com",
        icon: <Inbox />,
    },
];
