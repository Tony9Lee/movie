import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <Box
      display="flex"
      position="fixed"
      top={0}
      width="100%"
      height={47}
      px={40}
      bgcolor="#212121"
      justifyContent="space-between"
    >

      <Typography fontSize={25} fontWeight={700} color="white">
        BUILDABOD
      </Typography>
      <Box display="flex" alignItems="center" ml={-65}>
        <Typography fontSize={18} color="white">
          Item 1
        </Typography>
        <Typography fontSize={18} color="white" ml={3}>
          Item 2
        </Typography>
        <Typography fontSize={18} color="white" ml={3}>
          Item 3
        </Typography>
      </Box>
      <Box>

      </Box>
    </Box>
  );
};

export default Navbar;
