import { Box, Grid, makeStyles } from "@material-ui/core";
import { Button, Paper } from "@mui/material";
import React from "react";
import bannerImg from "../assets/images/bg1.jpg";
import Typed from "react-typed";
import { useNavigate } from "react-router";

export default function Home(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "Montserrat",
      }}
    >
      <Paper className={classes.banner}>
        <div
          style={{
            backgroundColor: "rgb(55 55 70 / 92%)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className={classes.bannerChild}>
            <span className={classes.bannerTitle}>
              Hi, It's Mahadi Hassan Munna
            </span>
            <div className={classes.animationTextWrapper}>
              <span
                className={classes.animationText}
                style={{ color: "yellow" }}
              >
                {"<code>"}
              </span>
              <Typed
                strings={[
                  "I code in ReactJS",
                  "I build Web Interfaces",
                  "I code in C#",
                  "I develop Games",
                  "I code in Python",
                  "I develop ML Projects",
                  "I code in NodeJS",
                  "I develop Websites",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className={classes.animationText}
              />

              <span
                className={classes.animationText}
                style={{ color: "yellow" }}
              >
                {"</code>"}
              </span>
            </div>
            <Button
              onClick={() => {
                navigate("/projects");
              }}
              style={{
                backgroundColor: "yellow",
                color: "#20202a",
                marginTop: "1rem",
                padding: "0.5rem 0.75rem",
                borderRadius: "0px",
                fontSize: "14px",
              }}
              variant="contained"
            >
              View Projects
            </Button>
          </div>
        </div>
      </Paper>
      <Grid container>
        <Grid item xs={6} md={3}>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span className={classes.expYear}>2+</span>
            <span onClick={() => navigate("/work-experiences")} className={classes.expText}>
              Years of industrial experience
            </span>
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontFamily: "Montserrat",
            }}
          >
            <span className={classes.expYear}>4</span>
            <span onClick={() => navigate("/education")} className={classes.expText}>Years of academic knowledge</span>
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontFamily: "Montserrat",
            }}
          >
            <span className={classes.expYear}>15+</span>
            <span onClick={() => navigate("/projects")} className={classes.expText}>Projects completed</span>
          </div>
        </Grid>
        <Grid item xs={6} md={3}>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontFamily: "Montserrat",
            }}
          >
            <span className={classes.expYear}>3</span>
            <span onClick={() => navigate("/publications")} className={classes.expText}>Academic Publicatons</span>
          </div>
        </Grid>
      </Grid>
      <Box>
        <h1
          style={{
            fontFamily: "Montserrat",
          }}
        >
          My Skills
        </h1>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={classes.skillPaper}>
              <h4>Programming Languages</h4>
              <Grid container spacing={1}>
                <Grid item xs={4} md={4}>
                  <Paper className={classes.childPaper}>
                    <p>C</p>
                  </Paper>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Paper className={classes.childPaper}>
                    <p>C++</p>
                  </Paper>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Paper className={classes.childPaper}>
                    <p>C#</p>
                  </Paper>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Paper className={classes.childPaper}>
                    <p>Python</p>
                  </Paper>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Paper className={classes.childPaper}>
                    <p>Java</p>
                  </Paper>
                </Grid>
                <Grid item xs={4} md={4}>
                  <Paper className={classes.childPaper}>
                    <p>Javascript</p>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>Dart</p>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={classes.skillPaper}>
              <h4>Web Development</h4>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>HTML</p>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>CSS</p>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>Bootstrap</p>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>ReactJS</p>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>NodeJS</p>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={classes.skillPaper}>
              <h4>Databases</h4>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>Oracle</p>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>MySQL</p>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>Firebase</p>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={classes.skillPaper}>
              <h4>Machine Learning</h4>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>Deep Neural Network</p>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>Artificial Neural Network</p>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>Image Classification</p>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>Object Detection and Tracking</p>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>Regression</p>
                  </Paper>
                </Grid>

                <Grid item xs={6}>
                  <Paper className={classes.childPaper}>
                    <p>Building YOLO based model</p>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={classes.skillPaper}>
              <h4>Mobile App Development</h4>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>Android Studio</p>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>Flutter</p>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>React Native</p>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className={classes.skillPaper}>
              <h4>Graphics</h4>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>Blender</p>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>OpenGL</p>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.childPaper}>
                    <p>Unity3D</p>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
    },
  },
  bannerChild: {
    padding: "3rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  bannerTitle: {
    fontFamily: "Fredoka One",
    color: "#fff",
    fontSize: "45px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  animationTextWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "start",
    },
  },
  animationText: {
    fontFamily: "Orbitron",
    color: "#fff",
    fontSize: "25px",
    marginLeft: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },

  expYear: {
    fontSize: "25px",
    color: "yellow",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  expText: {
    fontSize: "16px",
    marginLeft: "1rem",
    cursor: 'pointer'
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "8px",
  },
  skillPaper: {
    height: 260,
    background: "linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)",
    padding: "2rem",
    borderRadius: "0px !important",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
    "& h4": {
      color: "#fff",
      marginTop: "0px",
      fontSize: "18px",
    },
    "& p": {
      color: "#aaa",
      fontSize: "12px",
    },
  },
  childPaper: {
    height: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(37, 37, 50, 0.98) !important",
    padding: "0.25rem",
    textAlign: "center",
  },
}));
