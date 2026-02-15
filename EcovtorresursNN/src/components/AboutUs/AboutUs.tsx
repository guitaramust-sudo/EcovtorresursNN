import "./AboutUs.css";
import AboutUsImg1 from "../../images/about-us-1.jpg";

import AboutUsImg2 from "../../images/about-us-2.jpg";

const AboutUs = () => {
  return (
    <section className="about-us container">
      <h2 className="about-us-title h2" id="about">
        О компании
      </h2>
      <div className="about-us-grid">
        <div className="about-us-info">
          <span>
            <p>
              <span className="strong-text">Строительная компания</span> ООО
              «Эковторресурс»{" "}
              <span className="strong-text">уже более 7 лет</span> на рынке (с
              2017 года) успешно выполняет{" "}
              <span className="strong-text">полный комплекс</span>
              ремонтно-строительных и монтажных работ в городе Нижнем Новгороде
              и в Нижегородской области с гарантией и с допуском СРО к видам
              работ по строительству, реконструкции, капитальному ремонту,
              оказывающим влияние на безопасность объектов капитального
              строительства.
            </p>
            <p>
              <span className="strong-text">
                Качество, Надежность и Доверие
              </span>{" "}
              - это основные критерии, из которых построены основные принципы
              работы строительной компании ООО «Эковторресурс».
            </p>
            <p>
              Наша компания занимает одну из{" "}
              <span className="strong-text">лидирующих позиций</span>{" "}
              перспективных и динамично развивающихся компаний города Нижнего
              Новгорода.
            </p>
            <p>
              Мы имеем богатый опыт работы, достаточную материально-техническую
              базу и квалифицированный персонал. Качество выполняемых работ
              отвечает требованиям действующей нормативной и технической
              документации. Широкое использование накопленного опыта позволяет
              нашей компании всегда обеспечивать выполнение всех строительных
              работ и ввод объекта в эксплуатацию в срок.{" "}
              <span className="strong-text">
                Добросовестное отношение и качественное выполнение
              </span>{" "}
              всех обязательств перед заказчиком – основные преимущества нашей
              строительной компании.
            </p>
          </span>
        </div>
        <div className="image-container">
          <img src={AboutUsImg1} alt="" className="about-us-img" />
        </div>
        <div className="image-container">
          <img src={AboutUsImg2} alt="" className="about-us-img" />
        </div>
        <div className="about-us-quote">
          <div className="about-us-info about-us-quote-text">
            <span>
              <span className="strong-text">ООО «Эковторресурс»</span> - это
              сплоченная команда высокопрофессиональных квалифицированных
              специалистов, способных решить любые поставленные перед ними
              задачи. Во главе компании стоят профессионалы с большим
              управленческим опытом, которые обеспечивают стабильное развитие и
              существование компании.
            </span>
          </div>
          <div className="about-us-card">
            <h5 className="about-us-director-name">
              Агапов Виталий Анатольевич{" "}
            </h5>
            <div className="about-us-info">
              <span>Генеральный директор</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
