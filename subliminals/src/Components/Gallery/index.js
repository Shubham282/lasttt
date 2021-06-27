import React from 'react'
import './gallery.css'
import Img1 from '../../images/potrait-1.jpg'




const Gallery = () => {

    let data=[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img1,
        },
        {
            id:3,
            imgSrc:Img1,
        },
        {
            id:4,
            imgSrc:Img1,
        },
        {
            id:5,
            imgSrc:Img1,
        },
        {
            id:6,
            imgSrc:Img1,
        },
    ]

    return (
        <>
           <div class="section-title" id='potrait'>
            <span>Our Portfolio</span>
             <h2>Our Portfolio</h2>
            
         </div>
           <div className='gallery'>
               {data.map((item,index) =>{
                   return(
                       <div className='pics' key={index}>
                           <img  className='gal' src={item.imgSrc} alt='potraits'/ >
                       </div>    
                   )
               })}
           </div>
        </>
    )
}

export default Gallery
