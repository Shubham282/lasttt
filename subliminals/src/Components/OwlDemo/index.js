import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';  


export class Owldemo1 extends Component {  
        render()  
        {  
          return (  
            <div className='main2' >  
          <div class='container-fluid' >      
           <div className="row title" id="Videos" style={{marginBottom: "20px"}} >      
                <h1 className='head2'>Videos</h1>
           </div>  
       </div>  
       <div class='container-fluid' >  

        <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
          <div className='yeah'><video controls className="img" src= {'assets/img/trip.mp4'}/>
          <h2 className='edits'>Official Music Video</h2></div> 
           
             
           <div className='yeah'><video  controls className="img" src= {'assets/img/trip.mp4'}/>
           <h2 className='edits'>Cinematic Flex</h2></div>  
           <div className='yeah'><video controls className="img" src= {'assets/img/trip.mp4'}/>
           <h2 className='edits'>NBA Official Project</h2></div>
           {/* <div className='yeah'><video controls  className="img" src= {'assets/img/nba 60sec.mp4'}/></div>  
           <div ><video controls className="img" src= {'assets/img/nba 30sec.mp4'}/></div>  
           <div className='yeah'><video  controls className="img" src= {'assets/img/eversmile.mp4'}/></div>   */}
      </OwlCarousel>  
      </div>  
  
      </div>  
          )  
        }  
      }  
        
  
export default Owldemo1 