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
    image: "/images/gallery/packaging.jpg",
    category: "Packaging & Label Design",
  },
  {
    title: "Fashion Design",
    image: "/images/gallery/fashion.jpg",
    category: "Fashion Design",
  },
  {
    title: "Brochure",
    image: "/images/gallery/brochure-1.jpg",
    category: "Brochure Design",
  },
  {
    title: "Architecture",
    image: "/images/gallery/architecture-1.jpg",
    category: "Architecture",
  },
  {
    title: "Poster",
    image: "/images/gallery/poster.jpg",
    category: "Poster Design",
  },
  {
    title: "Logo",
    image: "/images/gallery/logo-1.jpg",
    category: "Logo Design",
  },
  {
    title: "Illustration 2",
    image: "/images/gallery/illustration-2.jpg",
    category: "Illustration",
  },
  {
    title: "Concept Art",
    image: "/images/gallery/concept-art.jpg",
    category: "Concept Art",
  },
  {
    title: "Brochure 2",
    image: "/images/gallery/brochure-2.jpg",
    category: "Brochure Design",
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
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(255,255,255,0.8)",
                  "&:hover": { backgroundColor: "white" },
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Box>

            <CardContent>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {item.category}
              </Typography>
            </CardContent>
          </Box>
        ))}
      </Masonry>
    </Box>
  );
}
