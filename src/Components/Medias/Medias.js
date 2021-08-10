import React, { Component } from 'react'
import './Media.css'
import MediaOne from '../../assest/first.mp4'
import MediaSecond from '../../assest/second.mp4'
import MediaThird from '../../assest/third.mp4'
import MediaForth from '../../assest/forth.mp4'
import Mobile from '../../assest/mobile.png'
class Medias extends Component {
state ={
    media:[
        {Video : MediaOne, id: 'y7888hnj', title : 'lorem ipsum doler emmet' },,
        {Video : MediaSecond, id: 'uj7t7tb', title : 'lorem ipsum doler emmet' },
        {Video : MediaThird, id: 'kh9t7tt', title : 'lorem ipsum doler emmet' },
        {Video : MediaForth, id: 'kkn7u8t', title : 'lorem ipsum doler emmet' }
    ],
    frame : Mobile,
    video : MediaOne,
    Title: 'lorem ipsum doler emmet'
}

videoHandler = (m)=>{
    const {Video,title} = m
  this.setState({
      video : Video,
      Title : title
  })
}

    render() {

        let medias = this.state.media.map(m => (
            <div className="video" onClick={()=>this.videoHandler(m)} >
                 <p>{m.title}</p>
                 <video src={m.Video} key={m.id} autoPlay loop muted></video>
            </div>
        )  ) 
        return (
            <div className="container">
                <div className="left">
                <div className="heading"><h2>How Does it Work <span>?</span></h2></div>
                    <div className="videoContainer">
                        <div className="media">
                         {medias}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="videoPlay">
                        {/* <p>{this.state.Title}</p> */}
                        <img src={this.state.frame} alt="" />
                        <div className="videobox">
                        <video src={this.state.video} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Medias;
