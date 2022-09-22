import LoginPage from "views/Auth/LoginPage/LoginPage";
import InboxListPage from "views/Inbox/InboxListPage/InboxListPage";
import CustomerPage from "views/Customer/CustomerPage";
import InboxMessageDetailPage from "views/Inbox/InboxMessageDetailPage/InboxMessageDetailPage";

export const authorizedRoutes = [
  {
    title: "Inbox List",
    key: "inbox-list",
    path: "/",
    element: <InboxListPage />,
  },
  {
    title: "Inbox Detail",
    key: "inbox-detail",
    path: "/inbox/:id",
    element: <InboxMessageDetailPage />,
  },
  {
    title: "Customers",
    key: "customers",
    path: "/customers",
    element: <CustomerPage />,
  },
];
export const routes = [
  {
    title: "Login",
    key: "login",
    path: "/login",
    element: <LoginPage />,
  },
  {
    title: "Signup",
    key: "signup",
    path: "/signup",
    element: <div>Signup</div>,
  },
];
