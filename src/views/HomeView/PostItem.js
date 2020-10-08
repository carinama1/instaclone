import React from "react";
import { makeStyles } from "@material-ui/core";
import MenuIcon from "../../assets/icons/menu.png";

const defaultImage =
  "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg";

const useStyle = makeStyles((theme) => ({
  root: { marginTop: 30, width: "100%" },
  wrapper: {
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: 2,
  },
  content: {
    // height: 500,
  },
  owner: {
    padding: 16,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  profilePict: {
    width: 32,
    height: 32,
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
    },
  },
  postImage: {
    width: "100%",
    maxHeight: 760,
    overflow: "hidden",
  },
}));

const PostItem = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.owner}>
            <div className={classes.profilePict}>
              <img alt="owner" src={defaultImage}></img>
            </div>
            <span style={{ marginLeft: 16 }}>Irfany Fajar Afridho</span>
            <div
              style={{ marginLeft: "auto", width: 32, cursor: "pointer" }}
              className="icon"
            >
              <img alt="icon" src={MenuIcon}></img>
            </div>
          </div>
          <div>
            <div className={classes.postImage}>
              <img alt="post" src={defaultImage}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
