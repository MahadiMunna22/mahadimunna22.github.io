import { Box } from "@mui/material";
import React from "react";
import Scrollbar from "react-scrollbars-custom";
import proPic from "../assets/images/ProPic.jpg";
import CircularProgressWithLabel from "../Component/CircularProgressWithLabel";
import LinearProgress from "@mui/material/LinearProgress";
import { IconButton, withStyles } from "@material-ui/core";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import moment from "moment";
import { useNavigate } from "react-router";

const StyledLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#121212 !important",
  },
  barColorPrimary: {
    backgroundColor: "yellow !important",
  },
})(LinearProgress);

export default function LeftSideWindow() {
    const navigate = useNavigate();
  return (
    <div style={{ zIndex: 2 }}>
        {/* Heading part */}
        <div>
            <Box
                sx={{
                    width: 300,
                    height: 250,
                    backgroundColor: "rgba(37, 37, 50, 0.98)",
                    position: "sticky",
                    top: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                }}
            >
                <div onClick={() => navigate("/")}
                     style={{
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         cursor: 'pointer'
                     }}
                >
                    <img
                        src={proPic}
                        alt="my_pic"
                        style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "50%",
                            border: "1px solid yellow",
                            objectFit: "cover",
                        }}
                    />
                    <h4 style={{ fontFamily: "Poppins", marginBottom: "0px" }}>
                        Md. Mahadi Hassan Munna
                    </h4>
                    <p
                        style={{
                            textAlign: "center",
                            color: "#666",
                            fontSize: "13px",
                        }}
                    >
                        Software Engineer, Front-end Developer, <br /> Game Developer
                    </p>
                </div>
            </Box>
        </div>
      <Scrollbar style={{ height: "calc(100vh - 250px)" }} removeTrackYWhenNotUsed={true}>
        {/* Body */}
        <div style={{ padding: "2rem" }}>
          <Box
            sx={{
              // height: 220,
            }}
          />

          {/* Basic Bio Data */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "14px",
              fontFamily: "Poppins",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <p>Country:</p>
              <p>City:</p>
              <p>Age:</p>
            </div>
            <div style={{ textAlign: "right", color: "#888" }}>
              <p>Bangladesh</p>
              <p>Dinajpur</p>
              <p>{moment().diff("1999-04-11", "years")} Years</p>
            </div>
          </Box>
          <div style={{ height: "1px", backgroundColor: "#333" }} />

          {/* Circular Progress bar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "14px",
              fontFamily: "Poppins",
              paddingBlock: "1.5rem 1rem",
              paddingInline: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CircularProgressWithLabel value={100} />
              <p>Bengali</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CircularProgressWithLabel value={90} />
              <p>English</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CircularProgressWithLabel value={60} />
              <p>Hindi</p>
            </div>
          </Box>
          <div style={{ height: "1px", backgroundColor: "#333" }} />

          {/* Linear Progress bar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "14px",
              fontFamily: "Poppins",
              paddingBlock: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "100%", height: "50px", mb: 2 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>html</p>
                  <p>98%</p>
                </div>
                <StyledLinearProgress variant="determinate" value={98} />
              </Box>
              <Box sx={{ width: "100%", height: "50px", mb: 2 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>css</p>
                  <p>95%</p>
                </div>
                <StyledLinearProgress variant="determinate" value={95} />
              </Box>
              <Box sx={{ width: "100%", height: "50px", mb: 2 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>ReactJS</p>
                  <p>95%</p>
                </div>
                <StyledLinearProgress variant="determinate" value={95} />
              </Box>
              <Box sx={{ width: "100%", height: "50px", mb: 2 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>NodeJS</p>
                  <p>65%</p>
                </div>
                <StyledLinearProgress variant="determinate" value={65} />
              </Box>
              <Box sx={{ width: "100%", height: "50px", mb: 2 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Python</p>
                  <p>95%</p>
                </div>
                <StyledLinearProgress variant="determinate" value={95} />
              </Box>
              <Box sx={{ width: "100%", height: "50px", mb: 2 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Unity3D</p>
                  <p>60%</p>
                </div>
                <StyledLinearProgress variant="determinate" value={60} />
              </Box>
            </div>
          </Box>
          <div style={{ height: "1px", backgroundColor: "#333" }} />
          <div
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1bFEsF4ZYyC21EN7GS-CUquJeEDJ7JA3a/view?usp=sharing"
              )
            }
            style={{
              marginBlock: "1rem",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                textDecoration: "none",
                color: "#fff",
                marginRight: "0.5rem",
              }}
            >
              Check My Resume
            </span>
            <ArrowCircleRightIcon />
          </div>

          <Box
            sx={{
              height: 30,
            }}
          ></Box>
        </div>

        {/* Footer Social Media Links */}
        <Box
          sx={{
            width: 300,
            height: 50,
            backgroundColor: "rgba(37, 37, 50, 0.98)",
            position: "fixed",
            bottom: 0,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <IconButton
            onClick={() =>
              window.open(
                "https://linkedin.com/in/mahadi-hassan-munna-55ba9a141/"
              )
            }
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://github.com/MahadiMunna22/")}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://facebook.com/mahadihassan.munna.31/")
            }
          >
            <FacebookIcon />
          </IconButton>
        </Box>
      </Scrollbar>
    </div>
  );
}
