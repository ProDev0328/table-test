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
import styles from "./InboxListPage.module.css";

const InboxListPage = () => {
  const [value, setValue] = useState(0);
  const { inquiries } = useSelector(({ inbox }) => inbox);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleGoToMessage = (message) => {
    navigate(`/inbox/${message.id}`);
  };

  useEffect(() => {
    dispatch(getInquiries());

    if (window.socket) {
      window.socket.removeListener("new_message");
      window.socket.on("new_message", (sms) => {
        dispatch(getInquiries());
      });
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>My Inbox</h1>
        <div className={styles.tabsWrapper}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Open 5" index={0} />
            <Tab label="Waiting 4" index={1} />
            <Tab label="Closed" index={2} />
          </Tabs>
          <div className={styles.navigationBtnWrapper}>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="label"
              className={styles.navigationBtn}
            >
              <KeyboardArrowUpIcon color="secondary" />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="label"
              className={styles.navigationBtn}
            >
              <KeyboardArrowDownIcon style={{ color: "gray" }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={styles.tabsPanelWrapper}>
        <TabPanel value={value} index={0}>
          {inquiries.map((message) => (
            <InboxMessageCard
              message={message}
              key={message.id}
              handleCardClick={() => handleGoToMessage(message)}
            />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
      {notification.open && (
        <Notification
          open={notification.open}
          message={notification.message}
          alert
          alertType={notification.type}
        />
      )}
    </Container>
  );
};

export default InboxListPage;
