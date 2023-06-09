import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { FaFilm, FaList, FaUser, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const isHomePage = location.pathname === "/";
  const isMoviesPage = location.pathname === "/movies";

  return (
    <Box
      display="flex"
      alignItems="center"
      position={isHomePage || isMoviesPage ? "relative" : "absolute"}
      top={0}
      width="66.7%"
      height={47}
      px={40}
      bgcolor="#212121"
      justifyContent="space-between"
    >
      <Typography fontSize={25} fontWeight={700} color="white">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          MOVIEREEL
        </NavLink>
      </Typography>
      <Box display="flex" alignItems="center" ml={3}>
        <NavLink
          to="/movies"
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: 20,
          }}
        >
          <FaFilm size={18} />
          <span style={{ marginLeft: 5, marginBottom: 5 }}> MOVIES</span>
        </NavLink>
        <NavLink
          to="/playlist"
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: 20,
          }}
        >
          <FaList size={18} />
          <span style={{ marginLeft: 5, marginTop: 2 }}>PLAYLIST</span>
        </NavLink>
        <NavLink
          to="/profile"
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: 20,
          }}
        >
          <FaUser size={18} />
          <span style={{ marginLeft: 5 }}>PROFILE</span>
        </NavLink>
        <NavLink
          to="/login"
          style={{ textDecoration: "none", color: "white" }}
        >
          <FaSignInAlt size={18} />
          <span style={{ marginLeft: 5 }}>LOGIN</span>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Navbar;
