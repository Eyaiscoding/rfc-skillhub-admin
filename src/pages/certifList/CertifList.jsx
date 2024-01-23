import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import CertifDatatable from "../../components/certifDatatable/CertifDatatable"





const CertifList = () => {
  return (
    <div className="list">
     <Sidebar />
     <div className="listContainer">
      <Navbar/>
      <CertifDatatable/>
     </div>
    </div>
  )
}

export default CertifList
