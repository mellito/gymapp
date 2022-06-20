import React from "react";
import { Box, Typography, Stack } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems="center" px="20px" pt="10px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="10px">
          Made it for dayan manrique tutorial from{" "}
          <a href="https://www.youtube.com/c/JavaScriptMastery">
            JavaScriptMastery{" "}
          </a>{" "}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
