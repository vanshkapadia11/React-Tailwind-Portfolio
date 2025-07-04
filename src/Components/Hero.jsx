import React from "react";
import { ButtonPrimary } from "./Button";
import { ButtonOutline } from "../Components/Button";

const Hero = () => {
  return (
    <>
      <section className="pt-28 lg:pt-36" id="home">
        <div className="lg:grid lg:grid-cols-2 items-center container lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  src="/public/images/avatar-1.jpg"
                  className="img-cover"
                  width={40}
                  height={40}
                  alt=""
                />
              </figure>
              <div className="flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400"></span>
                </span>
                Avaiable For Work
              </div>
            </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              Building Scaleable Websites And Also Learning Through IT!!
            </h2>
            <div className="flex items-center gap-3">
              <ButtonPrimary label="Download CV" icon="download" />
              <ButtonOutline
                label="Scroll Down"
                icon="arrow_downward"
                href="#about"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
              <img
                src="/public/images/hero-banner.png"
                className="w-full"
                width={656}
                height={800}
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
