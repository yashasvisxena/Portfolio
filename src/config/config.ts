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
  description: "",
  role: "",
};

export const ContactConfig = {
  email: "yashasvisaxena.work@gmail.com",
  phone: "+91 8564085950",
  github: "https://github.com/yashasvisxena",
  linkedin: "https://www.linkedin.com/in/yashasvisxena/",
};
