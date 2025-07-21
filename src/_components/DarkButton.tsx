"use client";

import { useState } from "react";

import { Box, Switch, Typography } from "@mui/material";

export default function DarkButton() {
  const [darkMode, setDarkMode] = useState(true);

  const backgroundColor = darkMode ? "#0d1b2a" : "#f9f9f9";
  const textColor = darkMode ? "white" : "#1a1a1a";

  return (
    <Box
      sx={{
        bgcolor: backgroundColor,
        // minHeight: "100vh",
        // px: { xs: 2, md: 8 },
        // py: 6,
        color: textColor,
        fontFamily: "'Inter', sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Typography variant="body2" sx={{ mr: 1 }}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          color="default"
        />
      </Box>
    </Box>
  );
}
