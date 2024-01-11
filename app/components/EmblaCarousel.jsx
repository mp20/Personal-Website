"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../components/css/EmblaCarousel.css";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="embla">
      <div className="emblal__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src="/my-project/sc1.png" alt="first" />
          </div>
          <div className="embla__slide">
            <img src="/my-project/sc2.png" alt="first" />
          </div>
          <div className="embla__slide">
            <img src="/my-project/sc3.png" alt="first" />
          </div>
          <div className="embla__slide">
            <img src="/my-project/sc4.png" alt="first" />
          </div>
          <div className="embla__slide">
            <img src="/my-project/sc5.png" alt="first" />
          </div>
        </div>
      </div>
      <button className="embla__next" onClick={scrollNext}>
        <img src="/chevron-right.svg" alt="" />
      </button>
      <button className="embla__prev" onClick={scrollPrev}>
        <img src="/chevron-left.svg" alt="" />
      </button>
    </div>
  );
};
