import ActivityAreas from "../ActivityAreas/ActivityAreas";
import Hero from "../hero/hero";
import "../../styles/utils.css";
import "./HomePage.css";
import CompanyActivities from "../CompanyActivities/CompanyActivities";
import RequestSection from "../RequestSection/RequestSection";
const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <ActivityAreas />
      <CompanyActivities />
      <RequestSection />
    </div>
  );
};

export default HomePage;
