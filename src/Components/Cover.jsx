
import profile from "./images/profile.jpg";
import background from "./images/back.png";

function Cover() {
  const coverStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover', // Set the background size
    backdropFilter: 'blur(5px)', // Use backdropFilter for blur effect
  };

  return (
    <div style={coverStyle} className="cover flex-col h-full w-full rounded-xl bg-cover mb-5" id="about">
      <div className="backdrop-blur-md flex h-full w-full p-6 rounded-xl items-center justify-around">
        <div className="flex h-full w-4/6 items-center">
          <img
            className="h-28 w-28 border-4 rounded-full m-2"
            src={profile}
            alt="profile"
          />

          <div className="flex h-full flex-col m-2">
            <h1 className="text-2xl font-bold">Yashasvi Saxena</h1>
            <h1 className="text-lg">@yashasvisxena</h1>
          </div>
        </div>

        <h1 className="h-full flex w-2/6 text-justify font-semibold text-lg">
          FrontEnd Web Developer | Learning BackEnd Development | MERN Stack | 5-star rating in Java on HackerRank | C .
        </h1>
      </div>
    </div>
  );
}

export default Cover;
