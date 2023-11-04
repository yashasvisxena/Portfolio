
import profile from "./images/profile.jpg";
import background from "./images/back.png";

function Cover() {
  const coverStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover', // Set the background size
    backdropFilter: 'blur(5px)', // Use backdropFilter for blur effect
  };

  return (
    <div style={coverStyle} className="cover flex-col h-full w-full rounded-xl mb-5" id="about">
      <div className="backdrop-blur-md flex h-full w-full p-2 xl:p-6 rounded-xl items-center justify-around">
        <div className="flex h-full w-4/6 items-center">
          <img
            className="xl:h-28 xl:w-28 h-16 w-16 border-4 rounded-full m-2"
            src={profile}
            alt="profile"
          />

          <div className="flex h-full flex-col m-2 text-xs">
            <h1 className="xl:text-2xl font-bold">Yashasvi Saxena</h1>
            <h1 className="xl:text-lg">@yashasvisxena</h1>
          </div>
        </div>

        <h1 className="h-full flex w-2/6 text-justify font-semibold text-[0.6rem] xl:text-lg">
          FrontEnd Web Developer | Learning BackEnd Development | MERN Stack | 5-star rating in Java on HackerRank | C .
        </h1>
      </div>
    </div>
  );
}

export default Cover;
