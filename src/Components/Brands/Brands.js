import React from 'react'
import './Brands.css'
function Brands() {
    return (
        <div className="Brandcontainer">
           <div className="row">
               <div id='box1' className="box">
                   <h2>01 Apply For Champaigns</h2>
                   <p>brands post paid content oppotunities on everipost. after creating your profile,you can apply for these camaigns.</p>
               </div>
               <div id="box2" className="box">
               <h2>02 Collaborate With Brands</h2>
               <p>once accepeted,you'll collaborate with the brand to create high-quality content.</p>
               </div>
           </div>
           <div className="row">
               <div id='box3' className="box">
                   <h2>03 Post To Social (or don't)</h2>
                   <h3>as an influencer</h3>
                   <p>you'll post your brand cpontent to social</p>
                   <h3>as an content creator</h3>
                   <p>brands reupose your content and no posting is required on your end</p>
               </div>
               <div id='box4' className="box">
                   <h2>04 Get Paid!</h2>
                   <p>you'll recive payment once all of your content is approved and you have met the agreed upon deliverables</p>
               </div>
           </div>  
        </div>
    )
}

export default Brands
