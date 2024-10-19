import ReactPlayer from 'react-player'

import elearning from "../images/elearning.webp";


//https://www.youtube.com/watch?v=7GtkKqxux-w

const Explanation = () => {
  return (
    <div className="container mx-auto mt-16 text-center content-center lg:h-screen">
      <div className="flex flex-wrap flex-row justify-center items-center">
        <div className="flex flex-wrap flex-col ">
          <div className="p-3 m-4 w-96">
              <h1 className="font-Montserrat font-bold text-4xl text-sky-950 p-1 mb-8 sm:mb-7  md:mb-5">Expertos en diseño instruccional</h1>
              <p className="font-Montserrat font-bold text-2xl text-sky-950 text-justify p-1 mb-8 sm:mb-7  md:mb-5">De la mano de expertos en educación, te enseñaremos a crear experiencias que se adapten a la necesidades de tus alumnos.</p>
          </div>
        </div>
        <div className="p-4">
              {/* <img className="rounded-3xl md:h-auto" src={elearning} alt="" /> */}
              {/* <ReactPlayer url='https://www.youtube.com/watch?v=7GtkKqxux-w' /> */}
          </div>
          <div className="">
          <iframe
            width="560" height="315"
            className="rounded-lg"
            src="https://www.youtube.com/embed/7GtkKqxux-w?si=QByfLj082r89KWzp"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
