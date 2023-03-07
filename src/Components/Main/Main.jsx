import React, {useEffect} from 'react'
import './Main.css'
import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"

import img from "../../assets/pic1.jpg"
import img2 from "../../assets/pic2.jpg"
import img3 from "../../assets/pic3.jpg"
import img4 from "../../assets/pic4.jpg"
import img5 from "../../assets/pic5.jpg"
import img6 from "../../assets/pic6.jpg"
import img7 from "../../assets/pic7.jpg"
import img8 from "../../assets/pic8.jpg"
import img9 from "../../assets/pic9.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data =[
  {
    id : 1,
    imgSrc: img,
    destTitle : 'Bora Bora',
    location: 'New Zealand',
    grade : 'Cultural Relax',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. this place is know for its luxrious stays and adventurous activities.'
  },
  {
    id : 2,
    imgSrc: img2,
    destTitle : 'Machu Picchu',
    location: 'Peru',
    grade : 'Cultural Relax',
    fees: '$600',
    description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.'
  },
  {
    id : 3,
    imgSrc: img3,
    destTitle : 'Great Barrier Reef',
    location: 'Australia',
    grade : 'Cultural Relax',
    fees: '$700',
    description: 'The Great Barrier Reef is one of the seven wonders of the natural world, and pulling away from it, and viewing it from a greater distance, you can understand why. '
  },
  {
    id : 4,
    imgSrc: img4,
    destTitle : 'Capadopia',
    location: 'Turkey',
    grade : 'Cultural Relax',
    fees: '$500',
    description: 'Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere.  '
  },
  {
    id : 5,
    imgSrc: img5,
    destTitle : 'Guanajuato',
    location: 'Mexico',
    grade : 'Cultural Relax',
    fees: '$500',
    description: 'Guanajuato is a city in central Mexico.It"s known for its silver mining history and colonial architecture. Its network of narrow streets, alleyways and tunnels is typified by the Callejón del Beso (Alley of the Kiss), so named because the balconies are close enough for a couple to reach across and kiss.  '
  },
  {
    id : 6,
    imgSrc: img6,
    destTitle : 'Bali',
    location: 'Thailand',
    grade : 'Cultural Relax',
    fees: '$500',
    description: 'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands,  '
  },
  {
    id : 7,
    imgSrc: img7,
    destTitle : 'Antalia',
    location: 'Turkey',
    grade : 'Cultural Relax',
    fees: '$900',
    description: 'Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a mosque and major cultural and historical site in Istanbul, Turkey.  '
  },
  {
    id : 8,
    imgSrc: img8,
    destTitle : 'Antalia Beach',
    location: 'Turkey',
    grade : 'Cultural Relax',
    fees: '$900',
    description: 'Guanajuato is a city in central Mexico.It"s known for its silver mining history and colonial architecture. Its network of narrow streets, alleyways and tunnels is typified by the Callejón del Beso (Alley of the Kiss), so named because the balconies are close enough for a couple to reach across and kiss.  '
  },
  {
    id : 9,
    imgSrc: img9,
    destTitle : 'Tokyo',
    location: 'Japan',
    grade : 'Cultural Relax',
    fees: '$900',
    description: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods.'
  },
]


const Main = () => {
  
  useEffect(() => {
    Aos.init({duration: 2000})
   }, []  )


  return (
   <section className='main Container section'>

       <div className="secTitle">
          <h3 className='title'>
            Most visited destinations
          </h3>
        </div> 

        <div className='secContent grid' >
          {
           Data.map(({id , imgSrc, destTitle, location , grade , fees, description }) => {
            return(
              <div key={id} className='singleDestination' data-aos="fade-up">

                   <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle} />
                   </div>
                  
                  <div className='cardInfo'>
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='continent flex'>
                      <HiOutlineLocationMarker  className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                     <div className='fees flex'>
                        <div className='grade'>
                              <span>{grade} <small>+1</small></span>
                        </div>

                        <div className='price'>
                           <h5>{fees}</h5>
                        </div>
                     </div>
                     
                     <div className='desc'>
                            <p>{description}</p>
                     </div>

                     <button className='btn flex'> Details
                     <HiOutlineClipboardCheck className="icons" />
                     </button>

                  </div>
              </div>
            )
           })
          }
        </div>

   </section>
  )
}

export default Main