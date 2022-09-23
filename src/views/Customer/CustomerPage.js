
import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import { useLocation, useNavigate } from "react-router-dom";

// Material Dashboard 2 PRO React components
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "../../components/MDTypography";

// Material Dashboard 2 PRO React examples
import DataTable from "../../examples/Tables/DataTable";
// Data
import { getInquiries } from "redux/Reducers/InboxReducer/inboxSlice";
import { importMultipleCustomers } from "redux/Reducers/CustomerReducer/customerSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CustomerPage.module.css";
import excel from "../../config/excel"

function CustomerPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { inquiries } = useSelector(({ inbox }) => inbox);
  const { refresher } = useSelector(({ customer }) => customer);
  const importButton = useRef(null);
  useEffect(() => {
    dispatch(getInquiries());
    
  }, []);
  useEffect(() => {
    dispatch(getInquiries());
  },[refresher]);
  
  const customerTableData = {
    columns: [
      { Header: "first name", accessor: "firstName" },
      { Header: "last name", accessor: "lastName" },
      { Header: "phone number", accessor: "number" },
      { Header: "email", accessor: "email" },
      { Header: "city", accessor: "city" },
      { Header: "street", accessor: "street" },
    ],
    rows: inquiries
  }
  const navigateToCustomerAdd = () => {
    navigate("/customerAdd");
  };
  const handleChange = (e) => {
    if(e.target.files) {
      const file = e.target.files[0]
      const fileExt = file.name.split('.').pop().toLocaleLowerCase()
      readFile(file)
      return false
    }
  }
  const readFile = (file) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadstart = e => {
        
    }
    reader.onprogress = e => {
        
    }
    reader.onload = e => {
        const data = e.target.result
        const { header, results } = excel.read(data, 'array')
        const baseColumn = header.map(item => { return { column: item, key: item } })    
        dispatch(importMultipleCustomers(results)) 

    }
  }
  const handleImport = () => {
    importButton.current.click();
  }
  return (
    <MDBox p={5}>
      <input ref={importButton} accept=".csv,.xlsx,.xls" type="file" style={{ display: "none" }} onChange={handleChange} />
      <Card>
        <MDBox p={3} lineHeight={1}  display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h4" fontWeight="medium">
            Customer Table
          </MDTypography>
          <div>
            <MDButton variant="gradient" color="success" sx={{ mr: 1 }} onClick={navigateToCustomerAdd}>
              <Icon sx={{ fontWeight: "bold" }}>add</Icon>
              &nbsp;Add Customer
            </MDButton>
            <MDButton variant="gradient" color="info" onClick={handleImport}>
            <Icon sx={{ fontWeight: "bold" }}>upload</Icon>
              &nbsp;Import Customer
            </MDButton>
          </div>
        </MDBox>
        <DataTable table={customerTableData} canSearch />
      </Card>
    </MDBox>
  );
}

export default CustomerPage;
