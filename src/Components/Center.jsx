import Contact from "./Contact"
import Cover from "./Cover"
import Project from "./Project"
import Skills from "./Skills"


function Center() {
  return (
    <div className="flex flex-col w-screen h-full xl:w-[80vw] xl:ml-[20vw] xl:m-5">
      <Cover/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Center