// import React from 'react'
// import './Header.css'
// export const Header = () => {
// return (
//     <div className='header'>
//         <div className="header-content">
//             {/* <h2>Order Your Favourite Products here</h2>
//             <p>Choose a diverse menu featuring the world class Products</p>
//             <button>view menu</button> */}


//         </div>
//         </div>
// )
// }


// import React from 'react';
// import './Header.css';

// export const Header = () => {
//     return (
//         <div className='header'>
//             <div className="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src="../../assets/header_img.png" alt="First slide" />
//                         <div className="carousel-caption">
//                             <h3>First Title</h3>
//                             <p>First Subtitle</p>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://via.placeholder.com/1200x500" alt="Second slide" />
//                         <div className="carousel-caption">
//                             <h3>Second Title</h3>
//                             <p>Second Subtitle</p>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://via.placeholder.com/1200x500" alt="Third slide" />
//                         <div className="carousel-caption">
//                             <h3>Third Title</h3>
//                             <p>Third Subtitle</p>
//                         </div>
//                     </div>
//                 </div>
//                 <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Next</span>
//                 </a>
//             </div>
//         </div>
//     );
// };





import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Header.css';
import CarouselImage from "./Carousel.jpg"


export const Header = () => {
    return (
        <div className='header'>
            <Carousel>
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        src={CarouselImage}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        src={CarouselImage}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        // className="d-block w-100"
                        src={CarouselImage}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
