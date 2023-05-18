// import React from "react";
// import "./Footer.css";
// const Footer = () => {
//   return (
//     <>
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-section">
//             <div className="social-media">
//               <ul>
//                 <li>
//                   <a href="/">
//                     <i className="fab fa-github"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text">
        <p>&copy; 2023 Rushikesh Gaikwad. All rights reserved.</p>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="social-media">
            <a href="https://github.com/rishi-gaikwad">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/@Rushi111222">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/rushikesh-gaikwad-922b7516b/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/rushi_gaikwad_92">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
