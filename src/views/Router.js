import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import AppHeader from "../components/Header";
import SideBar from "../components/SideBar";
import Home from "./home";
import ManageUser from "./manage-user";
import Settings from "./settings";
import Notifications from "./notifications";

const AppRouter = (props) => (
  <div className="body-container d-flex">
    <SideBar {...props} />
    <div className="content-container flex-fill">
      <AppHeader {...props} />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/manage-user" component={ManageUser} />
        <Route path="/settings" component={Settings} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, null)(AppRouter);
