/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative overflow-hidden">
      {/* Inline Keyframes for Animation */}
      <style>
        {`
          @keyframes bounceOnce {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0);
            }
          }
          .animate-bounceOnce {
            animation: bounceOnce 1s ease-in-out;
          }
        `}
      </style>

      {/* Image with Animation */}
      <img
        ref={observerRef}
        className={`w-[250px] h-[400px] sm:w-[300px] sm:h-[450px] lgl:w-[350px] lgl:h-[520px] z-10 relative object-cover object-top ${
          isInView ? "animate-bounceOnce" : ""
        }`}
        src={bannerImg}
        alt="bannerImg"
      />

      {/* Gradient Box */}
      <div className="absolute bottom-6 w-[250px] h-[400px] sm:w-[300px] sm:h-[450px] lgl:w-[350px] lgl:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
