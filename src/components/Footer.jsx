import React from "react";

// imported media
import muted from "../assets/muted.png";

const Footer = () => {
  return (
    <div className="w-full h-full bg-slate-900 border-t-2 md:px-[5%] px-10 py-5">
      <div className="footer flex flex-wrap justify-center">
        <div className="about w-[25%] min-w-[250px] my-5 text-center">
          <h3 className="text-xl font-bold text-slate-50">About</h3>
          <ul className="text-slate-500 font-normal">
            <li>About company</li>
            <li>Vacancies</li>
            <li>Beta Program</li>
            <li>Information for partners</li>
            <li>Advertising</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Ivy uses recommendation technologies</li>
            <li>Compliance</li>
          </ul>
        </div>
        <div className="sections w-[25%] min-w-[250px] my-5 text-center">
          <h3 className="text-xl font-bold text-slate-50">Sections</h3>
          <ul className="text-slate-500 font-normal">
            <li>My Eevee</li>
            <li>What's new</li>
            <li>Movies</li>
            <li>Series</li>
            <li>Cartoons</li>
            <li>TV channels</li>
            <li>What to see</li>
            <li>Certificate activation</li>
          </ul>
        </div>
        <div className="support w-[25%] min-w-[250px] my-5 text-center">
          <h3 className="text-xl font-bold text-slate-50">Support</h3>
          <p className="text-slate-500 font-normal">
            We are always ready to help you. Our operators are online 24/7{" "}
            <button>Write in chat</button>
          </p>
          <p className="text-slate-500 font-normal">LogoMail LogoPhone</p>
          <p className="text-slate-500 font-normal">ask.ivi.ru</p>
          <p className="text-slate-500 font-normal">Answers on questions</p>
        </div>
        <div className="subscribe w-[25%] min-w-[250px] my-5 text-center">
          <img src={muted} alt="" className="w-[100px] mx-auto" />
          <p className="text-slate-500 font-normal text-center">
            Watch movies, TV series and cartoons without advertising
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
