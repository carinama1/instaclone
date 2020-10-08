import React from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import HeaderView from "./header";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
}));

const MainLayout = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <HeaderView />
      <div style={{ marginTop: 64 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
