import React from "react";
import { makeStyles } from "@material-ui/core";

const defaultImage =
  "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg";

const suggestionCount = [1, 2, 3, 4, 5];

const useStyle = makeStyles(() => ({
  root: {},
  wrapper: { padding: 10 },
  content: {},
  account: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& > *": {
      "&:not(:first-child)": {
        marginLeft: 10,
      },
    },
  },
  pict: {
    width: 62,
    height: 62,
    flex: "none",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
    },
  },
  suggestionContainer: {
    marginTop: 20,
  },
  follow: {
    marginLeft: "auto !important",
    fontSize: 12,
    fontWeight: "bold",
    color: "#0095f6",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
  footer: {
    fontSize: 12,
    color: "rgba(0,0,0,0.3)",
    marginTop: 20,
  },
}));

const SuggestionView = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.account}>
            <div className={classes.pict}>
              <img alt="profile" src={defaultImage}></img>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                irfany afridho
              </span>
              <span style={{ fontSize: 12, color: "rgba(0,0,0,0.4)" }}>
                irfany fajar afridho
              </span>
            </div>
          </div>
          <div className={classes.suggestionContainer}>
            <span style={{ fontWeight: "bold", color: "rgba(0,0,0,0.5)" }}>
              Suggestions For You
            </span>
            {/* Accounts Suggestion */}

            {suggestionCount.map((person, index) => {
              return (
                <div
                  key={index}
                  style={{ marginTop: 16 }}
                  className={classes.account}
                >
                  <div
                    style={{ width: 32, height: 32 }}
                    className={classes.pict}
                  >
                    <img alt="profile" src={defaultImage}></img>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                      irfany afridho
                    </span>
                    <span style={{ fontSize: 12, color: "rgba(0,0,0,0.4)" }}>
                      New to Instaclone
                    </span>
                  </div>
                  <div className={classes.follow}>
                    <span>Follow</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.footer}>
            <span>@ 2020 INSTACLONE IRFANY AFRIDHO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionView;
