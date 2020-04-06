import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "مدیریت شرکت ها و نمادها",
    navbarName: "مدیریت شرکت ها و نماد ها",
    icon: Dashboard,
    component: TableList
    
  },
  {
    path: "/user",
    sidebarName: "پروفایل کاربری",
    navbarName: "پروفایل کاربری",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/notifications",
    sidebarName: "اعلانات",
    navbarName: "اعلانات",
    icon: Notifications,
    component: NotificationsPage
  },
/*{
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: DashboardPage
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
 */
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
