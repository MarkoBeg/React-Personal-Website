import React, { useState } from "react";
import Navbar from "../data";
import { Link } from "react-scroll";
import "./Header.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Me from "../images/avatar.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <h4>Web Dev</h4>
        </div>
        <div className="header-right">
          <div className="nav">
            {Navbar.map((item) => (
              <Link
                className="links"
                activeClass="active"
                to={item.path}
                spy={true}
                smooth="true"
                offset={-70}
                duration={500}
                key={item.id}
              >
                <span className="icon">{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </div>
          <button className="btn-sidebar" onClick={openSidebar}>
            <IconButton>
              <MenuOutlinedIcon></MenuOutlinedIcon>
            </IconButton>
          </button>
        </div>
        <div className={open ? "mobile-sidebar" : "mobile-closed"}>
          <div className="mobile-nav ">
            {Navbar.map((item) => (
              <Link
                className="links-mobile"
                activeClass="active"
                to={item.path}
                spy={true}
                smooth="true"
                offset={-70}
                duration={750}
                key={item.id}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <a href="https://github.com/MarkoBeg">
              <Avatar src={Me} className="avatar"></Avatar>
            </a>
            <button className="close-mobile" onClick={() => setOpen(false)}>
              <IconButton>
                <CloseIcon className="close-btn"></CloseIcon>
              </IconButton>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
