// used in Projects section

const techDescriptions = {
    "React": "A JavaScript library for building user interfaces.",
    "Node.js": "A runtime environment that allows running JavaScript on the server.",
    "JSX": "A syntax extension for JavaScript, used with React to describe UI structure.",
    "Tailwind": "A utility-first CSS framework for building modern and responsive designs.",
    "ThreeJs": "A JavaScript library used for rendering 3D graphics in the browser.",
    "I18n": "Internationalization library for supporting multiple languages.",
    "Atropos": "A hover effect library that creates layered 3D tilt effects.",
    "ChartJs": "A JavaScript library for creating interactive charts and graphs.",
    "GSAP": "A JavaScript animation library for smooth and complex animations.",
    "Router dom": "A routing library for React applications, enabling navigation between pages.",
    "Next.js": "A React framework for building fast and optimized web applications.",
    "Prisma": "A modern database ORM for managing and interacting with databases.",
    "TSX": "TypeScript syntax extension for React components.",
    "Spline": "A tool for creating and embedding 3D interactive experiences.",
    "HTML": "The standard markup language for creating web pages.",
    "CSS": "A styling language used to design web pages and control layout.",
    "JS": "JavaScript, a programming language used to create interactive web experiences."
};


// used in about section
const skillSections = [
    {
        title: "Frontend",
        skills: [
            { name: "React", description: "A JavaScript library for building user interfaces." },
            { name: "TypeScript", description: "A typed superset of JavaScript for better tooling and scalability." },
            { name: "ThreeJs", description: "A 3D library for creating and rendering 3D graphics in the browser." },
            { name: "TailwindCSS", description: "A utility-first CSS framework for rapid UI development." },
            { name: "MUI", description: "A popular React UI framework for building responsive designs." },
            { name: "Gsap", description: "A JavaScript animation library for high-performance animations." },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", description: "A runtime environment for building server-side applications with JavaScript." },
            { name: "MongoDB", description: "A NoSQL database for handling unstructured data." },
        ],
    },
    {
        title: "Design",
        skills: [
            { name: "Adobe Pro", description: "Professional tools for graphic design and video editing." },
            { name: "Figma", description: "A collaborative design tool for UI/UX prototyping." },
            { name: "Blender", description: "An open-source 3D creation suite for modeling and animation." },
            { name: "AE", description: "Adobe After Effects for motion graphics and visual effects." },
            { name: "AI", description: "Adobe Illustrator for vector graphics and illustrations." },
        ],
    },
    {
        title: "Other",
        skills: [
            { name: "C++", description:"A high-performance programming language." },
            { name: "GLSL", description:"A high-level, C-like programming language for graphics processing." },
            { name: "Python", description: "A versatile programming language for backend development and data analysis." },
            { name: "Model Optimization", description: "Techniques for optimizing machine learning models." },
            { name: "DQN", description: "Deep Q-Networks for reinforcement learning." },
            { name: "Computer Vision", description: "Techniques for enabling machines to interpret visual data." },
            { name: "NLP", description: "Natural Language Processing for text analysis and understanding." },
        ],
    },
];

export { skillSections, techDescriptions };