import tiktok from "../images/tiktokimage.jpg"

const QuickTiktok = () => {
  return (
    <div className="container mt-16 mx-auto text-center content-center lg:h-screen">
    <div className="flex flex-wrap flex-row justify-center">
      <div className="p-4 h-lvh">
        <img className="rounded-xl h-4/5" src={tiktok} alt="" />
      </div>
      <div className="flex flex-wrap flex-col justify-center sm:mb-0 md:mb-5 lg:mb-20">
        <div className="font-Montserrat text-2xl text-sky-500 p-2 ml-10 m-5">
          <h1>Adopta - Adapta - Comparte </h1>
        </div>
        <button class="self-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  py-2 px-4 w-32 border border-blue-500 hover:border-transparent rounded">
            Try
          </button>
          
      </div>
    </div>
  </div>
  )
}

export default QuickTiktok