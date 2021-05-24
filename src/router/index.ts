// src/router->index.js  (配置路由映射)
//import { Redirect } from "react-router-dom";
import Discover from "@/pages/Discover";
import Mine from "@/pages/Mine";
import Friend from "@/pages/Friend";

const routes = [
  // {
  //   path: '/',
  //   redirect: '/discover',
  //   component: Discover
  // },
  {
    path: "/discover",
    component: Discover
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/friend",
    component: Friend
  },
];

export default routes;
