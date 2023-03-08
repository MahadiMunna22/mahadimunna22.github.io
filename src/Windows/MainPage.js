import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@material-ui/core";
import Scrollbar from "react-scrollbars-custom";
import RightWindow, { RightWindowText } from "./RightWindow";
import LeftSideWindow from "./LeftSideWindow";
import Home from "../Pages/Home";
import Education from "../Pages/Education";
import Project from "../Pages/Project";
import Publications from "../Pages/Publications";
import WorkExp from "../Pages/WorkExp";
import Contact from "../Pages/Contact";
import ProjectDetails from "../Pages/ProjectDetails";

const leftDrawerWidth = 300;
const rightDrawerWidth = 240;

const rightOpenedMixin = (theme) => ({
  width: rightDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  right: "auto",
  overflowX: "hidden",
  backgroundColor: "#20202a",
  color: "#fff",
  boxShadow: "0px 0px 10px 1px #111",
  [theme.breakpoints.down("xs")]: {
    width: 300,
  },
});

const leftOpenedMixin = (theme) => ({
  width: leftDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  left: "auto",
  overflowX: "hidden",
  backgroundColor: "#20202a",
  color: "#fff",
  boxShadow: "0px 0px 10px 1px #111",
});

const rightClosedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  right: "auto",
  overflowX: "hidden",
  // width: `calc(${theme.spacing(7)} + 1px)`,
  width: "0px",
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
  backgroundColor: "#20202a",
  color: "#fff",
  boxShadow: "0px 0px 10px 1px #111",
});

const leftClosedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  left: "auto",
  overflowX: "hidden",
  width: "0px",
  [theme.breakpoints.down("xs")]: {
    width: "0px",
  },
  backgroundColor: "#20202a",
  color: "#fff",
  boxShadow: "0px 0px 10px 1px #111",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  backgroundColor: "rgba(37, 37, 50, 0.98)",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const RightDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: rightDrawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...rightOpenedMixin(theme),
    "& .MuiDrawer-paper": rightOpenedMixin(theme),
  }),
  ...(!open && {
    ...rightClosedMixin(theme),
    "& .MuiDrawer-paper": rightClosedMixin(theme),
  }),
}));

const LeftDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: leftDrawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...leftOpenedMixin(theme),
    "& .MuiDrawer-paper": leftOpenedMixin(theme),
  }),
  ...(!open && {
    ...leftClosedMixin(theme),
    "& .MuiDrawer-paper": leftClosedMixin(theme),
  }),
}));

export default function MainPage() {
  const theme = useTheme();
  const classes = useStyles();
  const [rightOpen, setRightOpen] = React.useState(false);
  const [leftOpen, setLeftOpen] = React.useState(true);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    if (matches) {
      setLeftOpen(true);
    } else setLeftOpen(false);
  }, [matches]);

  const handleRightDrawerToggle = () => {
    setRightOpen(!rightOpen);
  };

  const handleLeftDrawerToggle = () => {
    setLeftOpen(!leftOpen);
  };

  return (
    <BrowserRouter>
      <div className=" container">
        <Box sx={{ display: "flex", overflow: "hidden" }}>
          <LeftDrawer
            anchor={"left"}
            variant="permanent"
            open={leftOpen}
            className={classes.leftDrawer}
          >
            {leftOpen ? (
              <>
                <DrawerHeader className={classes.leftSideHeader}>
                  <IconButton onClick={handleLeftDrawerToggle}>
                    <CloseIcon />
                  </IconButton>
                </DrawerHeader>
                <LeftSideWindow />
              </>
            ) : null}
          </LeftDrawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              color: "#fff",
            }}
            style={{
              marginLeft: rightOpen ? -180 : 0,
              marginRight: matches ? 0 : leftOpen ? -180 : 0,
              transition: "margin-Inline 0.5s",
            }}
            onClick={() => {
              rightOpen ? handleRightDrawerToggle() : console.log("Clicked");
            }}
            className={classes.mainBody}
          >
            <Scrollbar style={{ height: "100%" }}>
              <div
                style={{
                  backgroundColor: "rgb(32 32 42 / 96%)",
                  minHeight: "100vh",
                }}
              >
                {matches ? null : (
                  <DrawerHeader className={classes.bodyHeader}>
                    <IconButton onClick={handleLeftDrawerToggle}>
                      <AccountCircleIcon />
                    </IconButton>

                    {rightOpen ? null : (
                      <IconButton onClick={handleRightDrawerToggle}>
                        <MenuIcon />
                      </IconButton>
                    )}
                  </DrawerHeader>
                )}
                <div style={{ padding: matches ? "2rem" : "2.5rem .5rem" }}>
                  <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Project />} />
                    <Route
                      path="/project_details"
                      element={<ProjectDetails />}
                    />
                    <Route path="/Publications" element={<Publications />} />
                    <Route path="/work-experiences" element={<WorkExp />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
              </div>
              <Box
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)",
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#666",
                  fontSize: "14px",
                }}
              >
                <span>
                  Copyright ©{new Date().getFullYear()} Mahadi Hassan Munna
                </span>
              </Box>
            </Scrollbar>
          </Box>
          <RightDrawer
            anchor={"right"}
            variant="permanent"
            open={rightOpen}
            className={classes.rightDrawer}
            style={{
              zIndex: 2,
            }}
          >
            <DrawerHeader
              style={{
                display: "flex",
                justifyContent: rightOpen ? "start" : "center",
              }}
            >
              <IconButton onClick={handleRightDrawerToggle}>
                {rightOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </DrawerHeader>

            <Divider />
            {rightOpen ? <RightWindow setOpen={setRightOpen}/> : <RightWindowText />}
          </RightDrawer>
        </Box>
      </div>
    </BrowserRouter>
  );
}
const useStyles = makeStyles((theme) => ({
  leftDrawer: {
    [theme.breakpoints.down("xs")]: {},
    zIndex: 2,
  },
  mainBody: {
    width: "100vw",
  },
  leftSideHeader: {
    display: "none !important",
    position: "absolute",
    top: 6,
    zIndex: 12,
    [theme.breakpoints.down("xs")]: {
      display: "block !important",
      marginLeft: "240px",
    },
  },
  bodyHeader: {
    display: "flex",
    justifyContent: "space-between !important",
    position: "absolute",
    top: 0,
    paddingInline: "1rem",
    width: "96vw",
    zIndex: 12,
  },
}));
