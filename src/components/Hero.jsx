import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import col from '../assets/college/clo.jpg'
import coll from '../assets/college/college-1.jpg'
import colll from '../assets/college/colll.jpg'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  width: '1000px'

}
const slideImages = [
  {
    url: col,
    caption: 'Slide 1'
  },
  {
    url: coll,
    caption: 'Slide 2'
  },
  {
    url: colll,
    caption: 'Slide 3'
  },
];
const Hero = () => {
  return (
    <div className="slide-container md:w-[1000px] m-auto">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} className="  md:h-[800px] mdd:h-[400px] mdd:w-[300px] " >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>

  )
}

export default Hero