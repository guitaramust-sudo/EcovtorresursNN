import "./CompanyActivities.css";

const CompanyActivities = () => {
  return (
    <section className="company-activities container">
      <h2 className="company-activities-title h2">
        Наша организация выполняет:
      </h2>
      <div className="activities-grid">
        <div className="activity-item">
          <h4 className="activity-text h4">
            Общестроительные, каменные, бетонные, изоляционные, кровельные,
            фасадные, отделочные и сопутствующие работы.
          </h4>
        </div>
        <div className="activity-item">
          <h4 className="activity-text h4">
            Строительство, ремонт (капитальный, текущий, косметический) и
            реконструкция общественных, коммерческих и промышленных зданий и
            сооружений.
          </h4>
        </div>
        <div className="activity-item">
          <h4 className="activity-text h4">
            Выполнение функций генерального подрядчика и заказчика-застройщика.
          </h4>
        </div>
        <div className="activity-item">
          <h4 className="activity-text h4">
            Ремонт и замена ЦО, ГВС, ХВС, ВО.
          </h4>
        </div>
        <div className="activity-item">
          <h4 className="activity-text h4">Электромонтажные работы.</h4>
        </div>
        <div className="activity-item">
          <h4 className="activity-text h4">
            Комплектация материалами и собственная доставка.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default CompanyActivities;
