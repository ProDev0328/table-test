import React, { useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { postMessage } from "redux/Reducers/InboxReducer/inboxSlice";
import Typography from "components/Typography/Typography";
import Img1 from "assets/img/user-male-1.jpg";
import Img2 from "assets/img/user-female-1.jpg";
import styles from "./InboxFooter.module.css";

const InboxFooter = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { customer } = useSelector(({ inbox }) => inbox);

  const handleValueChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleSendMessage = (e) => {
    if (value && e.keyCode === 13 && customer) {
      dispatch(postMessage({ to: customer.number, body: value }));
      setValue("");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <CardHeader
          avatar={
            <AvatarGroup max={2}>
              <Avatar
                className={styles.avatarPrimary}
                alt="user image"
                src={Img2}
              />
              <Avatar
                className={styles.avatarSecondary}
                alt="user image"
                src={Img1}
              />
            </AvatarGroup>
          }
          classes={{
            root: styles.cardHeader,
            avatar: styles.cardHeaderAvatar,
            title: styles.cardHeaderTitle,
            subheader: styles.cardHeaderSubheader,
          }}
          title="Assigned"
          subheader="VIP Response Team--Michele Smith"
        />
      </div>
      <div className={styles.inputWrapper}>
        <IconButton
          className={styles.addAttachmentIcon}
          aria-label="upload"
          component="label"
        >
          <AddIcon />
        </IconButton>
        <input
          className={styles.replyInput}
          type="text"
          placeholder="Reply with an SMS"
          onKeyDown={handleSendMessage}
          value={value}
          onChange={handleValueChange}
        />
      </div>
      <div>
        <Typography className={styles.topic}>Topic</Typography>
        <Typography className={styles.topicValue}>Upgrade</Typography>
      </div>
      <div>
        <IconButton className={styles.expandBtn} component="label">
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InboxFooter;
