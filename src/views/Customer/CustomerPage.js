import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextField from '@mui/material/TextField';
import TabPanel from "components/Tabs/TabPanel.js";
import Tab from "components/Tabs/Tab.js";
import Tabs from "components/Tabs/Tabs.js";
import { getInquiries } from "redux/Reducers/InboxReducer/inboxSlice";
import { scrollToBottom } from "utils/helpers/helpers";
import Notification from "components/Notification/Notification";
import InboxMessageCard from "components/Cards/InboxMessageCard/InboxMessageCard.js";
import styles from "./CustomerPage.module.css";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const CustomerPage = () => {
  const [value, setValue] = useState(0);
  const { inquiries } = useSelector(({ inbox }) => inbox);
  const [key, setKey] = useState('');
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getInquiries());
  }, []);

  return (
    <Container maxWidth="xl">
      
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Customers</h1>
      </div>
      <div className={styles.searchContent}>
        <TextField id="search" value={key} onChange={(e) => {setKey(e.target.value)}} label="Search" variant="outlined" />
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={inquiries.filter(itm => { return (itm.firstName.toLocaleLowerCase().includes(key.toLocaleLowerCase()) || itm.lastName.toLocaleLowerCase().includes(key.toLocaleLowerCase())) })}
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