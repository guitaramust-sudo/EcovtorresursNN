import ActivityAreas from "../ActivityAreas/ActivityAreas";
import Hero from "../hero/hero";
import "../../styles/utils.css";
import "./HomePage.css";
import CompanyActivities from "../CompanyActivities/CompanyActivities";
import RequestSection from "../RequestSection/RequestSection";
import AboutUs from "../AboutUs/AboutUs";
import WorkExamples from "../WorkExamples/WorkExamples";
import AcceptingFormSection from "../AcceptingFormSection/AcceptingFormSection";
import Footer from "../Footer/Footer";
const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <ActivityAreas />
      <CompanyActivities />
      <RequestSection />
      <AboutUs />
      <WorkExamples />
      <AcceptingFormSection />
      <Footer />
    </div>
  );
};

export default HomePage;
