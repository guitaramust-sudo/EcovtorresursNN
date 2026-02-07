import "./WorkExamples.css";
import { useRef, useEffect, useState } from "react";

const BaseSlider = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollStep, setScrollStep] = useState(430);

  useEffect(() => {
    const updateScrollStep = () => {
      if (!sliderRef.current) return;

      const firstElement = sliderRef.current.children[0] as HTMLElement;
      if (firstElement) {
        const elementWidth = firstElement.offsetWidth;
        const containerStyle = getComputedStyle(sliderRef.current);
        const gapValue = containerStyle.gap;
        const gap = parseInt(gapValue) || 30;
        const step = elementWidth + gap;
        setScrollStep(step);
      }
    };

    updateScrollStep();
    window.addEventListener("resize", updateScrollStep);
    return () => window.removeEventListener("resize", updateScrollStep);
  }, []);

  const handleRightArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: scrollStep,
        behavior: "smooth",
      });
    }
  };

  const handleLeftArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -scrollStep,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="slider-wrapper">
      {title && <h3 className="slider-title">{title}</h3>}
      <div className="examples-photo-slider">
        <div className="left-arrow arrow" onClick={handleLeftArrow}>
          ←
        </div>
        <div className="examples-photo-container" ref={sliderRef}>
          {children}
        </div>
        <div className="right-arrow arrow" onClick={handleRightArrow}>
          →
        </div>
      </div>
    </div>
  );
};

const PhotoSlider = () => {
  return (
    <BaseSlider title="Фотографии работ">
      <div className="examples-photo-slider-element">
        <img src="" alt="Фото работы 1" />
      </div>
      <div className="examples-photo-slider-element">
        <img src="" alt="Фото работы 2" />
      </div>
      <div className="examples-photo-slider-element">
        <img src="" alt="Фото работы 3" />
      </div>
      <div className="examples-photo-slider-element">
        <img src="" alt="Фото работы 4" />
      </div>
      <div className="examples-photo-slider-element">
        <img src="" alt="Фото работы 5" />
      </div>
      <div className="examples-photo-slider-element">
        <img src="" alt="Фото работы 6" />
      </div>
      <div className="examples-photo-slider-element">
        <img src="" alt="Фото работы 7" />
      </div>
    </BaseSlider>
  );
};

const VideoSlider = () => {
  return (
    <BaseSlider title="Видео работ">
      <div className="examples-video-slider-element">
        <video controls>
          <source src="" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <div className="examples-video-slider-element">
        <video controls>
          <source src="" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <div className="examples-video-slider-element">
        <video controls>
          <source src="" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <div className="examples-video-slider-element">
        <video controls>
          <source src="" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <div className="examples-video-slider-element">
        <video controls>
          <source src="" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <div className="examples-video-slider-element">
        <video controls>
          <source src="" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </BaseSlider>
  );
};

const WorkExamples = () => {
  return (
    <section className="container work-examles">
      <h2 className="h2 work-examples-title">Примеры выполняемых работ:</h2>

      {/* Фото слайдер */}
      <PhotoSlider />

      {/* Видео слайдер */}
      <VideoSlider />
      <h3 className="work-examples-footer">
        С 2017 года можно с уверенностью сказать, что ООО «Эковторресурс»
        является стабильной компанией.{" "}
      </h3>
    </section>
  );
};

export default WorkExamples;
