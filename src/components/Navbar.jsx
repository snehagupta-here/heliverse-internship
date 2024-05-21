import React from 'react'
import logo from "../images/logo.png";
import "../css/style.css";
function Navbar() {
  return (
 <>
    <nav>
            <div className="nav-Bar bg-[#262626] w-[100vw] h-[54px] flex justify-between items-center overflow-x-hidden fixed z-100">
                <a  className="navlogo1 w-[9.5rem] h-[1.125rem] ml-[1.26rem]" href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891?_gl=1*6gj116*_ga*MTI3OTUzNzg0OC4xNzE1OTU0ODA1*_ga_ZKBVC1X78F*MTcxNjAwNzMyMS4zLjEuMTcxNjAwNzM2MC4wLjAuMA..&_ga=2.215317271.1418544643.1715954805-1279537848.1715954805">
                    <img  className="navlogo1a w-[100%] h-[100%]" src={logo} alt="Envato market logo" />
                </a>
                <a href="https://codecanyon.net/checkout/from_item/48826891?license=regular&support=bundle_6month&_gl=1*w1l068*_ga*MTI3OTUzNzg0OC4xNzE1OTU0ODA1*_ga_ZKBVC1X78F*MTcxNjAwNzMyMS4zLjEuMTcxNjAwNzM2MC4wLjAuMA..&_ga=2.7753010.1418544643.1715954805-1279537848.1715954805">
                    <button className="buy-button text-[0.831rem] font-[340] w-[5.875rem] h-[1.93rem] mr-[1.25rem] rounded-[4px] bg-[#82B440] text-white no-underline cursor-pointer text-center tracking-[0.7px] shadow-[0 2px 0 #629a37] ">Buy now</button>
                </a>
            </div>
        </nav>
 </>
  )
}

export default Navbar
