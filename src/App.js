import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import LogIn from "./components/LogIn/LogIn";
import Admin from "./components/AdminPage/Admin/Admin";
import MyOrders from "./components/MyOrders/MyOrders";
import PrivateRoute from "./Private/PrivateRoute";
import Details from "./components/Services/Details/Details";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/admin/:adminWork">
              <Admin></Admin>
            </Route>
            <Route exact path="/admin">
              <Admin></Admin>
            </Route>
            <Route exact path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
