import React,{useState} from 'react'
import './VideoSection.css'
import MediaOne from '../../assest/first.mp4'
function VideoSection() {
    const [state, setstate] = useState({
        video : MediaOne
    })
    return (
        <div className="videoContainer2">
            <nav>
                <h2>EVER<span>!</span>POST Originals</h2>
                <a href="">View all</a>
            </nav>
            <div className="videosBox">
                <video src={state.video}  autoPlay loop muted></video>
            </div>
            <div className="overlay">
                <div className="overlaybox">
                    <div className="leftRight"><p>Immigration</p></div>
                    <div className="center">
                        <p>Jazz Legends</p>
                         <button><i class="ri-play-circle-fill"></i></button>
                    </div>
                    <div className="leftRight"><p>Art Camp</p></div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection
