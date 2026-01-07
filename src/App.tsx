import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen min-w-screen">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
