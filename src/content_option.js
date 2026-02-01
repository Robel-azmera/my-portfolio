import yourImage from './assets/images/pic.png'; // Adjust the path as needed
import giftshopImg from './assets/images/giftshop.jpeg';
import posImg from './assets/images/pos.jpeg';
import aiImg from './assets/images/ai.jpeg';
import authorImg from './assets/images/author.png';
import mposImg from './assets/images/mpos.jpg';

const logotext = "Robel";
const meta = {
    title: "Robel Azmera",
    description: "I’m Robel Azmera Senior Software Engineer specializing in Web ,POS and Mobile Applications",
};

const introdata = {
    title: "I’m Robel Azmera",
    animated: {
        first: "I love coding",
        second: "I develop websites",
        third: "I develop mobile apps",
    },
    description: "POS Expert | Full-Stack Engineer (Flutter, ReactJS, Node.js, PostgreSQL) | Tailwind CSS | Building Scalable, High-Performance Retail & Fintech Solutions.",
    // your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
    your_img_url: yourImage,
};

const dataabout = {
    title: "About my self",
    aboutme: "POS Expert | Full-Stack Engineer (Flutter, ReactJS, Node.js, PostgreSQL) | Tailwind CSS | Building Scalable, High-Performance Retail & Fintech Solutions.",
};
const worktimeline = [{
        jobtitle: "Junior Software Developer",
        where: "Santimpay Financial Solutions S.C",
        date: "2022-2024",
    },
    {
        jobtitle: "Senior Software Developer | POS expert",
        where: "Santimpay Financial Solutions S.C",
        date: "2024-present",
    },
    {
        jobtitle: "Acquiring Manager",
        where: "SanuPay International L.L.C-FZ",
        date: "2026-Present",
    },
];

const skills = [{
        name: "Python",
        value: 94,
    },
    {
        name: "Flutter",
        value: 100,
    },
     {
        name: "ReactJS",
        value: 96,
    },
    
    {
        name: "Javascript",
        value: 93,
    },
    
    {
        name: "C#",
        value: 85,
    },
    {
        name: "Java",
        value: 89,
    },
    {
        name: "NodeJS",
        value: 95,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "I design intuitive and visually appealing interfaces to enhance user experiences, Tailored designs that reflect your brand identity, User-Centered designs that prioritize usability and accessibility, Cross-Platform seamless designs across web and mobile platforms, Get a clear preview of your product before development.",
    },
    {
        title: "Mobile Apps",
        description: "I build high-performance mobile applications tailored to your business needs. Single codebase for both iOS and Android platforms, Feature-Rich Applications, End-to-End From concept to deployment on App Stores, App Maintenance & Support.",
    },
    {
        title: "Web App Developments",
        description: "I create responsive and modern websites that help your business thrive online, Designed and developed to fit your business needs, Responsive Design, SEO Optimization E-Commerce Integration,and Performance Optimization.",
    },
];

const dataportfolio = [{
        img: giftshopImg,
        description: "Gift Shop Application",
        link: "#",
    },
    {
        img: aiImg,
        description: "AI Integrated Application",
        link: "#",
    },
    {
        img: posImg,
        description: "POS Application",
        link: "#",
    },
    {
        img: mposImg,
        description: "MPOS Application",
        link: "#",
    },
    {
        img: authorImg,
        description: "Author Blog",
        link: "behailumulugeta.vercel.app",
    },
];

const contactConfig = {
    YOUR_EMAIL: "robazmera@gmail.com",
    YOUR_FONE: "+(251) 919 813 323",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_14bxokn",
    YOUR_TEMPLATE_ID: "template_13t10eg",
    YOUR_USER_ID: "bavwR7C5120GcCjrE",
};

const socialprofils = {
    github: "https://github.com/Robel-azmera",
    facebook: "https://www.facebook.com/profile.php?id=100005000739550&mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/robel-azmera",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};