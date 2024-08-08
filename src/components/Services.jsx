import { motion } from "framer-motion";
function Services(){
    return(<>
        

      {/* THIS IS SECTION 1 */}

        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <motion.div 
      initial ={{x:-100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
      class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-indigo-800 md:text-left">MARKETING </p>
        <p class="text-center font-bold text-indigo-800 md:text-left">SEO</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">15 SEO Best Practices: Website Architecture</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a completely positive first page of search engine...</p>

        <p class="mb-6 text-zinc-800 sm:text-lg md:mb-8">November 21, 2019</p>
      </motion.div>


      <div>
        <motion.div
        initial ={{x:200, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
         class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <motion.img 
          whileHover={{scale:1.05}}
          src="imgs/img1.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </motion.div>
      </div>
     
    </div>
  </div>
</div>


{/* <h1>Section 2</h1>  */}



<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      
      <div>
        <motion.div 
        initial ={{x:-100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
        class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <motion.img 
          whileHover={{scale:1.05}}
          src="imgs/img2.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </motion.div>
      </div>

      <motion.div 
      initial ={{x:200, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
      class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-indigo-800 md:text-left">MARKETING</p>
        <p class="text-center font-bold text-indigo-800 md:text-left">SEO</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">SEO Best Practices: Mobile Friendliness</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a completely positive first page of search engine...</p>
        <p class="mb-6 text-zinc-800 sm:text-lg md:mb-8">November 21, 2019</p>
      </motion.div>
      
    </div>
  </div>
</div>

{/* <h1>Section 3</h1> */}



<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <motion.div 
      initial ={{x:-100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
      class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-indigo-800 md:text-left">MARKETING</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">A Guide to Google SEO Algorithm Updates</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a completely positive first page of search engine...</p>
        <p class="mb-6 text-zinc-800 sm:text-lg md:mb-8">September 24, 2019</p>
      </motion.div>


      <div>
        <motion.div
        initial ={{x:200, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
         class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <motion.img 
          whileHover={{scale:1.05}}
          src="imgs/img3.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </motion.div>
      </div>
      
    </div>
  </div>
</div>

{/* Section4 */}

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      
      <div>
        <motion.div 
        initial ={{x:-100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
        class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <motion.img 
          whileHover={{scale:1.05}}
          src="imgs/img4.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </motion.div>
      </div>

      <motion.div 
      initial ={{x:200, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
      class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-indigo-800 md:text-left">Business</p>
        {/* <p class="text-center font-bold text-indigo-800 md:text-left">SEO</p> */}

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Best Practices: SEO Syndicated Content</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a completely positive first page of search engine...</p>
        <p class="mb-6 text-zinc-800 sm:text-lg md:mb-8">August 28, 2019</p>
      </motion.div>
      
    </div>
  </div>
</div>

{/* section5 */}


<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <motion.div 
      initial ={{x:-100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
      class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-indigo-800 md:text-left">MARKETING</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">What To Look For In An SEO Consultant</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a completely positive first page of search engine...</p>
        <p class="mb-6 text-zinc-800 sm:text-lg md:mb-8">July 10, 2019</p>
      </motion.div>


      <div>
        <motion.div
        initial ={{x:200, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
         class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <motion.img 
          whileHover={{scale:1.05}}
          src="imgs/img5.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </motion.div>
      </div>
      
    </div>
  </div>
</div>

{/* section6 */}

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      
      <div>
        <motion.div 
        initial ={{x:-100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
        class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <motion.img 
          whileHover={{scale:1.05}}
          src="imgs/img4.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </motion.div>
      </div>

      <motion.div 
      initial ={{x:200, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
      class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-indigo-800 md:text-left">Business</p>
        {/* <p class="text-center font-bold text-indigo-800 md:text-left">SEO</p> */}

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">SEO Best Practice: 5 SEO Audit “Must Haves”</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a completely positive first page of search engine...</p>
        <p class="mb-6 text-zinc-800 sm:text-lg md:mb-8">June 20, 2019</p>
      </motion.div>
      
    </div>
  </div>
</div>

{/* section7 */}


<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <motion.div 
      initial ={{x:-100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
      class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-indigo-800 md:text-left">MARKETING</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">How To: Google My Business Optimization</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a completely positive first page of search engine...</p>
        <p class="mb-6 text-zinc-800 sm:text-lg md:mb-8">May 12, 2019</p>
      </motion.div>


      <div>
        <motion.div
        initial ={{x:200, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
         class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <motion.img 
          whileHover={{scale:1.05}}
          src="imgs/img5.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </motion.div>
      </div>
      
    </div>
  </div>
</div>

{/* section8 */}

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      
      <div>
        <motion.div 
        initial ={{x:-100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
        class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <motion.img 
          whileHover={{scale:1.05}}
          src="imgs/img4.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </motion.div>
      </div>

      <motion.div 
      initial ={{x:200, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
      class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-indigo-800 md:text-left">Business</p>
        {/* <p class="text-center font-bold text-indigo-800 md:text-left">SEO</p> */}

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">5 Best Free SEO Tools For Small Businesses</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a completely positive first page of search engine...</p>
        <p class="mb-6 text-zinc-800 sm:text-lg md:mb-8">June 20, 2019</p>
      </motion.div>
      
    </div>
  </div>
</div>

{/* secton9 */}

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <motion.div 
      initial ={{x:-100, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
      class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
        <p class="text-center font-bold text-indigo-800 md:text-left">MARKETING</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">How To: Google My Business Optimization</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating a completely positive first page of search engine...</p>
        <p class="mb-6 text-zinc-800 sm:text-lg md:mb-8">May 12, 2019</p>
      </motion.div>


      <div>
        <motion.div
        initial ={{x:200, opacity:0}}
            animate = {{x:0, opacity:1}}
            transition={{delay:0.2, duration:1}}
         class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <motion.img 
          whileHover={{scale:1.05}}
          src="imgs/img5.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-cover object-center" />
        </motion.div>
      </div>
      
    </div>
  </div>
</div>

    </>);
}

export default Services