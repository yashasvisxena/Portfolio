function Skills() {
  return (
    <div className="flex-col h-full w-full rounded-xl" id="skills">
      <h1 className="m-3 text-3xl font-bold">Skills</h1>
      <div className="flex flex-wrap w-full h-full justify-center">
        <div className="flex flex-col bg-[#1c1b23] rounded-xl p-2 justify-center items-center m-2 ">
          <h1 className="font-semibold text-left text-lg m-2 h-2/6 self-start">Languages</h1>
          <div className="flex flex-wrap w-full h-full">
            <h1 className="bg-[#14131a] m-2 border-[1px] border-red-500 rounded-lg text-base p-2 text-center">
              Java
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-green-500 rounded-lg text-base p-2 text-center">
              CSS
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-blue-500 rounded-lg text-base p-2 text-center">
              JavaScript
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-yellow-500 rounded-lg text-base p-2 text-center">
              HTML
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-white rounded-lg text-base p-2 text-center">
              C
            </h1>
          </div>
        </div>
        <div className="flex flex-col bg-[#1c1b23] rounded-xl p-2 justify-center items-center m-2 ">
          <h1 className="font-semibold text-left h-2/6 text-lg m-2 self-start">Frontend Libraries and Framework</h1>
          <div className="flex flex-wrap w-full h-full">
            <h1 className="bg-[#14131a] m-2 border-[1px] border-red-500 rounded-lg text-base p-2 text-center">
              ReactJs
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-green-500 rounded-lg text-base p-2 text-center">
              Tailwind CSS
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-blue-500 rounded-lg text-base p-2 text-center">
              MUI
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-yellow-500 rounded-lg text-base p-2 text-center">
              Framer Motion
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-white rounded-lg text-base p-2 text-center">
              Bootstrap
            </h1>
          </div>
        </div>
        <div className="flex flex-col bg-[#1c1b23] rounded-xl p-2 justify-center items-center m-2 ">
          <h1 className="font-semibold text-left h-2/6 text-lg m-2 self-start">Backend Technologies</h1>
          <div className="flex flex-wrap w-full h-full">
            <h1 className="bg-[#14131a] m-2 border-[1px] border-red-500 rounded-lg text-base p-2 text-center">
              Google OAuth 2.0
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-green-500 rounded-lg text-base p-2 text-center">
              FireBase
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-blue-500 rounded-lg text-base p-2 text-center">
              NodeJS
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-yellow-500 rounded-lg text-base p-2 text-center">
              ExpressJS
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-white rounded-lg text-base p-2 text-center">
              MongoDB
            </h1>
          </div>
        </div>
        <div className="flex flex-col bg-[#1c1b23] rounded-xl p-2 justify-center items-center m-2 ">
          <h1 className="font-semibold text-left h-2/6 text-lg m-2 self-start">Tools</h1>
          <div className="flex flex-wrap w-full h-full">
            
            <h1 className="bg-[#14131a] m-2 border-[1px] border-yellow-500 rounded-lg text-base p-2 text-center">
              Git
            </h1>
            <h1 className="bg-[#14131a] m-2 border-[1px] border-green-500 rounded-lg text-base p-2 text-center">
              GitHub
            </h1>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Skills;
