import { CVData } from "./types";

export const cvData: CVData = {
  personalInfo: {
    name: "John Doe",
    title: "Full Stack Developer",
    contact: {
      email: "john.doe@example.com",
      phone: "+1 234 567 890",
      location: "New York, USA",
    },
  },
  sections: [
    {
      title: "Professional Experience",
      items: [
        {
          name: "Senior Developer",
          subtitle: "Tech Corp Inc.",
          duration: "2020 - Present",
          content: [
            "Led development of multiple full-stack applications",
            "Managed a team of 5 developers",
            "Implemented CI/CD pipelines and testing strategies",
          ],
        },
        {
          name: "Software Developer",
          subtitle: "Digital Solutions Ltd.",
          duration: "2018 - 2020",
          content: [
            "Developed responsive web applications using React",
            "Collaborated with UX designers to implement new features",
            "Reduced loading times by 40% through optimization",
          ],
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          name: "Master of Computer Science",
          subtitle: "Tech University",
          duration: "2023 - Present",
          content: [
            "Focus on Machine Learning and AI",
            "Research in Natural Language Processing",
            "Advanced Algorithm Design",
            "Distributed Systems",
          ],
        },
        {
          name: "Bachelor of Computer Science",
          subtitle: "State University",
          duration: "2015 - 2019",
          content: ["Graduated with Honors"],
        },
      ],
    },
    {
      title: "Notable Projects",
      items: [
        {
          name: "AI Chat Bot",
          content: [
            "Developed a conversational AI using transformer architecture",
            "Implemented custom training pipeline",
          ],
        },
        {
          name: "E-commerce Platform",
          content: [
            "Built a scalable e-commerce solution using microservices",
            "Integrated payment processing and inventory management",
          ],
        },
        {
          name: "Research Project",
          subtitle: "In Progress",
          content: [
            "Investigating novel approaches to natural language understanding",
            "Collaborated with a team of 3 researchers",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML/CSS"],
    },
    {
      name: "Frameworks",
      skills: [
        "React",
        "Node.js",
        "Express",
        "Next.js",
        "Django",
        "TensorFlow",
      ],
    },
    {
      name: "Tools",
      skills: ["Git", "Docker", "AWS", "Linux", "MongoDB", "PostgreSQL"],
    },
  ],
};
