const Featured = () => {
  return (
    <div className="container mx-auto text-center lg:h-screen">
      <div className="flex flex-wrap flex-row justify-center items-center">
        <div className="m-12 lg:mb-2 sm:mt-10">
          <h1 className="font-Montserrat font-bold text-5xl text-slate-50 p-1 sm:mb-7 md:mb-2 lg:m-1">
          Ve las soluciones que tenemos para ti
          </h1>
        </div>
        <div className="p-8 grid gap-10 grid-cols-1  md:grid-cols-3 md:gap-2">
          {/* <a
            class="mb-10 sm:m-2 md:mt-2 lg:mx-8 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            href=""
          > */}
          <div className='sm:m-2 md:mt-2 lg:mx-8 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70'>
            <div className="relative rounded-t-xl overflow-hidden">
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=UZk1MKenb28' /> */}
                <div className="bg-red-800 h-60">
                  <iframe
                    className="h-60 w-full"
                    src="https://www.youtube.com/embed/UZk1MKenb28?si=E-t9PFpDD9kCjk_y"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            <div className="p-4 md:p-5">
              <h3 className="font-Montserrat font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p className="mt-1 font-Montserrat text-gray-500 dark:text-slate-50">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>  
          </div>
          <div className='sm:m-2 md:mt-2 lg:mx-8 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70'>
            <div className="relative rounded-t-xl overflow-hidden">
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=UZk1MKenb28' /> */}
                <div className="bg-red-800 h-60">
                  <iframe
                    className="h-60 w-full"
                    src="https://www.youtube.com/embed/UZk1MKenb28?si=E-t9PFpDD9kCjk_y"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            <div className="p-4 md:p-5">
              <h3 className="font-Montserrat font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p className="mt-1 font-Montserrat text-gray-500 dark:text-slate-50">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>  
          </div>
          <div className='sm:m-2 md:mt-2 lg:mx-8 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70'>
            <div className="relative rounded-t-xl overflow-hidden">
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=UZk1MKenb28' /> */}
                <div className="bg-red-800 h-60">
                  <iframe
                    className="h-60 w-full"
                    src="https://www.youtube.com/embed/UZk1MKenb28?si=E-t9PFpDD9kCjk_y"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            <div className="p-4 md:p-5">
              <h3 className="font-Montserrat font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p className="mt-1 font-Montserrat text-gray-500 dark:text-slate-50">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
