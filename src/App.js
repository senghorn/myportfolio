import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Project from "./routes/project/project.component";
import SignIn from "./routes/sign-in/sign-in.component";
import TAPortal from "./routes/ta-portal/ta-portal.components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="project/:id" element={<Project />} />
        <Route path="taportal" element={<TAPortal/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};  

export default App;
