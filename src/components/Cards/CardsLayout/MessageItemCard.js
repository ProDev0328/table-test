import React from "react";
import cx from "classnames";
import moment from "moment";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "components/Typography/Typography";
import { useSelector } from "react-redux";
import { ReactComponent as ChatIcon } from "assets/icons/svg/chat.svg";
import user1 from "assets/img/user-female-1.jpg";
import user2 from "assets/img/user-male-1.jpg";
import styles from "./CardsLayout.module.css";

const MessageItemCard = ({ className, children, type, message, ...other }) => {
  const { body, createdDate } = message;
  const { customer } = useSelector(({ inbox }) => inbox);

  const addClass = (type) => {
    if (type === "received") {
      return styles.receivedMessageWrapper;
    } else if (type === "sent") {
      return styles.sentMessageWrapper;
    } else {
      return "";
    }
  };

  return (
    <div className={cx(styles.messageItemWrapper, addClass(type))}>
      <div
        className={cx(styles.messageItemCardWrapper, {
          [styles.receivedWrapper]: type === "received",
          [styles.sentWrapper]: type === "sent",
        })}
      >
        <div className={styles.cardContent}>
          <Typography className={styles.messageTimestamp}>
            <ChatIcon />
            {`${
              type === "received" ?
                (customer ? customer.firstName : "Customer") :
                "I"
            } sent a chat - ${moment(createdDate).fromNow()}`}
          </Typography>
          <div
            className={cx(styles.messageItemCard, className ? className : "")}
            {...other}
          >
            <div className={styles.messageContent}>
              <Typography className={styles.message}>{body}</Typography>
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <Avatar
          src={type === "received" ? user1 : user2}
          className={styles.userAvatar}
          aria-label="recipe"
        >
          R
        </Avatar>
      </div>
    </div>
  );
};

export default MessageItemCard;
