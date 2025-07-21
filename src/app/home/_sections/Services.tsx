"use client";

import { Box, Typography, IconButton } from "@mui/material";
import {
  FaCode,
  FaPalette,
  FaPaintBrush,
  FaSearch,
  FaArrowLeft,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={32} />,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad quam, veniam eos dicta",
  },
  {
    icon: <FaPalette size={32} />,
    title: "Web Designer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad quam, veniam eos dicta",
  },
  {
    icon: <FaPaintBrush size={32} />,
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad quam, veniam eos dicta",
  },
  {
    icon: <FaSearch size={32} />,
    title: "SEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad quam, veniam eos dicta",
  },
  {
    icon: <FaCode size={32} />,
    title: "Custom Website Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad quam, veniam eos dicta",
  },
  {
    icon: <FaCode size={32} />,
    title: "Landing Page Developement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad quam, veniam eos dicta",
  },
];

export default function Services() {
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
      <Typography
        sx={{
          fontSize: "34px",
          fontWeight: "700",
          textAlign: "center",
          mb: "16px",
        }}
      >
        My <span style={{ color: "text.pramiry" }}>Services</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: "370px",
              width: "100%",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              borderRadius: 3,
              color: "background.default",
              bgcolor: "text.primary",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  color: "background.default",
                }}
              >
                {service.icon}
              </Box>
              <IconButton sx={{ color: "background.default" }}>
                <FaArrowLeft />
              </IconButton>
            </Box>
            <Box sx={{}}>
              <Typography
                sx={{ fontSize: "20px", fontWeight: "600", }}
              >
                {service.title}
              </Typography>
              <Typography
                sx={{ fontSize: "16px", my: 1, color: "text.pramiry" }}
              >
                {service.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
