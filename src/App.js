import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import { useParams } from 'react-router-dom';

const Shop = () => {
  const { id } = useParams();
  return (
    <div>
      This is the project page for item with id: {id}
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="project/:id" element={<Shop />} />
      </Route>
    </Routes>
  );
};  

export default App;
