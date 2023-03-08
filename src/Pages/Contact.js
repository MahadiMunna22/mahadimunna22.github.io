import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";

export default function Contact() {
  const classes = useStyles();
  return (
    <div>
      <h1
        style={{
          fontFamily: "Montserrat",
        }}
      >
        Contact Information
      </h1>
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className={classes.contactBox}>
              <div style={{ textAlign: "left" }}>
                <p>Country:</p>
                <p>City:</p>
                <p>Street:</p>
              </div>
              <div style={{ textAlign: "right", color: "#888" }}>
                <p>Bangladesh</p>
                <p>Dinajpur</p>
                <p>Newtown 5, Dinajpur Sadar</p>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.contactBox}>
              <div style={{ textAlign: "left" }}>
                <p>Email:</p>
                <p>Phone:</p>
                <p>Skype:</p>
              </div>
              <div style={{ textAlign: "right", color: "#888" }}>
                <p>mahadimunna22@gmail.com</p>
                <p>+8801521426787</p>
                <p>mahadimunna22</p>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  contactBox: {
    background: "linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)",
    padding: "2rem",
    fontFamily: "Montserrat",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "14px",
  },
}));
