import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";

export default function Education() {
  const classes = useStyles();
  return (
    <div>
      <h1
        style={{
          fontFamily: "Montserrat",
        }}
      >
        Education
      </h1>
      <Timeline position="right">
        <TimelineItem>
          {/* <TimelineOppositeContent color="text.secondary">
            2005 - 2013
          </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "yellow" }} />
            <TimelineConnector style={{ backgroundColor: "#444" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper className={classes.educationCard}>
              <Grid spacing={2} container>
                <Grid item xs={12} md>
                  <span
                    className="title"
                    onClick={() => window.open("http://www.spscdnj.edu.bd/")}
                  >
                    Saint Philip's High School and College
                  </span>
                  <br />
                  <span className="role">Student</span>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Paper>
                    <p>2005 - 2013</p>
                  </Paper>
                </Grid>
              </Grid>

              <p>
                In 2014, I have completed S.S.C exam with a{" "}
                <strong>GPA of 5.00</strong>
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1EI3B9RL6pYH8M0YheDpmpC9PNMWHEVj1/view?usp=sharing"
                  )
                }
              >
                Secondary School Certificate
              </Button>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "yellow" }} />
            <TimelineConnector style={{ backgroundColor: "#444" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper className={classes.educationCard}>
              <Grid spacing={2} container>
                <Grid item xs={12} md>
                  <span
                    className="title"
                    onClick={() =>
                      window.open(
                        "https://honoursadmission.com/details-hsc-information/Dinajpur/120827/Fashiladanga-College"
                      )
                    }
                  >
                    Fashiladanga College
                  </span>
                  <br />
                  <span className="role">Student</span>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Paper>
                    <p>2014 - 2015</p>
                  </Paper>
                </Grid>
              </Grid>

              <p>
                In 2016, I have completed H.S.C exam with a{" "}
                <strong>GPA of 5.00</strong>
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1EGrDt7GbBUPkJ9piTf2IhoiDt9kjr-Sc/view?usp=sharing"
                  )
                }
              >
                Higher Secondary Certificate
              </Button>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "yellow" }} />
            <TimelineConnector style={{ backgroundColor: "#444" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper className={classes.educationCard}>
              <Grid spacing={2} container>
                <Grid item xs={12} md>
                  <span
                    className="title"
                    onClick={() => window.open("https://mist.ac.bd/")}
                  >
                    Military Institute of Science and Technology (MIST)
                  </span>
                  <br />
                  <span className="role">Student</span>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Paper>
                    <p>2017-2021</p>
                  </Paper>
                </Grid>
              </Grid>

              <p>
                In 2021, I have completed my bachelor's degree in Computer
                Science and Engineering with a CGPA of <strong>3.70</strong>
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1ERfFcQd3R_Y4AFp1KuZwm-GViAuYVL_K/view?usp=sharing"
                  )
                }
              >
                Bachelor of Science
              </Button>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  educationCard: {
    padding: "1rem",
    background: "linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)",
    color: "#fff",
    fontFamily: "Montserrat",
    "& .MuiGrid-container": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      "& .MuiGrid-item": {
        "& .title": {
          marginBlock: "0px",
          fontSize: "20px",
          cursor: "pointer",
        },
        "& .role": {
          marginBlock: "0px",
          fontSize: "14px",
          color: "#666",
          fontStyle: "italic",
        },
        "& .MuiPaper-root": {
          backgroundColor: "#20202a",
          borderRadius: "30px",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& p": {
            marginBlock: "0px",
            color: "#666",
          },
        },
      },
    },
    "& p": {
      color: "#aaa",
    },
    "& .MuiButton-root": {
      color: "yellow",
    },
  },
}));
