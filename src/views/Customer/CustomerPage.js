import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TabPanel from "components/Tabs/TabPanel.js";
import Tab from "components/Tabs/Tab.js";
import Tabs from "components/Tabs/Tabs.js";
import { getInquiries } from "redux/Reducers/InboxReducer/inboxSlice";
import { scrollToBottom } from "utils/helpers/helpers";
import Notification from "components/Notification/Notification";
import InboxMessageCard from "components/Cards/InboxMessageCard/InboxMessageCard.js";
import styles from "./CustomerPage.module.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



const CustomerPage = () => {
  const [value, setValue] = useState(0);
  const { inquiries } = useSelector(({ inbox }) => inbox);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getInquiries());
  // }, []);

  return (
    <Container maxWidth="xl">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </Container>
  );
};

export default CustomerPage;