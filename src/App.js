import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import CourseList from "./pages/courseList/CourseList"
import CertifList from "./pages/certifList/CertifList"
import Single from "./pages/single/Single";
import New from "./pages/new/New";
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
            <Route path=':courseId' element={<Single/>}/>
            <Route path='new' element={<New/>}/>
          </Route>
          <Route path="certifications">
            <Route index element={<CertifList/>}/>
            <Route path=':certifId' element={<Single/>}/>
            <Route path='new' element={<New/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
