export const NavbarConfig = {
  image: null,
  name: "yashasvisxena",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  themeModeEnabled: import.meta.env.VITE_ThemeModeEnabled === "true",
  defaultTheme: import.meta.env.VITE_DefaultTheme,
};
