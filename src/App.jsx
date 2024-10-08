import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyImage from "./components/MyImage";
import ProjectPerson from "./components/ProjectPerson";

function App() {
  return (
    <div className="bg-purple-100 pb-6">
      <Header />
      <Banner />
      <Course />
      <Banner />
      <ProjectPerson />
      <Contact />
      <Footer />
      <MyImage />
    </div>
  );
}

export default App;
