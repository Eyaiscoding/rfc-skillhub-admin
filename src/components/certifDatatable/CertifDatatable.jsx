import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../certifdatatablesource";

const CertifDatatable = () => {
  return (
    <div className="datatable">
<DataGrid
        rows={userRows}
        columns={userColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default CertifDatatable;
