
// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
 
//     <nav className="navbar navbar-expand-lg navbar-light bg-light ">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       Navbar
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Link
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             id="navbarDropdown"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li>
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link disabled"
//             href="#"
//             tabIndex={-1}
//             aria-disabled="true"
//           >
//             Disabled
//           </a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//         <button className="btn btn-outline-success" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   </div>
// </nav>

//   );
// };

// export default Navbar;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Navbar.css';



const Header = () => {
  return (
    <div className="container ">
      <div className="row">
      <header id="main-header" className="fixed-top">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <a className="navbar-brand" href="https://airdropalert.com/">
            <img
              src="https://airdropalert.com/wp-content/uploads/2023/12/airdrop-alert-logo.png"
              width="200"
              height="25"
              alt="AirdropAlert"
              id="logo"
            />
          </a>
          <button
            className="navbar-toggler  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <a className="nav-link active text-white " aria-current="page" href="https://airdropalert.com/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/browse-airdrops/?category="
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Airdrops
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item text-white" href="https://airdropalert.com/browse-airdrops/?category=featured">Featured Airdrops</a></li>
                  <li><a className="dropdown-item text-white" href="https://airdropalert.com/browse-airdrops/?category=new">New Airdrops</a></li>
                  <li><a className="dropdown-item text-white" href="https://airdropalert.com/browse-airdrops/?category=nft">NFT Airdrops</a></li>
                  <li><a className="dropdown-item text-white" href="https://airdropalert.com/browse-airdrops/?category=defi">DeFi Airdrops</a></li>
                  <li><a className="dropdown-item text-white" href="https://airdropalert.com/browse-airdrops/?category=potential-airdrops">Potential Airdrops</a></li>
                  <li><a className="dropdown-item text-white" href="https://airdropalert.com/browse-airdrops/?blockchain=solana">Solana Airdrops</a></li>
                  <li><a className="dropdown-item text-white" href="https://airdropalert.com/browse-airdrops/?blockchain=blast">Blast Airdrops</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="https://blogs.airdropalert.com/"
                  id="blogDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu " aria-labelledby="blogDropdown">
                  <li><a className="dropdown-item text-white" target="_blank" rel="noopener" href="https://blogs.airdropalert.com/category/news/trading-crypto/">Trading</a></li>
                  <li><a className="dropdown-item text-white" target="_blank" rel="noopener" href="https://blogs.airdropalert.com/category/news/nft/">NFTs</a></li>
                  <li><a className="dropdown-item text-white" target="_blank" rel="noopener" href="https://blogs.airdropalert.com/category/news/airdrops/">Airdrop Content</a></li>
                  <li><a className="dropdown-item text-white" target="_blank" rel="noopener" href="https://blogs.airdropalert.com/category/guides/">Guides</a></li>
                  <li><a className="dropdown-item text-white" target="_blank" rel="noopener" href="https://blogs.airdropalert.com/category/meme-coins/">Meme Coins</a></li>
                  <li><a className="dropdown-item text-white" target="_blank" rel="noopener" href="https://blogs.airdropalert.com/airdrop-farming-guide-strategy-for-beginners-experts/">Airdrop Farming</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://airdropalert.com/cointracker/">Cointracker</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
      </div>
    </div>
   
  );
};

export default Header;

