import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    right: 0,
    width: "auto",
    transform: "translate(20px,calc(100% + 18px))",
    background: "white",
  },
  wrapper: {
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: 2,
    whiteSpace: "nowrap",
  },
}));

const Drawer = (props: React.PropsWithChildren<MyProps>) => {
  const classes = useStyle();
  const drawer = useRef(null);

  const handleClose = (e) => {
    const parents = document.getElementById(props.parents);
    if (drawer && !drawer.current.contains(e.target)) {
      if (parents.contains(e.target)) {
        return;
      }
      props.handleClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  });

  return (
    <div ref={drawer} className={classes.root}>
      <div className={props.className || classes.wrapper}>
        {props.children || "Please include Children"}
      </div>
    </div>
  );
};

export default Drawer;
