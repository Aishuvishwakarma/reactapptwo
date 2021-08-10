import React,{useEffect,useRef} from 'react'
import './Landing.css'
import {TimelineLite,TweenMax,Power3} from  'gsap';
export default function Landing() {
    let app = useRef(null)
    let card1 = useRef(null)
    let card2 = useRef(null)
    let card3 = useRef(null)
    let card4 = useRef(null)
    let img1 = useRef(null)
    let img2 = useRef(null)
    let img3 = useRef(null)
    let img4 = useRef(null)
    let img5 = useRef(null)
    let text = useRef(null)
    let button = useRef(null)
    let tl = new TimelineLite({delay:.8});

    useEffect(() => {
       const color1 = card1
       const color2 = card2
       const color3 = card3
       const color4 = card4
       const image1 = img1
       const image2 = img2
       const image3 = img3
       const image4 = img4
       const image5 = img5
       const Heading = text
       const btn = button
       TweenMax.to(app,0,{css:{visibility:'visible'}})
       tl
       .from(Heading,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},.5)
       .from(color1,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1)
       .from(color2,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1)
       .from(color3,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1)
       .from(color4,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1)
       .from(image1,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1)
       .from(image2,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1)
       .from(image3,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1)
       .from(image4,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1)
       .from(image5,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1)
       .from(btn,2,{top:'80%',opacity:'.5',ease:Power3.easeOut},1.5)
    }, [tl])

    return (
        <div className="bg" ref={el => app =el} >
            <nav>
                <h2 >EVER<span>!</span>POST</h2>
                <a href=""><span></span>MENU</a>
            </nav>
            <h2 ref={el => text = el}>EVER<span>!</span>POST</h2>
            <div ref={el => card1 = el}  id="card1" className="colorCard">
                <h2>imagine more</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div ref={el => card2 = el} id="card2" className="colorCard">
            <h2>Don't be affaid to make some waves</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div ref={el => card3 = el} id="card3" className="colorCard">
            <h2>imagine more</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div ref={el => card4 = el} id="card6" className="colorCard">
                <h2>imagine more</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div ref={el => img1 = el} id="imgCard1" className="imgCard"></div>
            <div ref={el => img2 = el} id="imgCard2" className="imgCard"></div>
            <div ref={el => img3 = el} id="imgCard3" className="imgCard"></div>
            <div ref={el => img4 = el}  id="imgCard4" className="imgCard"></div>
            <div ref={el => img5 = el}  id="imgCard5" className="imgCard"></div>
            <div ref={el => button = el} className="bottom">
                <button>Brand
                </button>
                <button>Influencer
                </button>
            </div>
        </div>
    )
}
