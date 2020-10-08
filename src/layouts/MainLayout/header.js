import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles, Hidden, Button } from "@material-ui/core";
import HomeIcon from "../../assets/icons/home-solid.svg";
import MessageIcon from "../../assets/icons/paper-plane-solid.svg";
import CompasIcon from "../../assets/icons/compass-solid.svg";
import HearthIcon from "../../assets/icons/heart-regular.svg";
import Drawer from "../../component/drawer";

const NavItem = [
  { path: "/", icon: HomeIcon },
  { path: "/message", icon: MessageIcon },
  { path: "/discover", icon: CompasIcon },
];

const defaultImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoODQ4PDRAPEA8NDQ0NDQ0NDRsNDg0PFRIWFhURExMYKCggGBolGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOYA2wMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAwIH/8QAMBABAAIABAQEBQQCAwAAAAAAAAECAxESUQQFIZExQWGBIjJxobFCUsHRcuEVYoL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+ogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxiYtK/NMR+Ve3H4flEz7ZAtil/yNf2z3THMKbWBcFWvHYXrHs7YeNh28LRPv1B0AAAAAAAAAAAAAAAAAABV4zidHSvzT9gdMfiKU8fH9seMqOLxuJbw+GPTx7q0zMznPWQCZAAAAQkBe4DiLTOi3Xp0mfH6L7CiZjwTrtvPcG4MrheKtW0RaZms9J9PWGqAAAAAAAAAAAAAADziXisTM+UZsW1ptMzPjM9WlzG2WHlvMQywSAAAAAAAAACGrwGLqplPjXp7eTLWuW2yvlvE9waYAAAAAAAAAAAAAKPM56U+ss9f5p+j3UASAAAAAAAAAA68HOWJX65fZyesGcr1/wAo/INsAAAAAAAAAAAAAFDmn6PdQaXMq/DE7T1ZwAAAAAAAAAACafNH1j8oe8CM71j/ALQDaAAAAAAAAAAAAAB4xaaqzXeMvdirfMrTqrG0Z+6oAAAAAAAAAAAt8uws7avKv5U1/l+PMzonLKIzjKMsgXwAAAAAAAAAAAAAZ3M4+Ks+kwptPmNM6Z/tnP2ZgAAAAAAAAAAC1y6vx57VlUaPLafDM7zl2BdAAAAAAAAAAAAAB5vXOJjeJhiTGU5T5Tk3XDH4ekxadMapievqDJEJAAAAAAABADY4SuWHWPTNW4DBpaudoifi6TK+AAAAAAAAAAAAAAAADI4vC0XnaesOLT5hh50z86zn7ebLBIAAAAABl9xZ5fh6r5+VYz9/IGhw+HppEbR1+roAAAAAAAAAAAAAAAAAItGcTG8TDDmMpmNpmG6w7znMzvM/kEAAAAAANDlcfDafWI+3+2e0uW/JP+U/iAWwAAAAAAAAAAAAAAAARMxHj0jeQece2VLTtWe7EXeN4qLRpr4fqnf0UwAAAAAAQ0OV26Wj1i38fwoPeDi2paLR7xvANocsDHpeOk9dvN1AAAAAAAAAAAB5vetYzmYj6g9PN71rGdpiI9VLG4/ypH/qf4hSve1pztMz9QXsbmH7Iz9bf0pYmLe3zTM/iHkBCQAAAAAAAAAj0WMPjcWvj8UbT/auA0cPj6T80TX7wtUvW0ZxMT9JzYb1W0xOcTl9AbgzcLj7x80ao38JXcHHpf5Z67T4g6gAAACJlncVxF79KxMV+nWwOvE8bEdKdZ38oUL3tac7TMz69TRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYEEdPD7J0W2nsaLbT2BaweOtHS3WN/NfwsWt4zrOf5hjaLbT2eqa6znXOJ9IBtDlw2LN65zGU+Ex4dd3UAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==";

const notifCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
    right: 0,
    background: "white",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  },
  wrapper: {
    padding: "0 20px",
    display: "flex",
    height: 60,
  },
  content: {
    display: "flex",
    margin: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 900,
  },
  searchBar: {
    borderRadius: 2,
    border: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& input": {
      padding: 6,
      border: "none",
      width: 200,
      background: "rgba(200,200,200,0.1)",
      textAlign: "center",

      "&:focus": {
        outline: "none",
        textAlign: "left",
      },
    },
  },
  topNav: {
    display: "flex",
    width: 210,
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
    "& img": {
      width: "100%",
      opacity: 0.4,
      cursor: "pointer",
      height: "100%",
      "&:hover": {
        opacity: 1,
      },
    },
  },
  profileItem: {
    padding: 10,
    cursor: "pointer",
    "&:hover": {
      background: "rgba(120,120,120,0.1)",
    },
  },
  notifItem: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    fontSize: 14,
  },
  button: {
    background: theme.btn.primary,
    marginLeft: "auto",
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
    "&:hover": {
      opacity: 0.9,
      background: theme.btn.primary,
    },
  },
  notifDrawer: {
    borderRadius: 5,
    border: "1px solid rgba(0,0,0,0.1)",
    boxShadow: "0px 2px 11px 0px rgba(0,0,0,0.2)",
  },
}));

const HeaderView = () => {
  const [openNotif, setOpenNotif] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const classes = useStyles();
  const location = useLocation();

  const handleDrawerChanges = [
    () => {
      setOpenUser(false);
      setOpenNotif(!openNotif);
    },
    () => {
      setOpenUser(!openUser);
      setOpenNotif(false);
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h3 style={{ width: 210 }}>INSTACLONE</h3>
          <Hidden xsDown>
            <div className={classes.searchBar}>
              <input placeholder="Search"></input>
            </div>
          </Hidden>
          <div className={classes.topNav}>
            {NavItem.map((item, index) => {
              return (
                <div key={index} className={classes.icon}>
                  <a href={item.path}>
                    <img
                      style={
                        item.path === location.pathname ? { opacity: 1 } : {}
                      }
                      alt="icon"
                      src={item.icon}
                    ></img>
                  </a>
                </div>
              );
            })}
            <div style={{ position: "relative" }} className={classes.icon}>
              <img
                id="user-notification"
                onClick={handleDrawerChanges[0]}
                style={openNotif ? { opacity: 1 } : {}}
                alt="hearth"
                src={HearthIcon}
              ></img>
              {openNotif && (
                <Drawer
                  className={classes.notifDrawer}
                  parents="user-notification"
                  handleClose={() => setOpenNotif(false)}
                >
                  <div style={{ width: 380, maxHeight: 320, overflow: "auto" }}>
                    <ul>
                      {notifCount.map((notif, index) => {
                        return (
                          <li key={index} className={classes.notifItem}>
                            <div style={{ width: 32, height: 32 }}>
                              <img
                                style={{ borderRadius: "50%" }}
                                alt="profile"
                                src={defaultImage}
                              ></img>
                            </div>
                            <div
                              style={{ maxWidth: 200, whiteSpace: "pre-wrap" }}
                            >
                              <div
                                style={{ fontWeight: "bold", marginLeft: 15 }}
                              >
                                Irfanyfajarafridho&nbsp;
                              </div>
                              <div style={{ marginLeft: 15, marginTop: 2 }}>
                                <span>started following you.</span>
                                <span
                                  style={{
                                    color: "rgba(0,0,0,0.3)",
                                    display: "inline",
                                  }}
                                >
                                  &nbsp;15m
                                </span>
                              </div>
                            </div>

                            <Button className={classes.button}>Follow</Button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Drawer>
              )}
            </div>
            <div style={{ position: "relative" }} className={classes.icon}>
              <img
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: 1,
                }}
                onClick={handleDrawerChanges[1]}
                id="user-profile"
                alt="default"
                src={defaultImage}
              ></img>
              {openUser && (
                <Drawer
                  parents="user-profile"
                  handleClose={() => setOpenUser(false)}
                >
                  <ul style={{ width: 180, fontSize: 14 }}>
                    <li className={classes.profileItem}>Profile</li>
                    <li className={classes.profileItem}>Settings</li>
                    <hr />
                    <li
                      style={{
                        fontWeight: "bold",
                        color: "rgba(255, 0, 0, 0.8)",
                      }}
                      className={classes.profileItem}
                    >
                      Log Out
                    </li>
                  </ul>
                </Drawer>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderView;
