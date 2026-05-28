import "./WorkExamples.css";
import { useRef } from "react";

// Импорты картинок (без изменений)
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

  const scroll = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (container && container.children.length > 0) {
      const item = container.children[0] as HTMLElement;
      const itemWidth = item.offsetWidth;
      const gap = parseInt(window.getComputedStyle(container).gap) || 0;

      // Шаг скролла = ширина одной карточки + расстояние между ними
      const scrollAmount = itemWidth + gap;

      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="slider-wrapper">
      {title && <h3 className="slider-title">{title}</h3>}
      <div className="examples-photo-slider">
        <button className="left-arrow arrow" onClick={() => scroll("left")}>
          ←
        </button>
        <div className="examples-photo-container" ref={sliderRef}>
          {children}
        </div>
        <button className="right-arrow arrow" onClick={() => scroll("right")}>
          →
        </button>
      </div>
    </div>
  );
};

const PhotoSlider = () => {
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
    <BaseSlider title="">
      {workImages.map((image, index) => (
        <div className="examples-photo-slider-element" key={index}>
          <img src={image} alt={`Фото работы ${index + 1}`} loading="lazy" />
        </div>
      ))}
    </BaseSlider>
  );
};

const WorkExamples = () => {
  return (
    <section className="work-examles">
      <div className="container">
        <h2 className="work-examples-title" id="projects">
          Примеры выполняемых работ:
        </h2>

        <PhotoSlider />

        <h3 className="work-examples-footer">
          С 2017 года можно с уверенностью сказать, что ООО «Эковторресурс»
          является стабильной компанией.
        </h3>
      </div>
    </section>
  );
};

export default WorkExamples;
