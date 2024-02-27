import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const [activeItem, setActiveItem] = useState(String(pathname));
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(theme.palette.mode);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);

    if (itemName === "dashboard") {
      navigate("/");
    } else if (itemName === "products") {
      navigate("/products");
    } else if (itemName === "places") {
      navigate("/places");
    } else if (itemName === "cut") {
      navigate("/cut");
    }
  };

  return (
    <div className="aside">
      <div className="aside-wrapper">
        <div className="logo-container">
          <div className="logo-circle">
            <div className="logo-circle-inside"></div>
          </div>
          <h1 style={{ color: colors.blueAccent[100] }}>Adminisrator</h1>
        </div>
        <div className="menulist">
          <div
            className={`menuitem ${activeItem === "dashboard" ? "active" : ""}`}
            onClick={() => handleItemClick("dashboard")}
          >
            <div className="menuicon">
              <HomeIcon
                style={{
                  fill: " #fefeff",
                }}
                fontSize="medium"
              />
            </div>
            <div
              className={`menutext ${
                activeItem === "dashboard" ? "activetext" : ""
              }`}
            >
              Dashboard
            </div>
          </div>
          <div
            className={`menuitem ${activeItem === "products" ? "active" : ""}`}
            onClick={() => handleItemClick("products")}
          >
            <div className="menuicon">
              <BusinessCenterIcon
                style={{
                  fill: " #fefeff",
                }}
                fontSize="medium"
              />
            </div>
            <div
              className={`menutext ${
                activeItem === "products" ? "activetext" : ""
              }`}
            >
              Products
            </div>
          </div>
          <div
            className={`menuitem ${activeItem === "places" ? "active" : ""}`}
            onClick={() => handleItemClick("places")}
          >
            <div className="menuicon">
              <AddLocationAltIcon
                style={{
                  fill: " #fefeff",
                }}
                fontSize="medium"
              />
            </div>
            <div
              className={`menutext ${
                activeItem === "Dashboard" ? "activetext" : ""
              }`}
            >
              Places
            </div>
          </div>

          <div
            className={`menuitem ${activeItem === "Cut" ? "active" : ""}`}
            onClick={() => handleItemClick("Cut")}
          >
            <div className="menuicon">
              <BusinessCenterIcon
                style={{
                  fill: " #fefeff",
                }}
                fontSize="medium"
              />
            </div>
            <div
              className={`menutext ${
                activeItem === "Dashboard" ? "activetext" : ""
              }`}
            >
              Cut
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
