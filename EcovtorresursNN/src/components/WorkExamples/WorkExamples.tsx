import "./WorkExamples.css";
import { useRef, useEffect, useState } from "react";

// Импортируем 15 картинок
import work1 from "../../images/work-1.jpg";
import work2 from "../../images/work-2.jpg";
import work3 from "../../images/work-3.jpg";
import work4 from "../../images/work-4.jpg";
import work5 from "../../images/work-5.jpg";
import work6 from "../../images/work-6.jpg";
import work7 from "../../images/work-7.jpg";
import work8 from "../../images/work-8.jpg";
import work9 from "../../images/work-9.jpg";
import work10 from "../../images/work-10.jpg";
import work11 from "../../images/work-11.jpg";
import work12 from "../../images/work-12.jpg";
import work13 from "../../images/work-13.jpg";
import work14 from "../../images/work-14.jpg";
import work15 from "../../images/work-15.jpg";

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
  // Массив с импортированными картинками
  const workImages = [
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
    work8,
    work9,
    work10,
    work11,
    work12,
    work13,
    work14,
    work15,
  ];

  return (
    <BaseSlider title="Фотографии работ">
      {workImages.map((image, index) => (
        <div className="examples-photo-slider-element" key={index}>
          <img src={image} alt={`Фото работы ${index + 1}`} />
        </div>
      ))}
    </BaseSlider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

      {/* Фото слайдер с 15 картинками */}
      <PhotoSlider />

      <h3 className="work-examples-footer">
        С 2017 года можно с уверенностью сказать, что ООО «Эковторресурс»
        является стабильной компанией.{" "}
      </h3>
    </section>
  );
};

export default WorkExamples;
