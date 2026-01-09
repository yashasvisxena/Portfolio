import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Toaster } from "sonner";

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen min-w-screen">
        <Navbar />
        <Outlet />
        <Toaster richColors />
      </div>
    </ThemeProvider>
  );
}

export default App;
