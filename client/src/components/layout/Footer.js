 import React from 'react'
// import {Icon} from 'antd';


function Footer() {
    return (
        <div className="container-fluid Footer__Container pb-1 mt-5">
            <div className="container-fluid pr-5 pl-5">
                <div className="row">
                <div className="col-lg-3 text-center">
            <img className="Footer__Logo" src="https://gist.githubusercontent.com/prashankhan/944e1588df4eed7057d21de9cf636f81/raw/4392cab20854095f4ff6eb0b6cb81f5383ec970f/tharsha%2520logo2.svg" alt="logo"></img>
            <p className="footer__Paragaraph">We Will World's largest freelancing and crowdsourcing marketplace.,</p>
            </div>

            <div className="col-lg-3">
            <h4 className="Footer__List__Heading">Pages</h4>
                <a className="Footer__Link" href="/">About Us</a><br/>
                {/* <a className="Footer__Link"  href="/">Contact Us</a><br/> */}
                <a className="Footer__Link" href="/">FAQ</a><br/>
                <a className="Footer__Link" href="/">What We Do?</a><br/> 
            </div>

            <div className="col-lg-3">
            <h4 className="Footer__List__Heading">Contact Us</h4>
            <p className="footer__Paragaraph">0771234567</p>
            <p className="footer__Paragaraph">Tharshz1607@gmail.com</p>
            </div>

            <div className="col-lg-3">
            <h4 className="Footer__List__Heading">Follow us</h4>
                <a className="Footer__Link__Social" href="http://www.linkedin.com/in/tharshzlog"><i class="fab fa-facebook-f"></i></a>
                <a className="Footer__Link__Social"  href="http://www.linkedin.com/in/tharshzlog"><i class="fab fa-twitter"></i></a>
                <a className="Footer__Link__Social" href="http://www.linkedin.com/in/tharshzlog"><i class="fab fa-instagram"></i></a>
                <a className="Footer__Link__Social" href="http://www.linkedin.com/in/tharshzlog"><i class="fab fa-linkedin-in"></i></a>
            </div>
                </div>
            </div>
            <hr/> 
            <div className="text-center mt-3 mb-2"> 
           <p className="Footer__List__Heading"> Copyright © 2020 SEDORK- All Rights Reserved. </p>
            </div>
        </div>
    )
}

export default Footer