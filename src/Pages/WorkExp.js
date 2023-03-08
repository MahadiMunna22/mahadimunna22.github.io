import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";

export default function WorkExp() {
  const classes = useStyles();
  return (
    <div>
      <h1
        style={{
          fontFamily: "Montserrat",
        }}
      >
        Work Experiences
      </h1>
      <Timeline position="right">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "yellow" }} />
            <TimelineConnector style={{ backgroundColor: "#444" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper className={classes.educationCard}>
              <Grid spacing={2} container>
                <Grid item xs={12} md>
                  <span className="title">IDLC Finance LTD</span>
                  <br />
                  <span className="role">Assistant Software Engineer</span>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Paper>
                    <p>Aug 22 - Present</p>
                  </Paper>
                </Grid>
              </Grid>

              <p>
                From August in 2022, I have started to work as Assistant Software Engineer at IDLC Finance LTD.
              </p>
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
                  <span className="title">Goby24</span>
                  <br />
                  <span className="role">Junior Frontend Developer</span>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Paper>
                    <p>Oct 21 - July 22</p>
                  </Paper>
                </Grid>
              </Grid>

              <p>
                From October in 2021, I have started to work as a Junior
                Frontend Developer at Goby24.
              </p>
              {/* <Button>Bachelor of Science</Button> */}
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
                  <span className="title">Goby24 (Internship)</span>
                  <br />
                  <span className="role">Intern</span>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Paper>
                    <p>Apr 21 - Sept 21</p>
                  </Paper>
                </Grid>
              </Grid>

              <p>
                In 2021, I started with Goby24 as an intern with six months of
                period.
              </p>
              {/* <Button>Higher Secondary Certificate</Button> */}
            </Paper>
          </TimelineContent>
        </TimelineItem>
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
                  <span className="title">BanglaTel LTD (Internship)</span>
                  <br />
                  <span className="role">Intern</span>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Paper>
                    <p>Dec 19 - Jan 20</p>
                  </Paper>
                </Grid>
              </Grid>

              <p>
                In 2019, I had an opportunity to work with BanglaTel group for
                two months.
              </p>
              <Button
                  onClick={() =>
                      window.open(
                          "https://drive.google.com/file/d/1FRilKcK6C3H_TQLCNJBQdm2QXbbFBnmw/view?usp=sharing"
                      )
                  }
              >
                Internship Certificate
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
