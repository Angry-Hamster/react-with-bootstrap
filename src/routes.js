//? Statical import

// ! war 1
// import { Home, About, Contacts } from "./pages";
// export default [
//   { path: "/", exact: true, component: Home },
//   { path: "/about", exact: true, component: About },
//   { path: "/contacts", exact: true, component: Contacts },
// ];

// ! war 2
// import asyncComponent from "./components/hoc/asyncComponent";

// export default [
//   {
//     path: "/",
//     exact: true,
//     component: asyncComponent(() => {
//       return import("./pages/Home");
//     }),
//   },
//   {
//     path: "/about",
//     exact: true,
//     component: asyncComponent(() => {
//       return import("./pages/About");
//     }),
//   },
//   {
//     path: "/contacts",
//     exact: true,
//     component: asyncComponent(() => {
//       return import("./pages/Contacts");
//     }),
//   },
// ];

// ! war 3
import { lazy } from "react";

export default [
  {
    path: "/",
    exact: true,
    component: lazy(() => {
      return import("./pages/Home");
    }),
  },
  {
    path: "/about",
    exact: true,
    component: lazy(() => {
      return import("./pages/About");
    }),
  },
  {
    path: "/contacts",
    exact: true,
    component: lazy(() => {
      return import("./pages/Contacts");
    }),
  },
];