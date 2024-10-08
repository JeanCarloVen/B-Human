import elearning from "../images/study-2-1024x801.webp";

const Presentation = () => {
  return (
    <div className="container lg:h-screen p-10 content-center">
      <div className="grid grid-cols-10 gap-0 ">
        <div className="col-span-6">
          <img className="rounded-3xl" src={elearning} alt="" />
        </div>
        <div className="col-span-4 content-center">
          <div className="font-Montserrat font-bold text-5xl text-sky-950 justify-center"> 
            <h1>Te ayudamos a crear </h1>
            <h1>experiencias de aprendizaje</h1>
            <h1 className="mt-5 mb-5 drop-shadow-lg">EFECTIVAS</h1> 
          </div>
          <div className="font-Montserrat text-3xl text-sky-800">
            <h1>Adopta - Adapta - Comparte </h1>
          </div>
          <button class="mt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  py-2 px-4 w-32 border border-blue-500 hover:border-transparent rounded">
            Try
          </button>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Presentation;
