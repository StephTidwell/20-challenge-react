// import React from "react";

// function Footer() {
//     return (
//       <footer>
//         <p>&copy;</p>
//       </footer>
//     );
//   }

//   export default Footer;
import React from 'react';
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-green-100 text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
  );
}

export default Footer;
