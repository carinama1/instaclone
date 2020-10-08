import React from "react";
import { makeStyles, Hidden } from "@material-ui/core";
import FriendList from "./FriendList";
import PostItem from "./PostItem";
import SuggestionView from "./SuggestionView";

const useStyle = makeStyles((theme) => ({
  root: { marginBottom: 40 },
  wrapper: { display: "flex", justifyContent: "center" },
  content: {
    width: 900,
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

const HomeView = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div style={{ width: 600 }}>
            <FriendList />
            <PostItem />
            <PostItem />
          </div>
          <Hidden smDown>
            <div
              style={{
                width: 275,
              }}
            >
              <div
                style={{
                  position: "fixed",
                  width: 275,
                }}
              >
                <SuggestionView />
              </div>
            </div>
          </Hidden>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
