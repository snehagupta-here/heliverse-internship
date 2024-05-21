import React from 'react'
import "../css/style.css";
function Footer() {
  return (
  <>
    <footer>
            <div className="footer w-[100vw] h-auto pt-[22.5px] pr-[90px] pb-[12.5px] pl-[90px] overflow-hidden text-[14px] font-[400] flex justify-between text-[#EEE5FFB8]">
                <p className="copywrite">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
                <div className="document-support flex">
                 <a className="document text-[#EEE6FFB8] pr-[27px] no-underline" href="https://qodematrix.com/docs/motion-art-for-elementor/" target="_blank">Documentation</a>
                 <a className="support no-underline text-[#EEE5FFB8]" href="https://support.qodematrix.com/" target="_blank">Support</a>
                </div>
            </div>
        </footer>
  </>
  )
}

export default Footer
