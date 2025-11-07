// // components/Landingpage/TopBar.jsx
// import React from "react";
// import { TfiEmail } from "react-icons/tfi";
// import { FaLocationDot } from "react-icons/fa6";
// import { ImFacebook2 } from "react-icons/im";
// import { ImTwitter } from "react-icons/im";
// import { GrInstagram } from "react-icons/gr";

// const TopBar = () => {
//   return (
//     <div
//       className="top-bar d-flex justify-content-between align-items-center px-5 py-2 text-white"
//       style={{ backgroundColor: "#222", fontSize: "14px" }}
//     >
//       {/* Left Side - Email and Location */}
//       <div className="left d-flex align-items-center gap-4">
//         <span className="d-flex align-items-center gap-2">
//           <TfiEmail style={{ cursor: "pointer" }}/>
//           mohdsarfarazkhan237@gmail.com |
//         </span>
//         <span className="d-flex align-items-center gap-2">
//           <FaLocationDot style={{ cursor: "pointer" }}/>
//           15/A, Nest Tower, NYC
//         </span>
//       </div>

//       {/* Right Side - Social Icons and Add Listing */}
//       <div className="right d-flex align-items-center gap-3">
//         < ImFacebook2 style={{ cursor: "pointer" }}/>
//         < ImTwitter style={{ cursor: "pointer" }}/>

//         < GrInstagram style={{ cursor: "pointer" }}/>
     
//         <span
//           className="fw-semibold"
//           style={{ color: "#e63946", cursor: "pointer" }}
//         >
//         <button className="btn btn-sm btn-danger ms-2">Add Listing</button> 
//         </span>
//       </div>
//     </div>
//   );
// };

// export default TopBar;


// components/Landingpage/TopBar.jsx
import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

const TopBar = () => {
  return (
    <div
      className="top-bar text-white py-2 px-3"
      style={{ backgroundColor: "#222", fontSize: "14px" }}
    >
      <div className="container-fluid">
        <div className="row align-items-center text-center text-md-start">
          
          {/* Left Side */}
          <div className="col-12 col-md-7 mb-2 mb-md-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start gap-3">
            <span className="d-flex align-items-center gap-2">
              <TfiEmail style={{ cursor: "pointer" }} />
              <span>mohdsarfarazkhan237@gmail.com</span>
            </span>
            <span className="d-none d-md-flex">|</span>
            <span className="d-flex align-items-center gap-2">
              <FaLocationDot style={{ cursor: "pointer" }} />
              <span>15/A, Nest Tower, NYC</span>
            </span>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-end gap-3">
            <ImFacebook2 style={{ cursor: "pointer" }} />
            <ImTwitter style={{ cursor: "pointer" }} />
            <GrInstagram style={{ cursor: "pointer" }} />

            <button className="btn btn-sm btn-danger ms-md-3 mt-2 mt-md-0">
              Add Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
