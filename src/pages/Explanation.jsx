import elearning from "../images/elearning.webp";

const Explanation = () => {
  return (
    <div className="container mx-auto mt-16 text-center content-center lg:h-screen">
      <div className="flex flex-wrap flex-row justify-center items-center">
        <div className="flex flex-wrap flex-col ">
          <div className="p-3 m-4 w-96">
              <h1 className="font-Montserrat font-bold text-3xl text-sky-950 p-1 mb-8 sm:mb-7  md:mb-5">Expertos en diseño instruccional</h1>
              <p className="font-Montserrat font-bold text-lg text-sky-950 text-justify p-1 mb-8 sm:mb-7  md:mb-5">De la mano de expertos en educación te enseñamos a crear experiencias que se adapten a la necesidades de tus alumnos, adoptando las funcionalidades web con la intención ofrezcas un aprendizaje signifcativo  </p>
          </div>
        </div>
        <div className="p-4">
              <img className="rounded-3xl md:h-auto" src={elearning} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Explanation;
