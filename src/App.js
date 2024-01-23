import Home from "./pages/home/Home";
import CourseList from "./pages/courseList/CourseList"
import CertifList from "./pages/certifList/CertifList"
import SingleCertif from "./pages/singleCertif/SingleCertif";
import SingleCourse from "./pages/singleCourse/SingleCourse";
import NewCertif from "./pages/newCertif/NewCertif";
import NewCourse from "./pages/newCourse/NewCourse";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="courses">
            <Route index element={<CourseList/>}/>
            <Route path=':courseId' element={<SingleCourse/>}/>
            <Route path='new' element={<NewCourse/>}/>
          </Route>
          <Route path="certifs">
            <Route index element={<CertifList/>}/>
            <Route path=':certifId' element={<SingleCertif/>}/>
            <Route path='new' element={<NewCertif/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
