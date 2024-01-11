"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../components/css/EmblaCarousel.css";

export const EmblaCarousel = ({ images, video }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {video ? (
            <div className="embla__slide">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/evTtKJKR1rQ?si=7NN2yZVJ2_tgj1d8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          ) : (
            images.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img src={image} alt={index} />
              </div>
            ))
          )}
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
