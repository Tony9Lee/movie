import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";

const handleSubmit = (event) => {
  event.preventDefault();
  // Handle registration logic here
};

const Featured = () => {
  return (
    <Box display="flex" direction="row" alignItems="flex-start">
      <Stack
        px={20}
        marginLeft={-60}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <img src="./public/g.webp" style={{ borderRadius: "10px" }} />
      </Stack>
      <Box sx={{ paddingTop: "150px", width: "100%" }}>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          HAIL HERO!
        </Typography>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          ARE YOU READY?
        </Typography>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          FITNESS FROM THE GODS!!
        </Typography>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          REGISTER TO CUSTOMIZE
        </Typography>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          THESE WORKOUTS & MEALPLAN
        </Typography>
        <Box mt={4}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <Input id="firstName" name="firstName" type="text" />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <Input id="lastName" name="lastName" type="text" />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" type="email" />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" name="password" type="password" />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
              />
            </FormControl>
            <Box textAlign="center" mt={4}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  backgroundColor: "#000",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#111",
                    boxShadow: "none",
                  },
                }}
              >
                Register
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Featured;
