import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import { motion } from 'framer-motion';
import Icons from './components/Icons';
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";




function App() {

  const date = new Date();
  let say = date.getMonth();

  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Happy Hacking</h1>
      <h1 className='text-3xl font-bold underline'>Happy Hacking</h1> */}
      <NavBar/>
      <HeroSection date = "7-August-2024" />
      <Services/>
      
      <Footer/>
      <div className='flex justify-center items-center bg-gradient-to-r from-indigo-800 from-80%  to-indigo-400 pb-10'>
        <div className='fl'></div>
        <Icons  className="px-5 text-white">
        <CiMail size={35}/>
        
      </Icons>
      <Icons  className="px-5 text-white ">
        <BsTelephone size={30}/>
        
      </Icons>
     
      
      <Icons  className="px-5 text-white">
        <FaGithub size={30}/>
        
      </Icons>
      
      
      <Icons  className="px-5 text-white">
        <FaLinkedin size={30}/>
        
      </Icons>
      </div>
      <div className='flex justify-center items-center bg-gradient-to-r from-indigo-800 from-80%  to-indigo-400 pb-10'>
        <div className='fl'></div>
        
      <Icons  className="px-5 text-white">
        <FaXTwitter size={30}/>
        
      </Icons>
      <Icons  className="px-5 text-white">
        <FiFacebook size={30}/>
        
      </Icons>
      
      <Icons  className="px-5 text-white">
        <FaInstagram size={30}/>
        
      </Icons>
      <Icons  className="px-5 text-white">
        <FaDiscord size={30}/>
        
      </Icons>
      
      </div>
      
    </>
    
  );
}

export default App;
