import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiOutlineWhatsApp,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          {/* <h1>ABShaadi</h1> */}
          <p className="mainline-para">
            Find Your Perfect Partner:<br></br>{" "}
            <span className="abshaadi">Join ABShaadi</span> <br></br>and Start
            Your Journey to Happily Ever After
          </p>
        </main>
      </div>

      <div className="home2">
        {/* <img src="../assets//>" */}

        <div>
          <p>
            Welcome, here you can find your perfect match! We understand the
            importance of finding the right partner and we are here to help you
            in your journey. Our site is designed to cater to the needs of
            singles looking for a serious, committed relationship. Our advanced
            search algorithms and user-friendly interface make it easy for you
            to find the right person for you. We take pride in our strict
            verification process which ensures that the profiles on our site are
            genuine and authentic. Our team is dedicated to ensuring a safe and
            secure environment for our users. Thank you for choosing our site
            and we wish you all the best in your search for love.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            At ABShaadi, we are dedicated to helping individuals find their
            perfect life partner. We understand the importance of finding the
            right match and have developed advanced algorithms and a
            user-friendly interface to make the process as smooth as possible.
            Our team comprises of dedicated professionals with a wealth of
            experience in the field of matchmaking. We take pride in our strict
            verification process which ensures that the profiles on our site are
            genuine and authentic. We are committed to providing a safe and
            secure environment for our users and have implemented various
            measures to ensure the privacy of personal information. Thank you
            for choosing ABShaadi and we look forward to helping you on your
            journey to finding love.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Connect with us</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <a className="whatsappLink" href="https://wa.me/9473408048">
                <AiOutlineWhatsApp />
                <p>WhatsApp</p>
              </a>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
