import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WifiIcon from "@mui/icons-material/Wifi";
import MessageIcon from "@mui/icons-material/Message";
import Card from "components/Cards/CardsLayout/Card";
import styles from "./InboxMessageCard.module.css";
import moment from "moment";

const InboxMessageCard = ({ message, handleCardClick }) => {
  const {
    firstName = "First",
    lastName = "Last",
    sms,
    email,
    avatar,
    street = "Street",
    city = "City",
    zipCode = "Zipcode",
    number,
    createdDate,
    updatedAt,
    dueDate,
  } = message;
  const type = sms[0].type;
  const queryType = 3;
  const name = `${firstName} ${lastName}`;
  const dueDays = moment(dueDate).diff(moment(), "day");
  const address = `${street} ${city} ${zipCode}`;

  const Icon = () => {
    if (queryType === 1) {
      // email
      return <MailOutlineIcon />;
    } else if (queryType === 2) {
      // call
      return <PhoneInTalkIcon />;
    } else if (queryType === 3) {
      // sms
      return <WifiIcon />;
    } else if (queryType === 4) {
      // facebook message
      return <MessageIcon />;
    } else {
      return null;
    }
  };

  const showTypeTitle = () => {
    if (queryType === 1) {
      // email
      return "Email";
    } else if (queryType === 2) {
      // call
      return "Call";
    } else if (queryType === 3) {
      // sms
      return "SMS";
    } else if (queryType === 4) {
      // facebook message
      return "Facebook Message";
    } else {
      return null;
    }
  };

  return (
    <Card className={styles.inboxListMessageCard} onClick={handleCardClick}>
      <div className={styles.inboxCardContent}>
        <div className={styles.userMessageInfo}>
          <CardHeader
            classes={{
              root: styles.cardHeader,
              title: styles.title,
              avatar: styles.cardAvatar,
              subheader: styles.subheader,
            }}
            avatar={
              <Avatar classes={{ root: styles.userAvatar }} src={avatar}>
                {firstName?.charAt(0)} {lastName?.charAt(0)}
              </Avatar>
            }
            title={name}
            subheader={
              <>
                <SubHeader title={email} />
                <SubHeader title={number} />
                <SubHeader title={address} />
              </>
            }
          />
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={styles.divider}
        />
        <div className={styles.userMessageDetails}>
          <div className={styles.messageInfoHeader}>
            <h3 className={styles.title}>{type ? "Incoming" : "Sent"} {showTypeTitle()}</h3>
            <div className={styles.durationWrapper}>
              <h4 className={styles.dueDuration}>{`Due in ${dueDays} days`}</h4>
              <Icon />
            </div>
          </div>
          <div className={styles.messageContent}>
            <p className={styles.message}>{sms[0].body}</p>
            <p className={styles.timeStamp}>
              {`Updated ${moment(
                updatedAt
              ).fromNow()}, Support, Created ${moment(createdDate).fromNow()}`}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InboxMessageCard;

const SubHeader = ({ title, ...other }) => {
  return (
    <>
      <p className={styles.subheader} {...other}>
        {title}
      </p>
    </>
  );
};
