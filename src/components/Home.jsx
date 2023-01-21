import React from "react";
import "../styles/home.scss";
import vg from '../assets/2.webp'
import '../styles/mediaQuery.scss'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>SS Clothing</h1>
          <p>Solutions to all your Fashions.</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, autem, ab dignissimos ad magnam voluptas    fugiat accusamus laboriosam voluptatem nihil nisi ducimus eligendi.
            </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
            <h1>How are You?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut, eius blanditiis adipisci labore dolore quasi iure ipsum dicta architecto unde, expedita maiores veritatis! Aliquid natus optio vitae dolores voluptate cumque. Illo, dolor placeat!</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
                <div style={{animationDelay:"0.9s"}}>
                    <AiFillYoutube/>
                    <p>YouTube</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
}

export default Home;
