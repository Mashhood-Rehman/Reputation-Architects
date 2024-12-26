

import { Link } from 'react-router-dom'  
import { Facebook, Twitter, Linkedin, WebcamIcon as Skype, Send } from 'lucide-react'

// export default function Footer() {


//   const galleryImages = [
//     '/G1.webp', '/G2.webp', '/G3.webp', '/G4.webp', '/G5.webp', '/G6.webp'
//   ]

//   return (
//     <footer className="relative text-white py-16">
//      <div className="absolute inset-0 z-0">
//      `
//   <img src="/Footer.webp" alt="Footer background" className="object-cover w-full h-full" />
//   <div className="absolute inset-0 bg-black/90 z-10" />
// </div>

//       {/* Content Section */}
//       <div className=" mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative ">
        
//         {/* About Section */}
//         <div className="space-y-6">
//           <Link to="/" className="">
//             <img src="/ReputationArchitectsFinalLogo.webp" alt="Logo" width={120} height={50} className="brightness-0 invert" />
//           </Link>
//           <p className="text-gray-400 max-w-sm">
//             Digital Agency with creative ideas and great team support.
//           </p>
//         </div>

       
//         <div className="space-y-6">
//           <h3 className="text-2xl font-semibold">Newsletter</h3>
//           <form  className="relative max-w-md">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full px-4 py-3 bg-white text-black rounded-md"
//               required
//             />
//             <button
//               type="submit"
//               className="absolute right-0 top-0 h-full px-6 bg-[#ff4a17] hover:bg-[#ff5e33] transition-colors rounded-r-md disabled:bg-gray-400"
//             >
//               <Send className="w-5 h-5" />
//             </button>
//           </form>
          
//         </div>

//         <div className="space-y-6">
//           <h3 className="text-2xl font-semibold">Our Services</h3>
//           <div className="grid grid-cols-3 gap-4">
//             {galleryImages.map((src, index) => (
//               <div key={index} className="relative group overflow-hidden rounded-md aspect-[4/3]">
//                 <img
//                   src={src}
//                   alt={`Gallery image ${index + 1}`}
//                   className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

       
       
//       </div>
//     </footer>
//   )
// }



// import React from 'react';

// export default function Footer() {

  // const galleryImages = [
  //       '/G1.webp', '/G2.webp', '/G3.webp', '/G4.webp', '/G5.webp', '/G6.webp'
  //     ]
//   return (
//     <footer className=" relative py-10 sm:px-10 px-6 font-sans tracking-wide">
//        <div
//         className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover "
//         style={{ backgroundImage: "url('/Footer.webp')" }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-90"></div>
//       </div>

//       <div className="max-w-screen-xl mx-auto">
        
      
//         <div className="max-w-xl mx-auto text-center">
//           <h3 className="text-2xl font-bold text-white">Newsletter</h3>
//           <p className="text-sm mt-4 text-white z-50">
//             Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!
//           </p>

//           <div className="bg-gray-800 flex px-2 py-1.5 rounded-full text-left mt-8">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full outline-none bg-transparent text-sm pl-4 text-white"
//             />
//             <button
//               type="button"
//               className="bg-[#f97316] hover:bg-orange-600 text-white text-sm rounded-full px-4 py-2 ml-4 transition-all tracking-wide"
//             >
//               Submit
//             </button>
//           </div>
//         </div>

//         <hr className="my-12 border-gray-700" />

//         <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div className="space-y-6">
//            <Link to="/" className="">
//            <img src="/Main-Logo.webp" alt="Logo" width={120} height={50} className="brightness-0 invert" />
//           </Link>          <p className="text-white max-w-sm">
//             Digital Agency with creative ideas and great team support.
//           </p>
//         </div>
//         <div>
//             <h4 className="text-base font-bold mb-6 text-white">About Us</h4>
//             <ul className="space-y-3 z-10 text-white text-xl">
//               <li>
//                 <a href="#" className=" hover:text-[#f97316] text-sm">
//                   Our Story
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className=" hover:text-[#f97316] text-sm">
//                   Mission and Values
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-[#f97316] text-sm">
//                   Team
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-[#f97316] text-sm">
//                   Testimonials
//                 </a>
//               </li>
//             </ul>
//           </div>

         
//           <div className="space-y-6">  
//                      <h3 className="text-2xl text-white font-semibold">Our Services</h3>
//           <div className="grid grid-cols-3 gap-4">             {galleryImages.map((src, index) => (
//               <div key={index} className="relative group overflow-hidden rounded-md aspect-[4/3]">
//                 <img
//                    src={src}
//                    alt={`Gallery image ${index + 1}`}
//                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
//                  />
//                </div>
//              ))}
//           </div>
//         </div>

//         <div className="space-y-6">
//           <h3 className="text-2xl text-white font-semibold">Contact Us</h3>
//           <div className="space-y-4 text-gray-400">
//             <p>301 Princes Street, Damietta</p>
//             <p>Egypt-104</p>
//             <p>+92-207-823-7766</p>
//             <p>info@example.com</p>
//             <div className="flex gap-4">
//               <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
//                 <Facebook className="w-5 h-5" />
//               </Link>
//               <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
//                 <Twitter className="w-5 h-5" />
//               </Link>
//               <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
//                 <Linkedin className="w-5 h-5" />
//               </Link>
//               <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
//                 <Skype className="w-5 h-5" />
//               </Link>
//             </div>
//           </div>
//         </div>

          
//         </div>
//       </div>
//     </footer>
//   );
// }



import React from 'react'

const galleryImages = [
  '/G1.webp', '/G2.webp', '/G3.webp', '/G4.webp', '/G5.webp', '/G6.webp'
]
const Footer = () => {
  return (
    <div className=''>

      <div className=" relative h-[100vh] bg-opacity-90 bg-black  bg-[url('/Footer.webp')]">
      <div className='absolute inset-0'></div>
            <div className="max-w-screen-xl mx-auto ">
        
      
                
        
        
                 <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8 ">
                 <div className="space-y-6 mt-10">
                    <Link to="/" className="">
                    <img src="/Main-Logo.webp" alt="Logo" width={120} height={50} className="brightness-0 invert" />
                   </Link>         
                    <p className="text-white max-w-sm">
                     Digital Agency with creative ideas and great team support.
                   </p>
                 </div>
                 <div>
                    <h4 className="text-base font-bold mb-6 text-white  mt-10">About Us</h4>
                     <ul className="space-y-2 z-10 text-white text-xl">
                  <li>
                        <a href="#" className=" hover:text-[#f97316] text-sm">
                           Our Story
                         </a>
                       </li>
                       <li>
                 <a href="#" className=" hover:text-[#f97316] text-sm">
                    Mission and Values
                 </a>
               </li>
               <li>
                 <a href="#" className="text-gray-400 hover:text-[#f97316] text-sm">
                   Team
                         </a>
                      </li>
                       <li>
                        <a href="#" className="text-gray-400 hover:text-[#f97316] text-sm">
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>
        
                 
                  <div className="space-y-6">  
                             <h3 className="text-2xl text-white font-semibold  mt-10">Our Services</h3>
                   <div className="grid grid-cols-3 gap-4">             {galleryImages.map((src, index) => (
       <div key={index} className="relative group overflow-hidden rounded-md aspect-[4/3]">
                         <img
                            src={src}
                           alt={`Gallery image ${index + 1}`}
                           className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                        />
                      </div>
                    ))}
                 </div>
               </div>
        
                 <div className="space-y-6">
                   <h3 className="text-2xl text-white font-semibold  mt-10">Contact Us</h3>
                   <div className="space-y-4 text-white">
                     <p>301 Princes Street, Damietta</p>
                     <p>Egypt-104</p>
                     <p>+92-207-823-7766</p>
                     <p>info@example.com</p>
                     <div className="flex gap-4">
                       <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
                         <Facebook className="w-5 h-5" />
                       </Link>
                       <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
                         <Twitter className="w-5 h-5" />
                       </Link>
                       <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
                         <Linkedin className="w-5 h-5" />
                       </Link>
                     <Link to="#" className="hover:text-[#ff4a17] transition-colors transform hover:-translate-y-1 duration-300">
                         <Skype className="w-5 h-5" />
                       </Link>
                     </div>
                 </div>
                 </div>
         
                  
               </div>
               
             </div>
             <hr className="my-12 border-gray-700" />

             <div className="max-w-xl mx-auto  text-center">
                <h3 className="text-2xl font-bold text-white">Newsletter</h3>
                 <p className="text-sm mt-4 text-white z-50">
                     Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!
                   </p>
        
                   <div className="bg-gray-800 flex px-2 py-1.5 rounded-full text-left mt-8">
                     <input
                       type="email"
                       placeholder="Enter your email"
                       className="w-full outline-none bg-transparent text-sm pl-4 text-white"
                     />
                     <button
                      type="button"
                     className="bg-[#f97316] hover:bg-orange-600 text-white text-sm rounded-full px-4 py-2 ml-4 transition-all tracking-wide"
            >
                       Submit
                     </button>
                   </div>
                 </div>
      </div>
    </div>



  )
}

export default Footer