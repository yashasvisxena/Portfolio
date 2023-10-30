import Contact from "./Contact"
import Cover from "./Cover"
import Project from "./Project"
import Skills from "./Skills"


function Center() {
  return (
    <div className="flex flex-col h-full w-[80vw] ml-[20vw] mb-2 m-5 ">
      <Cover/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Center