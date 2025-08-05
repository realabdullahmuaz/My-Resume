import { Box, Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          padding: { xs: "20px", sm:"30px", md: "30px 50px" },
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Box sx={{ display:"flex", alignItems:"center", justifyContent:"center",gap:"20px", mt: "48px", textAlign: "center" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Are you convinced to contact me now?
          </Typography>
          <Link href={"/contact-us"}>
            <Button variant="text" sx={{
                color: "background.default",
                bgcolor: "text.primary",
                textTransform: "none",
                fontWeight:"600",
                // paddingX: 3,
                // paddingY: 1.5,`
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#1c2a3a", // hover effect
                  color:"white"
                },
              }}>
              →
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            mt: "32px",
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
            <FaInstagram />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
