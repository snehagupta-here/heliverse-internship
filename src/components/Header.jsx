import React from 'react'
import logo1 from "../images/logo1.png"
import "../css/style.css";
function Header() {
  return (
    <div>
       <header>
        <div className="header flex justify-between mt-[54px] py-[20px]">
            <a href="https://qodematrix.com/motion-art-for-elementor/">
                <img className="web-logo p-[10px] w-auto ml-[5px] mt-[2px] max-h-[72px]" src={logo1} alt="MotionArt Effect logo" />
            </a>
            <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
                <button className="purchase-button text-[1.125rem] font-[25rem] bg-white mr-[7px] mt-[11px] h-[3.37rem] w-[11.72rem] rounded-[5px] cursor-pointer border-2 border-solid border-white duration-[0.3s] ease-linear hover:text-white hover:bg-black"  >Purchase Now</button>
            </a>     
            </div>
      </header>
    </div>
  )
}

export default Header
