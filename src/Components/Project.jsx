import Cards from "./Cards";
import spotify from "./images/spotify.png";
import blipkart from "./images/blipkart.png";
import github from "./images/github.png";
import yaar from "./images/Logo.png";
import spotify1 from "./images/spotify1.png";
import terrarecon from "./images/terrarecon.png";
import MusicPlayer from "./images/MusicPlayer.png";
function Project() {
  return (
    <div className="flex-col h-full w-full rounded-xl" id="projects">
      <h1 className="m-3 text-3xl font-bold">Projects</h1>
      <div className="flex flex-wrap w-full h-full justify-center">
        <Cards
          img={blipkart}
          link={"https://blipkart.netlify.app/"}
          title={"BlipKart | Manga , comics"}
          tech={"HTML | CSS "}
        />
        <Cards
          img={spotify}
          link={"https://github.com/yashasvisxena/spotifyCloneSimple"}
          title={"Spotify Clone (Simple)"}
          tech={"HTML | CSS | JavaScript "}
        />
        <Cards
          img={github}
          link={"https://github.com/yashasvisxena/GithubProfileFinder"}
          title={"Github Profile Finder"}
          tech={"HTML | CSS | JavaScript "}
        />
        <Cards
          img={yaar}
          link={"https://github.com/yashasvisxena/Yaar"}
          title={"Money Minded"}
          tech={"MERN | TailWind CSS"}
        />
        <Cards
          img={spotify1}
          link={"https://github.com/yashasvisxena/GithubProfileFinder"}
          title={"Spotify (Ongoing)"}
          tech={"React | FireBase | TailWind CSS"}
        />
        <Cards
          img={terrarecon}
          link={"https://github.com/yashasvisxena/TerraRecon"}
          title={"TerraRecon (SIH)"}
          tech={"React | Framer Motion | TailWind CSS"}
        />
        <Cards
          img={MusicPlayer}
          link={"https://github.com/yashasvisxena/Music-Playlist-Player"}
          title={"Music Playlist Player using Doubly Linked List"}
          tech={"React | ShadCN/Ui | TailWind CSS"}
        />
      </div>
    </div>
  );
}

export default Project;
