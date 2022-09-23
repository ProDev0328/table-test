
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

// Material Dashboard 2 PRO React examples
import DataTable from "../../examples/Tables/DataTable";
// Data
import dataTableData from "./dataTableData";

function DataTables() {
  return (
      <MDBox pt={6} pb={3}>
        {/* <MDBox mb={3}>
          <Card>
            <MDBox p={3} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </MDTypography>
              <MDTypography variant="button" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </MDTypography>
            </MDBox>
            <DataTable table={dataTableData} />
          </Card>
        </MDBox>  */}
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Datatable Search
            </MDTypography>
            <MDTypography variant="button" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </MDTypography>
          </MDBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </MDBox>
  );
}

export default DataTables;
