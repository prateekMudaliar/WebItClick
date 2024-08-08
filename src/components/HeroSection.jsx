import { duration } from "@mui/material";
import { motion } from "framer-motion";
function HeroSection(props){
    return(<>

    {/* <h1>This is Hero Section</h1> */}
    <div class="relative mx-auto bg-white bg-opacity-20 bg-cover bg-center md:max-w-screen-lg">
      <motion.img
      initial={{opacity:0}}
      animate = {{opacity:1}}
      transition={{ delay:0.2, duration:1}}
       class="absolute h-full w-full object-cover" src="imgs/img6.jpg" />
  <div class="text-white lg:w-1/2 md:items-center">
    <div class="bg-indigo-800 bg-opacity-95 p-5 opacity-80 backdrop-blur-lg lg:p-12">
      <motion.p 
      initial={{x:-100, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{
          duration:'1',
          delay: '0.2'
        }}
       class="mb-4 font-serif font-light">{props.date}</motion.p 
      
      >
      <motion.h2 
        initial={{x:-100, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{
          duration:'1',
          delay: '0.2'
        }} 
      class="font-serif text-4xl font-bold">Leading the next generation of innovators</motion.h2>
      <motion.a 
      whileHover={{}}

      href="#" class="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white md:items-center"> Read Now </motion.a>
    </div>
  </div>
</div>

    </>);
}

export default HeroSection