import { Box, Grid, makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import ImageViewer from "react-simple-image-viewer";

export default function ProjectDetails() {
  const location = useLocation();
  const [projectDetails, setProjectDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    setIsLoading(true);
    console.log(location.state);
    setProjectDetails(location.state);
    // setIsLoading(false);
  }, []);

  return isLoading && !projectDetails ? (
    "Loading"
  ) : (
    <div>
      <h1
        style={{
          fontFamily: "Montserrat",
        }}
      >
        Projects Details
      </h1>
      <Box className={classes.projectBox}>
        <div
          className="imageContainer"
          onClick={() => window.open(projectDetails?.link)}
        >
          <img src={projectDetails?.bannerImg} alt="proj 1" />
        </div>
        <div className="header">
          <h4 style={{ marginBlock: "0px" }}>{projectDetails?.name}</h4>
          <Box style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
            {projectDetails?.date}
          </Box>
        </div>

        <p style={{ marginBottom: "0px" }}>{projectDetails?.details}</p>

        {projectDetails?.screenshots.length > 0 && < div className="screenshots">
          <h2>Screenshots</h2>
          <Grid container spacing={2}>
        {projectDetails?.screenshots.map((image, key) => (
          <Grid item xs={12} md={6} key={key}>
          <img
          src={image}
          alt="screenshots"
          style={{width: "100%", height: "200px", objectFit: "cover"}}
          onClick={() => openImageViewer(key)}
          />
          </Grid>
          ))}
          </Grid>
          </div>}
        {isViewerOpen && (
          <ImageViewer
            src={projectDetails?.screenshots}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: 3,
            }}
            closeOnClickOutside={true}
          />
        )}
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  projectBox: {
    background: "linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)",
    padding: "1rem",
    fontFamily: "Montserrat",
    "& .imageContainer": {
      height: 300,
      overflow: "hidden",
      backgroundColor: "#000",
      cursor: "pointer",
      "& img": {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        objectFit: "contain",
        opacity: "1",
        transition: "transform .5s ease, opacity .5s ease",
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
