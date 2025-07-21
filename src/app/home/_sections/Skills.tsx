"use client";
import React from "react";
import Marquee from "react-fast-marquee";

import { Box, Typography } from "@mui/material";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { icon: <SiHtml5 size={80} color="#E44D26" />, label: "HTML5" },
  { icon: <SiCss3 size={80} color="#1572B6" />, label: "CSS3" },
  { icon: <SiJavascript size={80} color="#F7DF1E" />, label: "JavaScript" },
  { icon: <SiReact size={80} color="#61DBFB" />, label: "React.js" },
  { icon: <SiNextdotjs size={80} color="#000000" />, label: "Next.js" },
  { icon: <SiNodedotjs size={80} color="#3C873A" />, label: "Node.js" },
  { icon: <SiGit size={80} color="#F1502F" />, label: "Git" },
  { icon: <SiGithub size={80} color="#000000" />, label: "GitHub" },
  { icon: <SiTypescript size={80} color="#3178C6" />, label: "TypeScript" },
  {
    icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
        alt="Material UI"
        width={80}
        height={80}
      />
    ),
    label: "Material UI",
  },
];

export default function Skills() {
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
          color: "text.pramiry",
        }}
      >
        Skills
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          pb: "16px",
          maxWidth: "700px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit
        facere iste consectetur delectus pariatur sequi eius inventore libero
        sapiente facilis illo labore unde repudiandae.
      </Typography>

      <Marquee pauseOnHover speed={150} gradient={false}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
          }}
        >
          {skills.map((skill, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mx: 5,
                my: "16px",
              }}
              key={index}
            >
              <Typography>{skill.icon}</Typography>
              <Typography
                sx={{ fontSize: "18px", my: "16px", fontWeight: "600" }}
              >
                {skill.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Marquee>
    </Box>
  );
}
