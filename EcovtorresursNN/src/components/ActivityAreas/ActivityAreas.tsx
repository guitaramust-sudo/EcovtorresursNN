import "./ActivityAreas.css";
import activity1 from "../../images/activity-1.jpg";
import activity2 from "../../images/activity-2.jpg";

import activity3 from "../../images/activity-3.jpg";

const ActivityAreas = () => {
  return (
    <section className="activity-areas container">
      <h2 className="activity-areas-title h2">
        Основные направлениями деятельности компании ООО «Эковторресурс»
        являются:
      </h2>
      <div className="activity-areas-examples">
        <div className="activity-card">
          <img src={activity1} alt="идф" className="activity-bg" />
          <h2 className="activity-info h2">
            Жилищное, коммерческое и промышленное строительство.
          </h2>
        </div>
        <div className="activity-card">
          <img src={activity2} alt="" className="activity-bg" />
          <h2 className="activity-info h2">
            Монтаж любых строительных конструкций.
          </h2>
        </div>
        <div className="activity-card">
          <img src={activity3} alt="" className="activity-bg" />
          <h2 className="activity-info h2">Строительный контроль объектов.</h2>
        </div>
      </div>
    </section>
  );
};

export default ActivityAreas;
