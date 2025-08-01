"use client";

import * as React from "react";
import {
  Box,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";

const galleryItems = [
  {
    title: "Illustration",
    image: "/image1.jpeg",
    category: "Illustration",
  },
  {
    title: "Packaging",
    image: "/image4.webp",
    category: "Packaging & Label Design",
  },
  {
    title: "Fashion Design",
    image: "/image1.jpeg",
    category: "Fashion Design",
  },
  {
    title: "Brochure",
    image: "/image4.webp",
    category: "Brochure Design",
  },
  {
    title: "Architecture",
    image: "/image1.jpeg",
    category: "Architecture",
  },
  {
    title: "Poster",
    image: "/image1.jpeg",
    category: "Poster Design",
  },
  {
    title: "Logo",
    image: "/image4.webp",
    category: "Logo Design",
  },
  {
    title: "Illustration 2",
    image: "/image4.webp",
    category: "Illustration",
  },
 
];

export default function Projects() {
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
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {galleryItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "#8686861a",
                  backdropFilter: "blur(20px)",
                  "&:hover": { backgroundColor: "white" },
                }}
              >
                <FavoriteBorderIcon sx={{background:"transparent", color:"background.default"}}/>
              </IconButton>
            </Box>

            <CardContent>
              <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "text.pramiry" }}>
                {item.category}
              </Typography>
            </CardContent>
          </Box>
        ))}
      </Masonry>
    </Box>
  );
}
