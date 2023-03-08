import { List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router";

export default function RightWindow(props) {
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState("/");

  useEffect(() => {
    console.log(location.pathname);
    setActiveUrl(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <div style={{ ...props.style }}>
        <List>
          {[
            { name: "Home", url: "/" },
            { name: "Education", url: "/education" },
            { name: "Projects", url: "/projects" },
            // { name: "Project Details", url: "/project_details" },
            { name: "Publications", url: "/publications" },
            { name: "Work Experiences", url: "/work-experiences" },
            { name: "Contact", url: "/contact" },
          ].map((text, index) => (
            <Link
              style={{
                color: text.url === activeUrl ? "#fff" : "#888",
                textDecoration: "none",
              }}
              to={text.url}
            >
              <ListItem
                button
                key={text.name}
                onClick={() => {
                  props.setOpen(false);
                }}
              >
                {text.name}
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
      <Outlet />
    </div>
  );
}
export function RightWindowText() {
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState("/");
  const [navigationList, setNavigationList] = useState([
    { name: "Home", url: "/" },
    { name: "Education", url: "/education" },
    { name: "Projects", url: "/projects" },
    { name: "Project Details", url: "/project_details" },
    { name: "Publications", url: "/publications" },
    { name: "Work Experiences", url: "/work-experiences" },
    { name: "Contact", url: "/contact" },
  ]);

  useEffect(() => {
    console.log(location.pathname);
    setActiveUrl(location.pathname);
  }, [location.pathname]);
  return (
    <div
      style={{
        transform: "rotate(90deg)",
        paddingBlock: "10vw",
        textTransform: "uppercase",
        fontSize: "10px",
        fontFamily: "Montserrat",
        letterSpacing: 5,
      }}
    >
      {navigationList.find((option) => option.url === activeUrl).name}
    </div>
  );
}
