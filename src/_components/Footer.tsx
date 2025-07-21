import { Box, Button, IconButton, Switch, Typography } from "@mui/material";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          padding: { xs: "20px", md: "30px 50px" },
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Box sx={{ mt: "48px", textAlign: "center" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
            Are you convinced to contact me now?
          </Typography>
          <Link href={"/contact-us"}>
            <Button variant="text" sx={{ color: "text.primary", mt: "8px" }}>
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
