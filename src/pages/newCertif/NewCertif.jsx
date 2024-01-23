import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";

const NewCertif = () => {
  
  const [file,setFile] = useState("");
  
  return (
    <div className="new">
      <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top1">
            <h1 className="title">Add New Certification Session</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img className="newimg" src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="" />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder="Enter certificate name ..."/>
                </div>
                <div className="formImgNew">
                <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                </div>
                <div className="formInput">
                <label>Date</label>
                <input type="text" placeholder="Enter exam date ..."/>
                </div>
                <div className="formInput">
                <label>Place</label>
                <input type="text" placeholder="Enter exam place ..."/>
                </div>
                <div className="formInput">
                <label>Duration</label>
                <input type="text" placeholder="Enter exam duration ..."/>
                </div>
                <div className="formInput">
                <label>Target</label>
                <input type="text" placeholder="Enter targeted team ..."/>
                </div>
                <div className="formInput">
                <label>Languages</label>
                <input type="text" placeholder="Enter exam languages ..."/>
                </div>
                <div className="formInput">
                <label>Description</label>
                <input type="text" placeholder="Enter certificate description ..."/>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewCertif