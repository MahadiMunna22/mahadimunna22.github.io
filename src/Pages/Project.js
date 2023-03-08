import {
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import P1 from "../assets/images/bg1.jpg";
import ThievesOfJusticeBanner from "../assets/images/Thieves_Of_Justice_banner.png";
import Goby24Banner from "../assets/images/GOBY24LOGO.png";
import Autoby24Banner from "../assets/images/AUTOBY24LOGO.png";
import FlappyBirdImg from "../assets/images/FlappyBird.JPG";
import NTCCImg from "../assets/images/NTCC Poster.jpg";
import HospitalCabinImg from "../assets/images/HospitalCabin.JPG";
import StudyTourAliensImg from "../assets/images/StudyTour.jpg";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

export default function Project(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);

  const projectVariants = [
    "All",
    "Research",
    "Web Development",
    "Mobile App Development",
    "Game Development",
    "Machine Learning",
  ];

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const projects = [
    {
      name: "Autoby24",
      date: "Feb 2022 - Jun 2022",
      details:
        "Autoby24 is an Ecommerce based platform where anyone can buy or sell Cars and Bikes. Both new and old model vehicles are available. This application is developed using ReactJS, Django, Postgresql, etc.Its a ride sharing app where one can be a rider and passenger. He can book a ride or share ride if he has a car. There are also Tourist services where a tourist can book a ride for a specific tourist spot. This app is created using React and Django.",
      link: "https://www.autyby24.ch/",
      bannerImg: Autoby24Banner,
      type: ["All", "Web Development"],
      screenshots: [
        require("../assets/images/Projects/Autoby24/0.png"),
        require("../assets/images/Projects/Autoby24/1.png"),
        require("../assets/images/Projects/Autoby24/2.png"),
        require("../assets/images/Projects/Autoby24/3.PNG"),
        require("../assets/images/Projects/Autoby24/4.PNG"),
        require("../assets/images/Projects/Autoby24/5.PNG"),
        require("../assets/images/Projects/Autoby24/6.PNG"),
        require("../assets/images/Projects/Autoby24/7.png"),
        require("../assets/images/Projects/Autoby24/8.png"),
        require("../assets/images/Projects/Autoby24/9.png"),
      ],
    },
    {
      name: "Goby24",
      date: "Apr 2021 - Oct 2021",
      details:
        "Its a ride sharing app where one can be a rider and passenger. He can book a ride or share ride if he has a car. There are also Tourist services where a tourist can book a ride for a specific tourist spot. This app is created using React and Django.",
      link: "https://www.goby24.ch/",
      bannerImg: Goby24Banner,
      type: ["All", "Web Development"],
      screenshots: [
        require("../assets/images/Projects/Goby24/0.JPG"),
        require("../assets/images/Projects/Goby24/1.JPG"),
        require("../assets/images/Projects/Goby24/2.JPG"),
        require("../assets/images/Projects/Goby24/3.JPG"),
        require("../assets/images/Projects/Goby24/4.JPG"),
        require("../assets/images/Projects/Goby24/5.JPG"),
        require("../assets/images/Projects/Goby24/6.JPG"),
        require("../assets/images/Projects/Goby24/7.JPG"),
      ],
    },

    {
      name: "Goby24 Mobile App",
      date: "Oct 2021 - Feb 2022",
      details:
        "Its a ride sharing mobile application developed with React-Native where one can be a rider and passenger. He can book a ride or share ride if he has a car. There are also Tourist services where a tourist can book a ride for a specific tourist spot.",
      link: "https://play.google.com/store/apps/details?id=com.autoby24.Goby24&hl=en&gl=US",
      bannerImg: Goby24Banner,
      type: ["All", "Mobile App Development"],
      screenshots: [
        require("../assets/images/Projects/Goby24MobileAPP/0.jpg"),
        require("../assets/images/Projects/Goby24MobileAPP/1.jpg"),
        require("../assets/images/Projects/Goby24MobileAPP/3.jpg"),
        require("../assets/images/Projects/Goby24MobileAPP/4.jpg"),
        require("../assets/images/Projects/Goby24MobileAPP/5.jpg"),
        require("../assets/images/Projects/Goby24MobileAPP/6.jpg"),
        require("../assets/images/Projects/Goby24MobileAPP/7.jpg"),
        require("../assets/images/Projects/Goby24MobileAPP/8.jpg"),
        require("../assets/images/Projects/Goby24MobileAPP/2.jpg"),
      ],
    },
    {
      name: "Nose Mobile Interaction system for the disabled",
      date: "November, 2020",
      details:
          "This is an android based application. The application helps disabled or handless people to interact with their smartphone. Machine Learning algorthms are used to track nose and teeth using front camera of the smartphone. The tracking of nose makes the cursor movement inside the smartphone and showing teeth will make click operation. This project is developed using Android Studio",
      link: "https://nose-mobile-interaction.github.io/",
      bannerImg: NTCCImg,
      type: ["All", "Research", "Mobile App Development", "Machine Learning"],
      screenshots: [
        require("../assets/images/Projects/NMIS/0.jpg"),
        require("../assets/images/Projects/NMIS/1.jpg"),
        require("../assets/images/Projects/NMIS/2.jpg"),
        require("../assets/images/Projects/NMIS/3.jpg"),
        require("../assets/images/Projects/NMIS/4.jpg"),
        require("../assets/images/Projects/NMIS/5.jpg"),
      ],
    },
    {
      name: "Hospital Cabin Management System",
      date: "February, 2021",
      details:
          "This is our final year Thesis project. Its a research based ML project. The main purpose of this project is to give some freedom to the patient of a hospital cabin. The patient will be able to use multiple mode of interaction to control his environment using a computer. This project is developed using Image Classification, Object detection and tracking using YOLO version 4 tiny, Image segmentation, Voice to Text, etc.",
      link: "https://youtu.be/UCuKGcEyac0",
      bannerImg: HospitalCabinImg,
      type: ["All", "Research", "Machine Learning"],
      screenshots: [
        require("../assets/images/Projects/HCMS/0.jpg"),
        require("../assets/images/Projects/HCMS/1.jpg"),
        require("../assets/images/Projects/HCMS/2.jpg"),
        require("../assets/images/Projects/HCMS/3.jpg"),
        require("../assets/images/Projects/HCMS/4.jpg"),
        require("../assets/images/Projects/HCMS/5.jpg"),
        require("../assets/images/Projects/HCMS/6.jpg"),
        require("../assets/images/Projects/HCMS/7.jpg"),
        require("../assets/images/Projects/HCMS/8.png"),
      ],
    },
    {
      name: "Thieves of Justice",
      date: "December, 2021",
      details:
        "It's a game based on the theme bad is good. Basically, a thief is trying to help a guy named Jake by stealing. So, the player is modern-day Robin Hood who can highlight certain objects to steal and get a targeted value of money.  Afterward, give the money back to Jake in order to complete the mission.",
      link: "https://www.youtube.com/watch?v=X0pXX4v5VwE",
      bannerImg: ThievesOfJusticeBanner,
      type: ["All", "Game Development"],
      screenshots: [
        require("../assets/images/Projects/TheivesOfJustice/0.png"),
        require("../assets/images/Projects/TheivesOfJustice/1.png"),
        require("../assets/images/Projects/TheivesOfJustice/2.png"),
        require("../assets/images/Projects/TheivesOfJustice/3.png"),
        require("../assets/images/Projects/TheivesOfJustice/4.png"),
        require("../assets/images/Projects/TheivesOfJustice/5.png"),
      ],
    },
    {
      name: "Flappy Bird Game",
      date: "June, 2020",
      details:
        "Flappy bird game is a game where a bird flies through obsticles and a player has to control the bird to avoid those obsticles. This game is developed using OpenGL. This game is a 2D graphics project. OpenGL is used in C++ environment in CodeBlocks.",
      link: "https://github.com/MahadiMunna22/Flappy-Bird-Game-using-OpenGL-2D.git",
      bannerImg: FlappyBirdImg,
      type: ["All", "Game Development"],
      screenshots: [
        // require("../assets/images/Projects/Goby24/0.JPG"),
        // require("../assets/images/Projects/Goby24/1.JPG"),
        // require("../assets/images/Projects/Goby24/2.JPG"),
        // require("../assets/images/Projects/Goby24/3.JPG"),
        // require("../assets/images/Projects/Goby24/4.JPG"),
        // require("../assets/images/Projects/Goby24/5.JPG"),
        // require("../assets/images/Projects/Goby24/6.JPG"),
        // require("../assets/images/Projects/Goby24/7.JPG"),
      ],
    },
    {
      name: "Study Tour by the Aliens",
      date: "September, 2020",
      details:
        "This project is based on Animation and Graphics. A short-film is made using Blender with 3d animations and objects. In this short-film, Aliens visit earth to learn about different animals in different continents of the world.",
      link: "https://zenith1234.itch.io/thiefs-of-justice",
      bannerImg: StudyTourAliensImg,
      type: ["All", "Graphics"],
      screenshots: [
        require("../assets/images/Projects/StudyTourByAliens/0.png"),
        require("../assets/images/Projects/StudyTourByAliens/1.png"),
        require("../assets/images/Projects/StudyTourByAliens/2.png"),
        require("../assets/images/Projects/StudyTourByAliens/3.png"),
        require("../assets/images/Projects/StudyTourByAliens/4.png"),
        require("../assets/images/Projects/StudyTourByAliens/5.png"),
        require("../assets/images/Projects/StudyTourByAliens/6.png"),
        require("../assets/images/Projects/StudyTourByAliens/7.png"),
        require("../assets/images/Projects/StudyTourByAliens/8.png"),
        require("../assets/images/Projects/StudyTourByAliens/9.png"),
      ],
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            marginRight: "2rem",
          }}
        >
          Projects
        </h1>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          // centered
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{ style: { background: "yellow" } }}
        >
          {projectVariants.map((variant, key) => (
            <Tab key={key} label={variant} {...a11yProps(key)} />
          ))}
        </Tabs>
      </div>
      {projectVariants.map((variant, key) => (
        <TabPanel key={key} value={tabValue} index={key}>
          <Grid container spacing={4}>
            {projects
              .filter((p) => p.type.includes(variant))
              .map((project, idx) => (
                <Grid key={idx} item xs={12} md={6}>
                  <Box
                    className={classes.projectBox}
                    onClick={() =>
                      navigate("/project_details", { state: project })
                    }
                  >
                    <div className="imageContainer">
                      <img src={project.bannerImg} alt="proj 1" />
                    </div>
                    <div className="header">
                      <h4 style={{ marginBlock: "0px" }}>{project.name}</h4>
                      <Box style={{ marginLeft: "1rem", whiteSpace: "nowrap" }}>
                        {project.date}
                      </Box>
                    </div>

                    <p
                      style={{
                        marginBottom: "0px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        width: "100%",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal",
                      }}
                    >
                      {project.details}
                    </p>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </TabPanel>
      ))}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  projectBox: {
    background: "linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)",
    padding: "1rem",
    fontFamily: "Montserrat",
    cursor: "pointer",
    "& .imageContainer": {
      height: 200,
      overflow: "hidden",
      backgroundColor: "#000",
      "& img": {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: "0.5",
        transition: "transform .5s ease, opacity .5s ease",
        "&:hover": {
          transform: "scale(1.1) ",
          opacity: "0.9",
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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
