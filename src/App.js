import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Project from "./routes/project/project.component";
import TAPortal from "./routes/ta-portal/ta-portal.components";
import AboutMe from "./routes/about-me/about-me.components";
import Capstone from "./routes/capstone/capstone.components";
import LifeStyle from "./routes/lifestyle/lifestyle.components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="project/:id" element={<Project />} />
        <Route path="taportal" element={<TAPortal/>}/>
        <Route path="aboutme" element={<AboutMe/>}/>
        <Route path="capstone" element={<Capstone/>}/>
        <Route path="lifestyle" element={<LifeStyle/>}/>
      </Route>
    </Routes>
  );
};  

export default App;
