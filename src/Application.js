import React, { Suspense, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

// import Home from "../pages/Home";
import HeaderMenu from "./pages/HeaderMenu";

import NoGuard from "./routes/Guards/NoGuards";
import AuthGuards from "./routes/Guards/AuthGuards";
import Login from "./pages/PublicPages/Login";

import { createBrowserHistory } from "history";
import HeaderAuthMenu from "./pages/HeaderAuthMenu";

const history = createBrowserHistory();
const About = React.lazy(() => import("./pages/PrivatePages/UseCallBackAbout.js"));
const UsersComponent = React.lazy(() => import("./pages/PrivatePages/UsersComponent"));

const Contact = React.lazy(() => import("./pages/PrivatePages/UseMemo.js"));

const AboutPublic = React.lazy(() => import("./pages/PrivatePages/UseCallBackAbout.js"));
const ContactPublic = React.lazy(() => import("./pages/PrivatePages/UseMemo.js"));

const Home = React.lazy(() => import("./pages/Home"));


class Routers extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading</div>}>
          <HeaderAuthMenu />
          <React.Fragment>
            <Routes>
            <Route path="/login" element={<Login />} />

              {/* <Route path="/" element={<NoGuard />}>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route> */}

              <Route path="/auth" element={<AuthGuards />}>
                <Route path="/auth/about" element={<AboutPublic />} />
                <Route path="/auth/contact" element={<ContactPublic />} />
                <Route path="/auth/user" element={<UsersComponent />} /> 
              </Route>
            </Routes>
          </React.Fragment>
        </Suspense>
      </>
    );
  }
}

export default Routers;
