import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMessages } from "redux/Reducers/InboxReducer/inboxSlice";
import { scrollToBottom } from "utils/helpers/helpers";
import PastPurchasesCard from "components/Cards/PastPurchasesCard/PastPurchasesCard";
import DetailCard from "components/Cards/DetailCard/DetailCard";
import MessageItemCard from "components/Cards/CardsLayout/MessageItemCard";
import InboxFooter from "components/InboxFooter/InboxFooter";
import Notification from "components/Notification/Notification";
import styles from "./InboxMessageDetailPage.module.css";

const InboxMessageDetailPage = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector(({ inbox }) => inbox);
  const location = useLocation();
  const scrollContainer = useRef(null);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "",
  });

  let userId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getMessages(userId));
    scrollToBottom(scrollContainer);

    console.log("interaction page => useEffect", window.socket);
    // if (window.socket) {
    //   window.socket.removeListener("new_message");
    //   window.socket.on("new_message", (sms) => {
    //     dispatch(getMessages(userId));
    //   });
    // }
  }, []);

  useEffect(() => {
    scrollToBottom(scrollContainer);
  }, [messages]);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.conversationContainer} ref={scrollContainer}>
          {messages?.map((message) => (
            <MessageItemCard
              key={message.sid || message.id}
              message={message}
              type={message.type ? "received" : "sent"}
            />
          ))}
        </div>
        <div className={styles.userInfoSidebar}>
          <div className={styles.userInfoWrapper}>
            <PastPurchasesCard style={{ marginTop: 16 }} />
            <DetailCard />
          </div>
        </div>
      </div>
      <InboxFooter />
      {notification.open && (
        <Notification
          open={notification.open}
          message={notification.message}
          alert
          alertType={notification.type}
        />
      )}
    </div>
  );
};

export default InboxMessageDetailPage;
