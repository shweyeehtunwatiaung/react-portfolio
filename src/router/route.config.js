import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import HomePage from "../Pages/HomePage";
import PortfoliosPage from "../Pages/PortfoliosPage";
import ResumePage from "../Pages/ResumePage";
import NotFound from "../Pages/ResumePage";
import BlogsPage from '../Pages/BlogsPage'

const Routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/resume",
    component: ResumePage,
  },
  // {
  //   path: "/portfolios",
  //   component: PortfoliosPage,
  // },
  // {
  //   path: "/blogs",
  //   component: BlogsPage,
  // },
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default Routes