import { ModeToggle } from "../mode-toggle";
import { NavbarConfig } from "../../config/navbar";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 px-4 md:px-8">
      <div className="flex items-center gap-2">
        {NavbarConfig.image && (
          <img src={NavbarConfig.image} alt="" className="w-12 h-12" />
        )}
        <h1 className="text-base md:text-2xl font-normal tracking-tight">
          {NavbarConfig.name}
        </h1>
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        {NavbarConfig.links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="group relative flex items-center gap-0.5 text-xs md:text-sm font-medium transition-colors hover:text-foreground/80 text-foreground"
          >
            <span>{link.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>
      {NavbarConfig.themeModeEnabled && <ModeToggle />}
    </div>
  );
};

export default Navbar;
