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
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          textAlign: "justify",
        }}
      >
        <Box sx={{ maxWidth: 750 }}>
          <Typography sx={{ fontSize: "34px", fontWeight: "700" }}>
            Abdullah Muaz
          </Typography>

          <Typography sx={{ fontSize: "24px", fontWeight: "600", my: "8px" }}>
            I&apos;m a <span>Frontend Developer</span>
          </Typography>

          <Typography sx={{ fontSize: "18px", my: 2 }}>
            I’m a passionate front-end developer and Computer Science graduate
            with over 1 year of hands-on experience in crafting modern,
            responsive, and user-centric web applications. My expertise lies in
            HTML5, CSS3, JavaScript, React.js, and Next.js, with a strong focus
            on delivering functional, visually compelling, and accessible
            interfaces.
          </Typography>
          <Typography sx={{ fontSize: "18px", my: 2 }}>
            I specialize in building engaging user experiences through clean
            code, intuitive design, and performance optimization. With a solid
            understanding of front-end architecture and a continuous learning
            mindset, I strive to develop applications that not only meet
            business objectives but also enhance usability. I aim to create
            solutions that drive business growth and improve overall user
            experience.
          </Typography>

          <Box sx={{ paddingTop: "30px" }}>
            <Button
              variant="contained"
              sx={{
                color: "background.default",
                bgcolor: "text.primary",
                textTransform: "none",
                fontWeight: "600",
                paddingX: 3,
                paddingY: 1.5,
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#1c2a3a", // hover effect
                  color: "white",
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
