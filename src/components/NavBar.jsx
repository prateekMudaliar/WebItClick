import { motion } from "framer-motion";


function NavBar(){
    return(
        <>
            {/* <h1>This is NavBar</h1> */} 
            
            <header className="shadow mb-2 flex  relative">
            <div className=" max-w-screen-lg mx-auto py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between relative">
            
            <a className="">
                    <span className="text-2xl flex items-center font-black hover:text-indigo-800 px-10 hover:scale-105 transition ease-in-out cursor-pointer">webItClick</span>
                </a>
                <input className="peer hidden" type="checkbox" id="navbar-open"></input>
                <label className="cursor-pointer absolute right-0 mt-2 text-xl sm:hidden" for="navbar-open"><svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg></label>
                <nav className="peer-checked:block hidden sm:block mt-4 sm:mt-0">
                
                    <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8 items-center ">
                    <li className="text-black hover: text-indigo-800 cursor-pointer">Home</li>
                    <li className="hover: text-indigo-800 cursor-pointer">About</li>
                    <li className="hover: text-indigo-800 cursor-pointer">Services</li>
                    <li className="hover: text-indigo-800 cursor-pointer">Portfolio </li>
                    <li className="hover: text-indigo-800 cursor-pointer">Blog </li>
                    <li className="border-2 rounded-xl px-6 py-2 border-indigo-800 text-indigo-800 hover:bg-indigo-800 hover:text-white cursor-pointer ">Login</li>
                    {/* <details class="group transition-all duration-150 h-10 open:h-28 overflow-hidden w-56">
        <summary class="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-white hover:text-indigo-800">
          

          <span class="ml-1 text-sm font-medium text-black hover: text-indigo-800 cursor-pointer"> Teams </span>

          <span class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </span>
        </summary>

        <nav class="mt-1.5 ml-8 flex flex-col transition-all duration-500">
          <a href="#" class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>

            <span class="ml-1 text-sm font-medium text-indigo-800"> Not Found </span>
          </a>

          
        </nav>
      </details> */}
                    
                    <div class="relative w-full max-w-sm">
        <input type="text" placeholder="Search..." class="w-full py-2 pl-4 pr-20 text-gray-700 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
        <button class="absolute top-0 right-0 px-4 py-2 text-white bg-indigo-800 rounded-full hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Search</button>
    </div>

                    </ul>

                    
                </nav>

                
            </div>

            
                
            </header>

        </>
    );
}

export default NavBar