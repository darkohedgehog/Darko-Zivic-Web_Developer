import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {TbMessageChatbot} from "react-icons/tb";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/")
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav("#header")} className={activeNav === "/" ? "active" : ""}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav("experience")} className={activeNav === "experience" ? "active" : ""}
      ><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><TbMessageChatbot /></a>
    </nav>
  )
}

export default Nav;