/* eslint-disable react/prop-types */


function Cards(props) {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden rounded-xl w-64 h-1/4 m-3 hover:scale-95">
      <a className="w-full h-full" href={props.link} target="_blank" rel="noreferrer">
        <img className="w-full h-36 bg-black" src={props.img} alt="" />
        <h1 className="p-2 bg-slate-100 text-center text-black text-lg font-semibold w-full h-1/4">{props.title}</h1>
        <h1 className="p-2 bg-slate-100 text-center text-black text-sm font-medium w-full h-1/4">{props.tech}</h1>
      </a>
    </div>
  );
}

export default Cards;
