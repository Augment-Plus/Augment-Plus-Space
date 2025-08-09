const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        name: "home",
        path: "home",
        component: () => import("../pages/Home.vue"),
      },
      {
        name: "admin",
        path: "admin",
        component: () => import("../pages/Admin.vue"),
      },
    ],
  },
  {
    path: "/register/domain",
    name: "register-domain",
    component: () => import("../pages/Register/Domain.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../pages/404.vue"),
  },
];

export default routes;
