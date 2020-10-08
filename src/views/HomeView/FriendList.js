import React from "react";
import { makeStyles } from "@material-ui/core";

const defaultImage =
  "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg";

const friendsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const useStyle = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    border: "1px solid rgba(0,0,0,0.3)",
    borderRadius: 2,
    "&::-webkit-scrollbar": {
      width: "10px",
    },

    /* Track */
    "&::-webkit-scrollbar-track": {
      background: "#f4f6f8",
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#f4f6f8",
    },

    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#f4f6f8",
    },
  },
  wrapper: {
    padding: 15,
    paddingBottom: 0,
    display: "flex",
  },
  friendContainer: {
    fontSize: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90px",
    flex: "none",
  },
  friend: {
    width: 64,
    height: 64,
    marginBottom: 5,
    cursor: "pointer",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
}));

const FriendList = () => {
  const classes = useStyle();

  const filtername = (name) => {
    if (name.length > 12) {
      return name.substring(0, 11) + "...";
    }
    return name;
  };
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {friendsCount.map((friend, index) => {
          return (
            <div key={index} className={classes.friendContainer}>
              <div className={classes.friend}>
                <img alt="friends" src={defaultImage}></img>
              </div>
              <span>{filtername("Friend's Namess")}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendList;
