const projectData = [
  {
    id: 1,
    category: "Full Stack",
    title: "Youtube Clone",
    tagline: "A full-stack video streaming platform with authentication, uploads, reactions, and subscriptions — built from scratch.",
    overview: `This YouTube Clone is a fully functional full-stack video-sharing platform built from the ground up. Users can register, upload and watch videos, comment, like/dislike, subscribe to channels, and more. The frontend is built using React and TailwindCSS, while the backend is powered by Node.js, Express, and MongoDB. JWT is used for secure authentication and Multer for handling file uploads. It’s designed to mimic core YouTube features with clean UI and scalable architecture.`,
    features: [
      "JWT-based user authentication (register, login, protected routes)",
      "Upload videos with title, description, and thumbnails",
      "Edit/delete your own videos and comments",
      "Like and dislike videos with reaction toggle",
      "Comment system with real-time updates",
      "Channel subscription with subscriber count tracking",
      "Search videos by title and filter by channel",
      "Responsive UI using TailwindCSS and Headless UI",
      "Toast notifications and clear error handling"
    ],
    thumbnailImg: "/frameProjectDetails.png",
    techStack: {
      frontend: [
        "React.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Router",
        "Heroicons",
        "Headless UI"
      ],
      backend: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT (JSON Web Token)",
        "Multer",
        "Bcrypt",
        "Dotenv"
      ],
      apis: [],
      deployment: ["Vercel (frontend)", "Render (backend)"]
    },
    challengesAndLearnings: [
      "Implemented secure JWT authentication and role-based route protection.",
      "Handled video uploads and storage with Multer and Express.",
      "Built a like/dislike toggle system and managed state with Redux.",
      "Created an intuitive and responsive UI using Headless UI and Tailwind.",
      "Handled relationships in MongoDB like users, videos, comments, and subscriptions."
    ],
    screenshots: [
      "/s1.png",
      "/s2.png",
      "/s3.png",
    ],
    links: {
      liveDemo: "https://youtube-clone-udit.vercel.app",
      github: "https://github.com/UditMathurWEBD/Youtube-Clone",
      figma: "https://www.figma.com/file/yourfigmalink"
    }
  },
  {
    id: 2,
    category: "Frontend",
    title: "Shoppy Globe",
    tagline: "A modern e-commerce application with real-time filtering, cart management, and protected checkout built using React and Redux.",
    overview: `ShoppyGlobe is a modern and responsive e-commerce application built with React, Redux Toolkit, and Tailwind CSS. It allows users to browse products, search and filter them, add items to the cart, and place orders through a clean and intuitive UI. Product data is sourced from DummyJSON API. The application is responsive, fast, and user-friendly, with dynamic routing and lazy loading to enhance performance.`,
    features: [
      "Browse 100+ products using DummyJSON API",
      "Real-time search and filter functionality",
      "Add to Cart with quantity control (+ / -)",
      "Product Detail Page with multiple image support",
      "Dynamic Cart with total price calculation",
      "Protected Checkout page (redirects if cart is empty)",
      "Checkout form with basic validation and success message",
      "Responsive design with Tailwind CSS",
      "Lazy loading for product images",
      "Routing using React Router",
      "Global state management using Redux Toolkit"
    ],
    thumbnailImg: "/frameProjectDetails.png",
    techStack: {
      frontend: [
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "React Router",
        "Vite"
      ],
      backend: [],
      apis: ["DummyJSON API"],
      deployment: ["Vercel"]
    },
    challengesAndLearnings: [
      "Integrated external APIs and structured product data flow efficiently.",
      "Managed state transitions and cart logic using Redux Toolkit.",
      "Ensured mobile-first responsive design with Tailwind CSS.",
      "Used lazy loading to improve performance and user experience.",
      "Implemented protected routing logic using React Router."
    ],
    screenshots: [
      "/s1.png",
      "/s2.png",
      "/s3.png"
    ],
    links: {
      liveDemo: "https://shoppy-globe-a1kx.vercel.app",
      github: "https://github.com/UditMathurWEBD/ShoppyGlobe",
      figma: "https://www.figma.com/file/yourfigmalink"
    }
  }
];

export default projectData;
