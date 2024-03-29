import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";

const NewCourse = () => {
  
  const [file,setFile] = useState("");
  
  return (
    <div className="new">
      <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top1">
            <h1 className="title">Add New Course</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img className="newimg" src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="" />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                <label>Title</label>
                <input type="text" placeholder="Enter course title ..."/>
                </div>
                <div className="formImgNew">
                <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                </div>
                <div className="formInput">
                <label>Level</label>
                <input type="text" placeholder="Enter course level ..."/>
                </div>
                <div className="formInput">
                <label>Description</label>
                <input type="text" placeholder="Enter course description ..."/>
                </div>
                <div className="formInput">
                <label>Topics</label>
                <input type="text" placeholder="Enter course topics ..."/>
                </div>
                <div className="formInput">
                <label>Duration</label>
                <input type="text" placeholder="Enter course duration ..."/>
                </div>
                <div className="formInput">
                <label>Languages</label>
                <input type="text" placeholder="Enter course languages ..."/>
                </div>
                <div className="formInput">
                <label>Target</label>
                <input type="text" placeholder="Enter targeted team ..."/>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewCourse