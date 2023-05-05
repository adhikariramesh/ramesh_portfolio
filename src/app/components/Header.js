'use-client';
import Nav from "./Nav";
import { inter, lora, sourceCodePro400, sourceCodePro700 } from "../styles/fonts";
import {AiOutlineMail,AiOutlineWhatsApp,AiOutlineMenu} from "react-icons/ai";
import {IoIosCall} from "react-icons/io";

const Header = () => {
 
  return (
    <header className={lora.className}>
      <div className="headers">
     <div className="topSection">
        <p><IoIosCall/>+9779865295585</p>
        <p><AiOutlineMail/>2021rameshprasad@gmail.com</p>
        <p><AiOutlineWhatsApp/>+9779808463282</p>
     </div>
     <div className="bottomSection">
     <Nav/>
     </div>
     </div>
    </header >
  )
}

export default Header
