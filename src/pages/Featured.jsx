const Featured = () => {
  return (
    <div className="container mx-auto text-center lg:h-screen">
      <div className="flex flex-wrap flex-row justify-center items-center">
        <div className="m-12 lg:mb-2 sm:mt-10">
          <h1 className="font-Montserrat font-bold text-5xl text-slate-50 p-1 sm:mb-7 md:mb-2 lg:m-1">
          Ve las soluciones que tenemos para ti
          </h1>
        </div>
        <div className="p-5 mb-20 grid-cols-1 sm:grid md:grid-cols-3">
          <a
            class="mb-10 sm:m-2 md:mt-2 lg:mx-8 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            href=""
          >
            <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                alt="Card Image"
              />
            </div>
            <div class="p-4 md:p-5">
              <h3 class="font-Montserrat font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p class="mt-1 font-Montserrat text-gray-500 dark:text-slate-50">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
          <a
            class="mb-10 sm:m-2 md:mt-2 lg:mx-8 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            href="#"
          >
            <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                alt="Card Image"
              />
            </div>
            <div class="p-4 md:p-5">
              <h3 class="font-Montserrat font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p class="mt-1 font-Montserrat text-gray-500 dark:text-slate-50">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
          <a
            class="mb-10 sm:m-2 md:mt-2 lg:mx-8 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            href="#"
          >
            <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <img
                class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                alt="Card Image"
              />
            </div>
            <div class="p-4 md:p-5">
              <h3 class="font-Montserrat font-bold text-gray-800 dark:text-white">
                Card title
              </h3>
              <p class="mt-1 font-Montserrat text-gray-500 dark:text-slate-50">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
