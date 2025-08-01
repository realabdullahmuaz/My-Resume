"use client";

import { Box, Typography, Button, IconButton } from "@mui/material";
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        padding: { xs: "20px", md: "30px 50px" },
        fontFamily: "'Inter', sans-serif",
        transition: "all 0.3s ease",
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          // minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: 700 }}>
          <Typography sx={{ fontSize: "34px", fontWeight: "700", mb: "6px" }}>
            Abdullah Muaz
          </Typography>

          <Typography sx={{ fontSize: "24px", fontWeight: "600", mb: "6px" }}>
            I&apos;m a <span>Frontend Developer</span>
          </Typography>

          <Typography sx={{ fontSize:"16px", my: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus,
            ab doloremque fugiat hic dolor alias accusantium laboriosam minima
            sint sit delectus et doloribus, corrupti illo impedit maiores
            laudantium soluta?
          </Typography>

          <Box sx={{ paddingTop: "30px",}}>
            <Button
              variant="contained"
              sx={{
                color: "background.default",
                bgcolor: "text.primary",
                textTransform: "none",
                fontWeight:"600",
                paddingX: 3,
                paddingY: 1.5,
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#1c2a3a", // hover effect
                  color:"white"
                },
              }}
            >
              Download CV
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              gap: "16px",
              mt: "30px",
            }}
          >
            <IconButton component="a" href="#" sx={{ color: "text.primary" }}>
              <FaTwitter />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/abdullah-muaz-2257b632a/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "text.primary" }}
            >
              <FaLinkedin />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/realabdullahmuaz"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "text.primary" }}
            >
              <FaGithub />
            </IconButton>
            <IconButton component="a" href="#" sx={{ color: "text.primary" }}>
              <FaFacebook />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
