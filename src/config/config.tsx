import { File, Github, Linkedin, Mail, Phone } from "lucide-react";

export const NavbarConfig = {
  image: null,
  name: "yashasvisxena",
  links: [
    { label: "About", href: "/" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  themeModeEnabled: import.meta.env.VITE_ThemeModeEnabled === "true",
  defaultTheme: import.meta.env.VITE_DefaultTheme || "dark",
};

export const HomeConfig = {
  description: (
    <div className="max-w-3xl leading-relaxed tracking-tight">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
        I'm <span className="font-normal">Yashasvi Saxena</span>,
      </h2>

      <p className="text-lg sm:text-xl md:text-2xl font-light">
        A <span className="font-semibold">full stack developer</span>, formerly
        SDE Intern at{" "}
        <a
          target="_blank"
          href="https://datachecks.io/"
          className="relative z-10 font-medium no-underline transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
        >
          Datachecks
        </a>{" "}
        &{" "}
        <a
          target="_blank"
          href="https://swyftin.com/"
          className="relative z-10 font-medium no-underline transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
        >
          Swyftin
        </a>
        .
      </p>

      <p className="mt-8 text-base sm:text-lg max-w-2xl border-l-2 border-primary/30 pl-4 italic">
        I focus on building scalable systems using sound system design
        principles, high performance, and clean architecture within the{" "}
        <span className="font-medium">MERN stack</span>.
      </p>
    </div>
  ),
  role: `Full-Stack \nDeveloper`,
  image: "/image.png",
  cardBgChange: true,
};

export const ContactConfig = {
  resume: {
    icon: <File size={16} />,
    link: "https://drive.google.com/file/d/11v4KoTRlHwvYYF7eQEDYT7yRlDy4rTwJ/view",
    type: "open",
  },
  email: {
    icon: <Mail size={16} />,
    link: "yashasvisaxena.work@gmail.com",
    type: "copy",
  },
  phone: {
    icon: <Phone size={16} />,
    link: "+918564085950",
    type: "copy",
  },
  github: {
    icon: <Github size={16} />,
    link: "https://github.com/yashasvisxena",
    type: "open",
  },
  linkedin: {
    icon: <Linkedin size={16} />,
    link: "https://www.linkedin.com/in/yashasvisxena/",
    type: "open",
  },
};

export const ExperienceConfig = [
  {
    title: "SDE Intern",
    company: "Datachecks",
    duration: "June 2025 - November 2025",
    location: "Remote",
    description: [
      "",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Swyftin",
    duration: "November 2024 - May 2025",
    location: "Hybrid - Preet Vihar, Delhi",
    description: [""],
  },
];
