import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import P1 from "../assets/images/bg1.jpg";
export default function Publications() {
  const classes = useStyles();
  return (
    <div>
      <h1
        style={{
          fontFamily: "Montserrat",
        }}
      >
        Publications
      </h1>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          onClick={() =>
            window.open(
              "https://link.springer.com/article/10.1186/s12913-022-08095-y"
            )
          }
          style={{ cursor: "pointer" }}
        >
          <Box className={classes.projectBox}>
            <div className="imageContainer">
              <img src={P1} alt="proj 1" />
            </div>
            <div className="header">
              <h4 style={{ marginBlock: "0px" }}>Springer Link 2022</h4>
              <Box>June, 2022</Box>
            </div>

            <p style={{ marginBottom: "0px" }}>
              Islam, M.N., Aadeeb, M.S., Hassan Munna, M.M. et al. A deep learning based multimodal interaction system for bed ridden and immobile hospital admitted patients: design, development and evaluation. BMC Health Serv Res 22, 803 (2022). https://doi.org/10.1186/s12913-022-08095-y
            </p>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          onClick={() =>
            window.open("https://ieeexplore.ieee.org/document/9399435")
          }
          style={{ cursor: "pointer" }}
        >
          <Box className={classes.projectBox}>
            <div className="imageContainer">
              <img src={P1} alt="proj 1" />
            </div>
            <div className="header">
              <h4 style={{ marginBlock: "0px" }}>IEEE Access 2021 Journal </h4>
              <Box>April, 2021</Box>
            </div>

            <p style={{ marginBottom: "0px" }}>
              M. N. Islam, M. S. Aadeeb, R. R. Khan, M. M. H. Munna, M. Sarwar,
              S. Nasrin, A.K.M. N. Islam, Developing a Novel Hands-free
              Interaction Technique based on Nose and Teeth Movements for Using
              Mobile Devices, in IEEE Access, doi: 10.1109/ACCESS.2021.3072195
            </p>
          </Box>
        </Grid>
        <Grid
            item
            xs={12}
            onClick={() =>
                window.open(
                    "https://link.springer.com/chapter/10.1007/978-3-030-71187-0_20"
                )
            }
            style={{ cursor: "pointer" }}
        >
          <Box className={classes.projectBox}>
            <div className="imageContainer">
              <iframe
                  src="https://drive.google.com/file/d/1EA8RrDGtM83mxOiqKl_t1BDS8kZoPLET/preview"
                  width="100%"
                  height="100%"
                  disallow="autoplay"
                  title="ISDA_Certificate"
              ></iframe>
            </div>
            <div className="header">
              <h4 style={{ marginBlock: "0px" }}>ISDA 2020 Conference </h4>
              <Box>December, 2020</Box>
            </div>

            <p style={{ marginBottom: "0px" }}>
              Aadeeb, M. S., Munna, M.M.H, Rahman, M.R., & Islam, M.N. (2020).
              Towards Developing a Hospital CabinManagement System using Brain
              ComputerInteraction. In proceedings of the 20th International
              Conference on Intelligent Systems Design and Applications (ISDA
              2020), 12 -15 December, 2020, Web Conference.
            </p>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  projectBox: {
    background: "linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)",
    padding: "1rem",
    fontFamily: "Montserrat",
    "& .imageContainer": {
      height: 200,
      overflow: "hidden",
      backgroundColor: "#000",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: "0.5",
        transition: "transform .5s ease, opacity .5s ease",
        "&:hover": {
          transform: "scale(1.1) ",
          opacity: "0.7",
        },
      },
    },

    "& .header": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "1rem",
    },
    "& p": {
      fontSize: "14px",
      textAlign: "justify",
      color: "#888",
    },
  },
}));
