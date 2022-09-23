
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

// Material Dashboard 2 PRO React examples
import DataTable from "../../examples/Tables/DataTable";
// Data
import dataTableData from "./dataTableData";
import { getInquiries } from "redux/Reducers/InboxReducer/inboxSlice";
import { useSelector, useDispatch } from "react-redux";

function CustomerPage() {

  const dispatch = useDispatch();
  const { inquiries } = useSelector(({ inbox }) => inbox);
  console.log("inquery--->", inquiries)
  useEffect(() => {
    dispatch(getInquiries());
  }, []);
  
  const customerTableData = {
    columns: [
      { Header: "first name", accessor: "firstName", width: "20%" },
      { Header: "last name", accessor: "lastName", width: "25%" },
      { Header: "phone number", accessor: "number" },
      { Header: "email", accessor: "email" },
      { Header: "city", accessor: "city" },
      { Header: "street", accessor: "street" },
    ],
    rows: inquiries
  }
  return (
      <MDBox p={5}>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Customer Table
            </MDTypography>
          </MDBox>
          <DataTable table={customerTableData} canSearch />
        </Card>
      </MDBox>
  );
}

export default CustomerPage;
