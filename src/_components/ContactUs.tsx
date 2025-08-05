import { Box, Typography, TextField, Button, IconButton } from "@mui/material";

import { FaEnvelope } from "react-icons/fa6";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarked,
  FaPhone,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        padding: { xs: "20px",sm:"30px", md: "30px 50px" },
        fontFamily: "'Inter', sans-serif",
        transition: "all 0.3s ease",
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <Box sx={{ py: "10px" }}>
        <Typography
          sx={{ color: "text.primary", fontSize: "40px", fontWeight: "600" }}
        >
          Contact me
        </Typography>
        <Typography sx={{ color: "text.primary" }}>
          Any question or remarks? Just write a message!
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "background.default",
          padding: { xs: "10px 0px", lg: "40px" },
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: "30px", lg: "50px" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // gap: { xs: "40px", md: "80px" },
              maxWidth: { xs: "360px", md: "400px" },
              width: "100%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "text.primary",
                  fontSize: "30px",
                  fontWeight: "600",
                  mb: "24px",
                }}
              >
                Say something to start a live chat!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "14px", md: "24px" },
              }}
            >
              <Box
                sx={{
                  bgcolor: "text.primary",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "5px", md: "16px" },
                  height: "78px",
                  padding: { xs: "15px", md: "20px" },
                  transition: "border 0.3s ease",
                  "&:hover": {
                    background: "#EEF4FF", // soft blue tint
                    border: "3px solid #1a1a1a", // vibrant blue border
                    color: "#1a1a1a",
                  },
                }}
              >
                <IconButton sx={{ color: "background.default" }}>
                  <FaEnvelope />
                </IconButton>
                <Typography
                  sx={{
                    color: "background.default",
                    fontSize: { xs: "16px", md: "20px" },
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#1a1a1a", 
                    },
                  }}
                >
                  abdullahmuaz405@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "text.primary",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", md: "16px" },
                  height: "78px",
                  padding: { xs: "15px", md: "20px" },
                  transition: "border 0.3s ease",
                  "&:hover": {
                    background: "#EEF4FF", // soft blue tint
                    border: "3px solid #1a1a1a", // vibrant blue border
                  },
                }}
              >
                <IconButton
                  sx={{
                    color: "background.default",
                    transform: "rotate(90deg)",
                  }}
                >
                  <FaPhone />
                </IconButton>
                <Typography
                  sx={{
                    color: "background.default",
                    fontSize: { xs: "16px", md: "20px" },
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#1a1a1a", // optional deeper blue on hover
                    },
                  }}
                >
                  +92 3134991159
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "text.primary",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "10px", md: "16px" },
                  height: "78px",
                  padding: { xs: "15px", md: "20px" },
                  transition: "border 0.3s ease",
                  "&:hover": {
                    background: "#EEF4FF", // soft blue tint
                    border: "3px solid #1a1a1a", // vibrant blue border
                  },
                }}
              >
                <IconButton sx={{ color: "background.default" }}>
                  <FaMapMarked />
                </IconButton>
                <Typography
                  sx={{
                    color: "background.default",
                    fontSize: { xs: "16px", md: "20px" },
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#1a1a1a", // optional deeper blue on hover
                    },
                  }}
                >
                  Model Town Lahore, Pakistan
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: "32px",
                my: "24px",
              }}
            >
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
          <Box
            sx={{
              bgcolor: "text.primary",
              padding: { xs: "15px", md: "30px", lg: "40px" },
              borderRadius: { xs: "20px", md: "20px" },
              maxWidth: { xs: "360px", md: "700px" },
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "10px", md: "20px" },
                // maxWidth: "500px",
                // width:"100%"
              }}
            >
              <TextField
                sx={{
                  input: {
                    color: "background.default",
                  },
                  "& .MuiInputLabel-root": {
                    color: "background.default",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                  // "& .MuiInput-underline:hover:before": {
                  //   borderBottom: "2px solid",
                  //   borderColor: "background.default",
                  // },
                  "& .MuiInput-underline:after": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                }}
                id="standard-basic"
                label="Your Name"
                variant="standard"
                fullWidth
              />
              <TextField
                sx={{
                   input: {
                    color: "background.default",
                  },
                  "& .MuiInputLabel-root": {
                    color: "background.default",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                  // "& .MuiInput-underline:hover:before": {
                  //   borderBottom: "2px solid",
                  //   borderColor: "background.default",
                  // },
                  "& .MuiInput-underline:after": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                }}
                id="standard-basic"
                label="Your Email"
                variant="standard"
                fullWidth
              />
              <TextField
                sx={{
                   input: {
                    color: "background.default",
                  },
                  "& .MuiInputLabel-root": {
                    color: "background.default",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                  // "& .MuiInput-underline:hover:before": {
                  //   borderBottom: "2px solid",
                  //   borderColor: "background.default",
                  // },
                  "& .MuiInput-underline:after": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                }}
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                fullWidth
              />
              <TextField
                sx={{
                   input: {
                    color: "background.default",
                  },
                  "& .MuiInputLabel-root": {
                    color: "background.default",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                  // "& .MuiInput-underline:hover:before": {
                  //   borderBottom: "2px solid",
                  //   borderColor: "background.default",
                  // },
                  "& .MuiInput-underline:after": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                }}
                id="standard-basic"
                label="Subject"
                variant="standard"
                fullWidth
              />
              <TextField
                sx={{
                   input: {
                    color: "background.default !important" ,
                  },
                  "& .MuiInputLabel-root": {
                    color: "background.default",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                  // "& .MuiInput-underline:hover:before": {
                  //   borderBottom: "2px solid",
                  //   borderColor: "background.default",
                  // },
                  "& .MuiInput-underline:after": {
                    borderBottom: "2px solid",
                    borderColor: "background.default",
                  },
                }}
                id="standard-basic"
                label="Your Message"
                variant="standard"
                multiline
                minRows={4}
                fullWidth
              />
            </Box>
            <Box sx={{ paddingTop: { xs: "40px", md: "50px" } }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "background.default",
                  color: "text.primary",
                  fontWeight:"600",
                  textTransform: "none",
                  paddingX: 3,
                  paddingY: 1.5,
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#1c2a3a", // hover effect
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
