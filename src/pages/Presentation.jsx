import elearning from "../images/study-2-1024x801.webp";

const Presentation = () => {
  return (
    <div className="content-center lg:h-screen mt-16">
      <div className="md:grid lg:grid md:grid-cols-1 md:items-center lg:grid-cols-10 gap-0 ">
        <div className="col-span-4 md:grid-cols-1 lg:col-span-6">
          <img className="" src={elearning} alt="" />
        </div>
        <div className="md:grid-cols-1 lg:col-span-4 content-center">
          <div className="font-Montserrat font-bold text-5xl text-sky-950 justify-center text-center p-10"> 
            <h1>Te ayudamos a crear </h1>
            <h1>experiencias de aprendizaje</h1>
            <h1 className="mt-5 mb-5 drop-shadow-lg">EFECTIVAS</h1> 
          </div>
          <div className="font-Montserrat text-3xl text-sky-800 text-center">
            <h1>Adopta - Adapta - Comparte </h1>
          </div>
          <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            <button className="text-centermt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 w-32 border border-blue-500 hover:border-transparent rounded">
              Try
            </button>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Presentation;
