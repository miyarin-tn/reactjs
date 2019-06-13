import Users from './components/Users';
import ThanhNgoc from './components/ThanhNgoc';
import XuanThinh from './components/XuanThinh';
import MyKieu from './components/MyKieu';
import Contact from './components/Contact';
import Login from './components/Login';
import S404 from './components/404';

const routes = [
  {
    path: "/users",
    name: "Users",
    component: Users,
    routes: [
      {
        path: "/thanh-ngoc",
        name: "ThanhNgoc",
        component: ThanhNgoc
      },
      {
        path: "/xuan-thinh",
        name: "XuanThinh",
        component: XuanThinh
      },
      {
        path: "/my-kieu",
        name: "MyKieu",
        component: MyKieu
      }
    ]
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    name: "404",
    component: S404
  }
]

export default routes;