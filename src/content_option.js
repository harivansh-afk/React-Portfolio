const logotext = "HARIVANSH";
const meta = {
    title: "Harivansh Rathi | Portfolio",
    description: "I'm Harivansh Rathi, a Computer Science student at the University of Virginia.",
};

const introdata = {
    title: "Hi, I'm Harivansh Rathi",
    animated: {
        first: "Full Stack Developer",
        second: "Software Engineer",
        third: "Tech Enthusiast",
    },
    description: "I'm passionate about building exceptional digital experiences that make a difference. With expertise in both frontend and backend development, I create scalable and efficient solutions that solve real-world problems.",
    your_img_url: "/assets/images/new_headshot.png",
};

const dataabout = {
    title: "About Me",
    aboutme: "I am a Computer Science student at the University of Virginia, with a passion for software development and AI. I enjoy building scalable applications and exploring the latest advancements in technology. I am always eager to learn and contribute to innovative projects.",
};
const worktimeline = [{
        jobtitle: "Software Development Intern",
        where: "SUPPLMEN",
        date: "January 2025 - Present",
        url: "https://suppl-men.vercel.app/"
    },
    {
        jobtitle: "Co Founder",
        where: "SOLVEX",
        date: "December 2024 - Present",
        url: "https://solvex.live/"
    },
    {
        jobtitle: "Front End Development Intern",
        where: "UNIKOVE TECHNOLOGIES",
        date: "June 2024 - August 2024",
        url: "https://unikove.com/"
    },
    {
        jobtitle: "Software Development Intern",
        where: "MOGLIX",
        date: "June 2023 - August 2023",
        url: "https://www.moglix.com/"
    },
    {
        jobtitle: "Software Engineering Intern",
        where: "SAN AUTO",
        date: "June 2022 - August 2022",
        url: "https://www.sanautomotive.com/"
    },
];

const skills = [
    {
        name: "Full-Stack Development",
        value: 85,
    },
    {
        name: "Frontend (React/Next.js)",
        value: 90,
    },
    {
        name: "Backend (Node.js)",
        value: 88,
    },
    {
        name: "AI & Machine Learning",
        value: 85,
    },
    {
        name: "Database & API Design",
        value: 85,
    },
    {
        name: "DevOps & Deployment",
        value: 87,
    },
];

const services = [{
        title: "Front End Development",
        description: "Utilizing JavaScript and React.js to refine UX design elements, ensuring seamless functionality and integration.",
    },
    {
        title: "Back End Development",
        description: "Developing robust and scalable backend solutions using Node.js, Express.js, and SQL databases.",
    },
    {
        title: "AI Application Development",
        description: "Building AI-powered applications with a focus on document retrieval and data analysis.",
    },
];

const dataportfolio = [{
        img: "/images/project8.jpg",
        description: "The Truman Project, A real-time fact-checking platform that instantly transcribes conversations and verifies claims using a network of specialized AI agents for combating misinformation.",
        link: "https://thetrumanproject.vercel.app/",
    },
    {
        img: "/images/project7.jpg",
        description: "AI-Powered Photo Editor, A modern SPA using Next.js, TypeScript, and Google Gemini 2.0 for real-time AI image transformations with an intuitive interface",
        link: "https://ai-image-editor-three.vercel.app/",
    },
    {
        img: "/images/project6.jpg",
        description: "AI-Powered Real Estate Investment Analysis. Make data-driven property investment decisions with comprehensive analytics, risk assessment, and market insights powered by artificial intelligence.",
        link: "https://estate-ai-eight.vercel.app/landing",
    },
    {
        img: "/images/project5.jpg",
        description: "Founded SolveX, a gamified algorithm practice platform featuring real-time battles, AI-powered problem generation, and competitive matchmaking",
        link: "https://solvex.live",
    },
    {
        img: "/images/project1.jpg",
        description: "Built a React/TypeScript RAG AI chat application with n8n, achieving 95% query response accuracy",
        link: "https://rag-ui-six.vercel.app/",
    },
    {
        img: "/images/project2.jpg",
        description: "Co-authored a research paper on cryptocurrency market predictability with a PHD student at CMU",
        link: "https://docs.google.com/document/d/1i0IZgHYEERKVdRMBtCdK6jJGRoEoZUY7T43fuGKEDm8/edit?tab=t.0#heading=h.nazxqu6em5gk",
    },
    {
        img: "/images/project3.jpg",
        description: "Built a full-stack habit tracker web app with React, TypeScript, and Supabase, boosting scalability by 25%",
        link: "https://habit-tracker-2-eta.vercel.app/",
    },
    {
        img: "/images/project4.jpg",
        description: "Built a React/TypeScript app with Shadcn/UI and Tailwind, implementing lazy loading for 40% faster loads",
        link: "https://guidetoausten.netlify.app/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "zng2gc@virginia.edu",
    YOUR_FONE: "+1 434-310-1227",
    description: "I am currently based in Charlottesville, VA. Feel free to reach out to me for any opportunities or collaborations.",
    YOUR_SERVICE_ID: "YOUR_EMAILJS_SERVICE_ID",
    YOUR_TEMPLATE_ID: "YOUR_EMAILJS_TEMPLATE_ID",
    YOUR_USER_ID: "YOUR_EMAILJS_PUBLIC_KEY",
};

const socialprofils = {
    github: "https://github.com/harivansh-afk",
    linkedin: "https://linkedin.com/in/harivansh-rathi",
    resume: "https://docs.google.com/document/d/1TKbtqYinjRNFZiZNbxEwRTz5QDiZ5mOk/edit?usp=sharing&ouid=104313709347999918268&rtpof=true&sd=true"
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
