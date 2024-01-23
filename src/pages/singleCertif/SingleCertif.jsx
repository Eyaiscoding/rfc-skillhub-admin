import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const SingleCertif = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="main">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
             <img
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="itemImg"
             />
             <div className="details">
                <h1 className="itemTitle">Certificate Name</h1>
                <div className="detailItem">
                  <span className="itemKey">Date:</span>
                  <span className="itemValue">Test1</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Place:</span>
                  <span className="itemValue">Test1</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Duration:</span>
                  <span className="itemValue">Test1</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Target:</span>
                  <span className="itemValue">Test1</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Languages:</span>
                  <span className="itemValue">Test1</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">Test1</span>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleCertif