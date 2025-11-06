// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { FaBed, FaBath, FaRulerCombined, FaHeart, FaEye, FaShareAlt } from "react-icons/fa";
// // import Navbar from './Navbar';
// // import { useLocation } from "react-router-dom"; 
// // import axios from 'axios';
// // import Swal from 'sweetalert2';
// // const properties = [
// //   {
// //     image: "luxury.jpg",
// //     status: "FOR SALE",
// //     location: "Belmont Gardens, Chicago",
// //     price: "$34,900",
// //     title: "New Apartment Nice View",
// //     description: "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
// //     beds: 3,
// //     baths: 2,
// //     area: 3450,
// //     agent: {
// //       name: "William Seklo",
// //       role: "Estate Agents",
// //       avatar: "1.jpg_1.jpeg",
// //     }
// //   },
// //   {
// //     image: "apartment.jpg",
// //     status: "FOR SALE",
// //     location: "Belmont Gardens, Chicago",
// //     price: "$34,900",
// //     title: "Modern Apartments",
// //     description: "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood Floors,new Kitchen,washroom",
// //     beds: 3,
// //     baths: 2,
// //     area: 3450,
// //     agent: {
// //       name: "William Seklo",
// //       role: "Estate Agents",
// //       avatar: "2.jpg_1.jpeg",
// //     }
// //   },
// //   {
// //     image: "stairs.webp",
// //     status: "FOR SALE",
// //     location: "Belmont Gardens, Chicago",
// //     price: "$34,900",
// //     title: "Comfortable Apartment",
// //     description: "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood Floors,new Kitchen,washroom,",
// //     beds: 3,
// //     baths: 2,
// //     area: 3450,
// //     agent: {
// //       name: "William Seklo",
// //       role: "Estate Agents",
// //       avatar: "3.jpg_2.jpeg",
// //     }
// //   },
// //   {
// //     image: "villa.jpg",
// //     status: "FOR SALE",
// //     location: "Belmont Gardens, Chicago",
// //     price: "$34,900",
// //     title: "Luxury villa in Rego Park",
// //     description: "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
// //     beds: 3,
// //     baths: 2,
// //     area: 3450,
// //     agent: {
// //       name: "William Seklo",
// //       role: "Estate Agents",
// //       avatar: "feed.jpg",
// //     }
// //   }
// // ];

// // const Property = () => {
// //   const location= useLocation();
// //   const handleBuy=async(propertyId)=>{
// //     const userData=JSON.parse(localStorage.getItem("userInfo"));
// //     const response=await axios.post("http://localhost:3000/api/buy",{
// //       userId:userData?._id,propertyId});
// //  if(response?.data?.code==200){
// //   Swal.fire({
// //     title:"Buy Property",
// //     text:response?.data?.message,
// //     icon:"success",
// //   })
// //  } else{
// //   Swal.fire({
// //     title:"Buy Property",
// //     text:response?.data?.message,
// //     icon:"error",
// //   })
// //  }
// //   }
  
// //   return (
// //     <>
// //       {location?.pathname!='/'&&<Navbar/>}
// //     <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
// //       <div className="container text-center">
// //         <p className="text-danger small fw-semibold bg-danger-subtle d-inline px-3 py-1 rounded-pill mb-2  ">Properties</p>
// //         <h2 className="fw-bold text-center mb-5">Featured Listings</h2>
// //         <div className="row g-4">
// //           {properties.map((property, index) => (
// //             <div className="col-md-6 col-lg-3" key={index}>
// //               <div className="card border-0 shadow-sm h-100 property-card">
// //                 <div className="position-relative">
// //                   <img src={property.image} className="card-img-top" alt="property" />
// //                   <span className="badge bg-success position-absolute top-0 end-0 m-2">{property.status}</span>
// //                   <span className="badge bg-dark position-absolute bottom-0 start-0 m-2">
// //                     {property.location}
// //                   </span>
// //                 </div>
// //                 <div className="card-body">
// //                   <h6 className="text-danger">{property.price} <span className="text-muted">/Month</span></h6>
// //                   <h5 className="fw-bold">{property.title}</h5>
// //                   <p className="small text-muted">{property.description}</p>
// //                   <div className="d-flex justify-content-between small text-muted mb-2">
// //                     <span><FaBed className="me-1" />{property.beds} Bedrooms</span>
// //                     <span><FaBath className="me-1" />{property.baths} Bathrooms</span>
// //                     <span><FaRulerCombined className="me-1" />{property.area} sqft</span>
// //                   </div>
// //                   <button onClick={()=>handleBuy(property?._id)} className="btn btn-danger">Buy</button>
// //                 </div>
// //                 <div className="card-footer bg-white d-flex justify-content-between align-items-center">
// //                   <div className="d-flex align-items-center">
// //                     <img
// //                       src={property.agent.avatar}
// //                       alt={property.agent.name}
// //                       width="35"
// //                       height="35"
// //                       className="rounded-circle me-2"
// //                     />
// //                     <div>
// //                       <h6 className="mb-0 small">{property.agent.name}</h6>
// //                       <small className="text-muted">{property.agent.role}</small>
// //                     </div>
// //                   </div>
// //                   <div className="d-flex gap-2">
// //                     <FaHeart className="text-muted" />
// //                     <FaEye className="text-muted" />
// //                     <FaShareAlt className="text-muted" />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //     </>
// //   );
// // };

// // export default Property;



// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaBed, FaBath, FaRulerCombined, FaHeart, FaEye, FaShareAlt } from "react-icons/fa";
// import Navbar from './Navbar';
// import { useLocation } from "react-router-dom"; 
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const properties = [
//   {
//     _id: "688c4d25ad214c870707a449",
//     image: "luxury.jpg",
//     status: "FOR SALE",
//     location: "Belmont Gardens, Chicago",
//     price: "$34,900",
//     title: "New Apartment Nice View",
//     description: "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
//     beds: 3,
//     baths: 2,
//     area: 3450,
//     agent: {
//       name: "William Seklo",
//       role: "Estate Agents",
//       avatar: "1.jpg_1.jpeg",
//     }
//   },
//   {
//     _id: "688c4d25ad214c870707a450",
//     image: "apartment.jpg",
//     status: "FOR SALE",
//     location: "Belmont Gardens, Chicago",
//     price: "$34,900",
//     title: "Modern Apartments",
//     description: "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood Floors, new Kitchen, washroom",
//     beds: 3,
//     baths: 2,
//     area: 3450,
//     agent: {
//       name: "William Seklo",
//       role: "Estate Agents",
//       avatar: "2.jpg_1.jpeg",
//     }
//   },
//   {
//     _id: "688c4d25ad214c870707a451",
//     image: "stairs.webp",
//     status: "FOR SALE",
//     location: "Belmont Gardens, Chicago",
//     price: "$34,900",
//     title: "Comfortable Apartment",
//     description: "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood Floors, new Kitchen, washroom",
//     beds: 3,
//     baths: 2,
//     area: 3450,
//     agent: {
//       name: "William Seklo",
//       role: "Estate Agents",
//       avatar: "3.jpg_2.jpeg",
//     }
//   },
//   {
//     _id: "688c4d25ad214c870707a452",
//     image: "villa.jpg",
//     status: "FOR SALE",
//     location: "Belmont Gardens, Chicago",
//     price: "$34,900",
//     title: "Luxury villa in Rego Park",
//     description: "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
//     beds: 3,
//     baths: 2,
//     area: 3450,
//     agent: {
//       name: "William Seklo",
//       role: "Estate Agents",
//       avatar: "feed.jpg",
//     }
//   }
// ];

// const Property = () => {
//   const location = useLocation();

//   const handleBuy = async (propertyId) => {
//     const userData = JSON.parse(localStorage.getItem("userInfo"));
//     if (!userData?._id) {
//       Swal.fire({
//         title: "Login Required",
//         text: "Please login before buying a property.",
//         icon: "warning",
//       });
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3000/api/buy", {
//         userId: userData._id,
//         propertyId
//       });

//       if (response?.data?.code === 200) {
//         Swal.fire({
//           title: "Buy Property",
//           text: response?.data?.message,
//           icon: "success",
//         });
//       } else {
//         Swal.fire({
//           title: "Buy Property",
//           text: response?.data?.message,
//           icon: "error",
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         title: "Error",
//         text: "Something went wrong while buying property.",
//         icon: "error",
//       });
//     }
//   };

//   return (
//     <>
//       {location?.pathname !== '/' && <Navbar />}
//       <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
//         <div className="container text-center">
//           <p className="text-danger small fw-semibold bg-danger-subtle d-inline px-3 py-1 rounded-pill mb-2">Properties</p>
//           <h2 className="fw-bold text-center mb-5">Featured Listings</h2>
//           <div className="row g-4">
//             {properties.map((property, index) => (
//               <div className="col-md-6 col-lg-3" key={index}>
//                 <div className="card border-0 shadow-sm h-100 property-card">
//                   <div className="position-relative">
//                     <img src={property.image} className="card-img-top" alt="property" />
//                     <span className="badge bg-success position-absolute top-0 end-0 m-2">{property.status}</span>
//                     <span className="badge bg-dark position-absolute bottom-0 start-0 m-2">
//                       {property.location}
//                     </span>
//                   </div>
//                   <div className="card-body">
//                     <h6 className="text-danger">{property.price} <span className="text-muted">/Month</span></h6>
//                     <h5 className="fw-bold">{property.title}</h5>
//                     <p className="small text-muted">{property.description}</p>
//                     <div className="d-flex justify-content-between small text-muted mb-2">
//                       <span><FaBed className="me-1" />{property.beds} Bedrooms</span>
//                       <span><FaBath className="me-1" />{property.baths} Bathrooms</span>
//                       <span><FaRulerCombined className="me-1" />{property.area} sqft</span>
//                     </div>
//                     <button onClick={() => handleBuy(property._id)} className="btn btn-danger">Buy</button>
//                   </div>
//                   <div className="card-footer bg-white d-flex justify-content-between align-items-center">
//                     <div className="d-flex align-items-center">
//                       <img
//                         src={property.agent.avatar}
//                         alt={property.agent.name}
//                         width="35"
//                         height="35"
//                         className="rounded-circle me-2"
//                       />
//                       <div>
//                         <h6 className="mb-0 small">{property.agent.name}</h6>
//                         <small className="text-muted">{property.agent.role}</small>
//                       </div>
//                     </div>
//                     <div className="d-flex gap-2">
//                       <FaHeart className="text-muted" />
//                       <FaEye className="text-muted" />
//                       <FaShareAlt className="text-muted" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Property;




import React, { useEffect, useState } from 'react'
import { BsGeoAltFill } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { BiFullscreen } from "react-icons/bi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import NavBar from './Navbar';
import axios from 'axios'
import Swal from 'sweetalert2'

const listings = [
    {
        title: 'New Apartment Nice View',
        price: '$38,900',
        location: 'Belmont Gardens, Chicago',
        img: 'house4.jpg',
        desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
        beds: 3,
        baths: 2,
        area: 3450,
        label: 'FOR RENT'
    },
    {
        title: 'Modern Apartments',
        price: '$40,900',
        location: 'Belmont Gardens, Chicago',
        img: 'house6.jpg',
        desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
        beds: 3,
        baths: 2,
        area: 3450,
        label: 'FOR RENT'
    },
    {
        title: 'Comfortable Apartment',
        price: '$30,900',
        location: 'Belmont Gardens, Chicago',
        img: 'house2.webp',
        desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
        beds: 3,
        baths: 2,
        area: 3450,
        label: 'FOR RENT'
    },
    {
        title: 'Luxury villa in Rego Park',
        price: '$34,900',
        location: 'Belmont Gardens, Chicago',
        img: 'house5.webp',
        desc: 'Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood',
        beds: 3,
        baths: 2,
        area: 3450,
        label: 'FOR RENT'
    }
];



const Property = () => {
  const [listData, setListData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/property-list');
    if (response?.data?.code == 200) {
      setListData(response?.data?.data)
      console.log(listData)
    }

  }
    const handleBuy = async (propertyId) => {
        const userData = JSON.parse(localStorage.getItem('userInfo'));
      if(!userData?._id){
        navigate('/login')
        return
      }
        const response = await axios.post('http://localhost:3000/api/buy', { userId: userData?._id, propertyId });
        console.log(response)
        if (response?.data?.code == 200) {
            Swal.fire({
                title: "Buy Property",
                text: response?.data?.message,
                icon: 'success'
            })
        } else {
            Swal.fire({
                title: "Buy property",
                text: response?.data?.message,
                icon: 'error'
            })
        }

    }
    return (
        <>
            {location?.pathname != "/" && <NavBar />}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-4">
                        <span className="badge bg-danger-subtle text-danger mb-2">Properties</span>
                        <h2 className="fw-bold">Featured Listings</h2>
                    </div>
                    <div className="row g-4">
                        {listData.map((item, i) => (
                            <div key={i} className="col-md-6 col-lg-3">
                                <div className="card h-100 shadow-sm border-0 property">
                                    <div className="position-relative">
                                        <img src={item?.pic} className="card-img-top" alt={item.title} />
                                        

                                        <span className="badge bg-success position-absolute top-0 end-0 m-2">{item.label}</span>
                                        <div className="position-absolute bottom-0 text-white d-flex justify-content-between w-100 p-2" style={{ background: 'rgba(0,0,0,0.5)' }}>
                                            <small><BsGeoAltFill />{item.location}</small>
                                            <small><AiOutlineCamera />4 <i className="bi bi-box me-1 ms-2"></i>2</small>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="text-danger">{item.price} <small className="text-muted"></small></h6>
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text text-muted small">{item.desc}</p>
                                        <div className="d-flex justify-content-between text-muted small">
                                            <div><BsHouseDoor />{item.beds} 8-Bedrooms</div>
                                            <div><CiDroplet />{item.baths} 3-Bathrooms</div>
                                            <div><BiFullscreen />{item.area} sqft</div>
                                        </div>
                                    </div>

                                  {location?.pathname!=='property' &&  <button onClick={() => handleBuy(item?._id)} className='btn btn-lm btn-danger ms-6'>Buy</button>}
                                    <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="3.jpg_2.jpeg"
                                                style={{ height: 30, width: 30 }}
                                                className="rounded-circle me-2"
                                                alt="agent" />
                                            <div>
                                                <div className="fw-semibold small">William Seklo</div>
                                                <div className="text-muted small">Estate Agents</div>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <BsArrowsAngleExpand />
                                            <IoMdHeartEmpty />
                                            <BsClockHistory />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Property;
