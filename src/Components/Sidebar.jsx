import { HashLink as Link } from "react-router-hash-link";
import {
  FolderGit,
  GithubIcon,
  Hammer,
  Home,
  Instagram,
  LinkedinIcon,
  Phone,
  TwitterIcon,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="flex-col hidden bg-[#1c1b23] md:flex xl:h-fit xl:w-[18vw] xl:mb-2 xl:p-8 xl:pt-2 xl:m-5 rounded-xl xl:fixed xl:left-0 xl:z-[1]">
      <div className="flex gap-3 m-2 p-1 pt-1">
        <div className="h-4 w-4 bg-red-600 rounded-full"></div>
        <div className="h-4 w-4 bg-green-600 rounded-full"></div>
        <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
      </div>
      <div className="flex flex-col gap-y-8 m-4 text-center justify-center ">
        <Link
          to="/#about"
          smooth="true"
          className="text-white text-xl font-medium"
        >
          <div className="flex gap-4  hover:-translate-y-1 ease-in">
            <Home />
            <h1>About</h1>
          </div>
        </Link>
        <Link
          to="/#projects"
          smooth="true"
          className="text-white text-xl font-medium"
        >
          <div className="flex gap-4 hover:-translate-y-1 ease-in">
            <FolderGit />
            <h1>Projects</h1>
          </div>
        </Link>
        <Link
          to="/#skills"
          smooth="true"
          className="text-white text-xl font-medium"
        >
          <div className="flex gap-4 hover:-translate-y-1 ease-in">
            <Hammer />
            <h1>Skill</h1>
          </div>
        </Link>
        <Link
          to="/#contact"
          smooth="true"
          className="text-white text-xl font-medium"
        >
          <div className="flex gap-4 hover:-translate-y-1 ease-in">
            <Phone />
            <h1>Contact</h1>
          </div>
        </Link>
        <hr className="mt-3 mb-3 w-full" />
        <Link
          to="https://www.linkedin.com/in/yashasvisxena/"
          target="_blank"
          className="text-white text-xl font-medium"
        >
          <div className="flex gap-4 hover:-translate-y-1 ease-in">
            <LinkedinIcon />
            <h1>LinkedIn</h1>
          </div>
        </Link>
        <Link
          to="https://www.github.com/yashasvisxena"
          target="_blank"
          className="text-white text-xl font-medium"
        >
          <div className="flex gap-4 hover:-translate-y-1 ease-in">
            <GithubIcon />
            <h1>Github</h1>
          </div>
        </Link>
        <Link
          to="https://www.instagram.com/yashasvi.sxena/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
          target="_blank"
          className="text-white text-xl font-medium"
        >
          <div className="flex gap-4 hover:-translate-y-1 ease-in">
            <Instagram />
            <h1>Instagram</h1>
          </div>
        </Link>
        <Link
          to="https://twitter.com/YashasviSaxena8"
          target="_blank"
          className="text-white text-xl font-medium"
        >
          <div className="flex gap-4 hover:-translate-y-1 ease-in">
            <TwitterIcon />
            <h1>Twitter | X</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
