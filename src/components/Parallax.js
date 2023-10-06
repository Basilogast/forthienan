import React from 'react';
import p17 from "../assets/img/paralax/paralax__0017_background.png";
import p16 from "../assets/img/paralax/paralax__0016_sky-light-1.png";
import p15 from "../assets/img/paralax/paralax__0015_sky-light-2.png";
import p14 from "../assets/img/paralax/paralax__0014_sky-light-3.png";
import p13 from "../assets/img/paralax/paralax__0013_smoke-back-1.png";
import p12 from "../assets/img/paralax/paralax__0012_smoke-back-2.png";
import p11 from "../assets/img/paralax/paralax__0011_-smoke-back-3.png";
import p10 from "../assets/img/paralax/paralax__0010_back-building-1.png";
import p9 from "../assets/img/paralax/paralax__0009_back-building-2.png";
import p8 from "../assets/img/paralax/paralax__0008_-smoke-back-4.png";
import p7 from "../assets/img/paralax/paralax__0007_-smoke-back-5.png";
import p6 from "../assets/img/paralax/paralax__0006_mid-building-3.png";
import p5 from "../assets/img/paralax/paralax__0005_-smoke-back-6.png";
import p4 from "../assets/img/paralax/paralax__0004_mid-building-4.png";
import p3 from "../assets/img/paralax/paralax__0003_mid-building-5.png";
import p2 from "../assets/img/paralax/paralax__0002_smoke-front-7.png";
import p1 from "../assets/img/paralax/paralax__0001_front-building-6.png";
import p0 from "../assets/img/paralax/paralax__0000_smoke-upper-front-8.png";
import { useEffect } from "react";


export const Parallax = () => {

    useEffect(() => {
        const parallax_el = document.querySelectorAll(".parallax");
        let x_value = 0, y_value = 0;
        window.addEventListener("mousemove", (e) => {
            x_value = e.clientX - window.innerWidth / 2;
            y_value = e.clientY - window.innerHeight / 2;


            parallax_el.forEach((el) => {
                let speedx = el.dataset.speedx;
                let speedy = el.dataset.speedy;
                let z_value = (x_value * el.dataset.zvalue) / 2;

                el.style.transform = `translateX(calc(0% - ${x_value * speedx}px)) translateY(calc(0% - ${y_value * speedy}px))`;
            });
        });

        let text = document.querySelector(".textContainer");
        let building = document.querySelectorAll(".building");
        let smoke = document.querySelectorAll(".smoke");
        window.addEventListener("scroll", () => {
            let scroll_value = window.scrollY;
            building.forEach((el) => {
                el.style.top = window.innerHeight * (-0.1) + scroll_value * 0.3 + "px";
            });
            smoke.forEach((el) => {
                el.style.top = window.innerHeight * (-0.1) + scroll_value * 0.5 + "px";
            });
            text.style.top = scroll_value * 0.6 + "px";
        });
    },[]);//useEffect run everytime when changes happen => add [] to know that it only run when rendered

    return (
        <main>
            <img src={p17} data-speedx="0.3" data-speedy="0.38" data-zvalue="0" alt="background" className="parallax background" />
            <img src={p16} data-speedx="0.25" data-speedy="0.25" data-zvalue="0" alt="skylight" className="parallax skylight" />
            <img src={p15} data-speedx="0.25" data-speedy="0.25" data-zvalue="0" alt="skylight" className="parallax skylight" />
            <img src={p14} data-speedx="0.25" data-speedy="0.25" data-zvalue="0" alt="skylight" className="parallax skylight" />
            <img src={p13} data-speedx="0.24" data-speedy="0.205" data-zvalue="1" alt="smoke" className="parallax smoke" />
            <img src={p12} data-speedx="0.21" data-speedy="0.21" data-zvalue="1" alt="smoke" className="parallax smoke" />
            <img src={p11} data-speedx="0.19" data-speedy="0.17" data-zvalue="-1" alt="smoke" className="parallax smoke" />
            <img src={p10} data-speedx="0.195" data-speedy="0.205" data-zvalue="-1" alt="building" className="parallax building" />
            <img src={p9} data-speedx="0.155" data-speedy="0.165" data-zvalue="1" alt="building" className="parallax building" />
            <img src={p8} data-speedx="0.16" data-speedy="0.15" data-zvalue="1" alt="smoke" className="parallax smoke" />
            <img src={p7} data-speedx="0.16" data-speedy="0.15" data-zvalue="-1" alt="smoke" className="parallax smoke" />
            <img src={p6} data-speedx="0.105" data-speedy="0.095" data-zvalue="1" alt="building" className="parallax building" />
            <img src={p5} data-speedx="0.13" data-speedy="0.125" data-zvalue="1" alt="smoke" className="parallax smoke" />
            <img src={p4} data-speedx="0.085" data-speedy="0.075" data-zvalue="-1" alt="building" className="parallax building" />
            <img src={p3} data-speedx="0.065" data-speedy="0.055" data-zvalue="-1" alt="building" className="parallax building" />
            <img src={p2} data-speedx="0.13" data-speedy="0.115" data-zvalue="-1" alt="smoke" className="parallax smoke" />
            <img src={p1} data-speedx="0.045" data-speedy="0.035" data-zvalue="1" alt="building" className="parallax building" />
            <img src={p0} data-speedx="0.1" data-speedy="0.09" data-zvalue="1" alt="smoke" className="parallax smoke" />
        </main>
    )
}