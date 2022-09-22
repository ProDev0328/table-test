import React from "react";
import Divider from "@mui/material/Divider";
import SidebarCard from "../CardsLayout/SidebarCard";
import Typography from "components/Typography/Typography";
import PurchaseItem from "./PurchaseItem";
import productImg from "assets/img/product.jpg";
import giftcardImg from "assets/img/gift-card.png";
import styles from "./PastPurchasesCard.module.css";

const PastPurchasesCard = () => {
  return (
    <SidebarCard style={{ marginTop: 16 }}>
      <h1 className={styles.cardTitle}>Past Purchases</h1>
      <div className={styles.cardHeader}>
        <Typography>Jan 4, 2022</Typography>
        <Typography className={styles.headerItemTitle}>Online</Typography>
        <Typography className={styles.headerItemTitle}>2 items</Typography>
        <Typography className={styles.headerItemTitle}>$225.00</Typography>
      </div>
      <Divider className={styles.divider} />
      <PurchaseItem
        title="Women's Gum Soles"
        itemStyle="Mocha, Size 10"
        category="Shoes"
        order={"#345343466"}
        image={productImg}
      />
      <PurchaseItem
        title="Gift Card"
        itemStyle="Gift Card"
        category="Gift Card"
        order={"#345345646"}
        image={giftcardImg}
      />
      <Divider className={styles.dividerBottom} />
      <Typography className={styles.loadMore}>
        <a href="#">+4 More</a>
      </Typography>
    </SidebarCard>
  );
};

export default PastPurchasesCard;
