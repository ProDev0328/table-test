import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "components/Button/Button";
import Typography from "components/Typography/Typography";
import Input from "components/Input/Input";
import Notification from "components/Notification/Notification";
import { ReactComponent as GoogleLogo } from "assets/icons/svg/google-logo.svg";
import { ReactComponent as AppleLogo } from "assets/icons/svg/apple-logo.svg";
import { ReactComponent as UserIcon } from "assets/icons/svg/user-icon.svg";
import { ReactComponent as LockIcon } from "assets/icons/svg/lock-icon.svg";
import api from "config/api";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "",
  });
  let navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      setNotification({
        open: false,
        message: "",
        type: "",
      });
      setLoading(true);
      api
        .post("auth/login", { email, password })
        .then((res) => {
          if (res.status === 200) {
            setNotification({
              open: true,
              message: "Logged in successfully.",
              type: "success",
            });
            const user = { token: res.data.token };
            localStorage.setItem("azleUser", JSON.stringify(user));
            setTimeout(() => {
              navigate("/");
              setLoading(false);
            }, 2000);
          }
        })
        .catch((e) => {
          setNotification({
            open: true,
            message: e?.response?.data?.message,
            type: "error",
          });
          setLoading(false);
        });
    }
  };

  return (
    <div className={styles.loginPage}>
      {notification.open && (
        <Notification
          open={notification.open}
          message={notification.message}
          alert
          alertType={notification.type}
        />
      )}
      <div className={styles.loginPageWrapper}>
        <Typography className={styles.title}>Sign In</Typography>
        <Typography className={styles.subTitle}>
          Welcome back, you've been missed!
        </Typography>
        <div className={styles.loginOptionsWrapper}>
          <Button className={styles.loginOptionsBtn} startIcon={<GoogleLogo />}>
            Sign In with Google
          </Button>
          <Button className={styles.loginOptionsBtn} startIcon={<AppleLogo />}>
            Sign In with Apple ID
          </Button>
        </div>
        <Typography className={styles.or}>OR</Typography>
        <div className={styles.loginFormWrapper}>
          <Input
            type="email"
            placeholder="Your Email"
            icon={<UserIcon />}
            value={email}
            onChange={(e) => setEmail(e?.currentTarget?.value)}
          />
          <br />
          <Input
            type="password"
            placeholder="Password"
            icon={<LockIcon />}
            value={password}
            onChange={(e) => setPassword(e?.currentTarget?.value)}
          />
          <div className={styles.rememberForgetPassword}>
            <FormControlLabel
              classes={{ label: styles.rememberMe }}
              control={<Checkbox />}
              label="Remember Me"
            />
            <a href="#">
              <span>Forgot Password?</span>
            </a>
          </div>
          <Button
            variant="contained"
            color={"primary"}
            className={styles.signinBtn}
            onClick={handleLogin}
            disabled={loading}
          >
            Sign In
          </Button>
          <Typography className={styles.noAccount}>
            Don't have an account yet?
            <span className={styles.signupRedirectLink}>
              <a href="#">Sign Up</a>
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
