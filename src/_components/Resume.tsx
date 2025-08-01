"use client";

import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";

export default function ResumePage() {
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
      <Box sx={{ mb: "40px" }}>
        <Typography sx={{ fontSize: {xs:"38px", sm:"48px"}, fontWeight: "700" }}>
          My Resumé.
        </Typography>
        <Typography sx={{ fontSize: "16px", mt: "6px" }}>
          Reach out to me via my{" "}
          <Link href="/contact-us">
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                cursor: "pointer",
                color: "text.primary",
              }}
            >
              contact page
            </Typography>
          </Link>
          ,{" "}
          <Typography
            component="span"
            sx={{ fontWeight: "700", cursor: "pointer", color: "text.primary" }}
          >
            view
          </Typography>{" "}
          or{" "}
          <Typography
            component="span"
            sx={{ fontWeight: "700", cursor: "pointer", color: "text.primary" }}
          >
            download
          </Typography>{" "}
          the resume.
        </Typography>
      </Box>

      <Typography sx={{ fontSize: "34px", fontWeight: "700", mb: "6px" }}>
        Abdullah Muaz
      </Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: "500", mb: "6px" }}>
        Frontend Developer | JavaScript Engineer | UX Engineer
      </Typography>

      <Divider
        sx={{
          my: "24px",
          bgcolor: "text.primary",
          color: "background.default",
          opacity: 0.1,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: "50px",
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "600px" } }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "700", mb: "8px" }}>
            Experience
          </Typography>
          <Box sx={{ mb: "16px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                Zamp – Senior Frontend Engineer
              </Typography>
              <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
                MAY 2019 - PRESENT
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "16px" }}>
              React, Typescript, Webpack
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              Built reusable components and design systems that powered the
              frontend for Zamp’s core treasury infrastructure.
            </Typography>
          </Box>
          <Box sx={{ mb: "16px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                TechAdvance – Senior UI Engineer
              </Typography>
              <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
                MAY 2019 - PRESENT
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "16px" }}>
              React, Next.js, Chakra UI
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              Led migration from legacy UI libraries to Chakra UI, improving
              consistency and developer productivity.
            </Typography>
          </Box>
          {/* Repeat above Box for other experiences */}
        </Box>

        <Box sx={{ maxWidth: { xs: "100%", md: "550px" } }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "700", mb: "8px" }}>
            Summary
          </Typography>
          <Typography sx={{ fontSize: "16px", textAlign: "justify" }}>
            {/* Frontend developer and javascript engineer with over 1+ years of
            experience, Delivering engaging and visually compelling applications
            with user-friendly interactions that drive business growth and
            improve UX.  */}
            Frontend Developer specializing in JavaScript and modern web
            technologies. With 1+ years of experience, I build fast, engaging
            interfaces that enhance user experience and deliver business
            results. Skilled in React, Next.js, and performance optimization, I
            focus on creating clean, maintainable code that scales. Passionate
            about solving problems through technology while balancing UX,
            performance, and business need.
          </Typography>

          <Divider
            sx={{
              my: "24px",
              bgcolor: "text.primary",
              color: "background.default",
              opacity: 0.1,
            }}
          />
          <Typography sx={{ fontSize: "20px", fontWeight: "700", mb: "8px" }}>
            Contact Details
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            abdullahmuaz405@gmail.com
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Tel: +92 313 4991159
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              component="a"
              href="https://www.linkedin.com/in/abdullah-muaz-2257b632a/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "underline" }}
            >
              Linkedin
            </Typography>
            <Typography
              component="a"
              href="https://github.com/realabdullahmuaz"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "underline" }}
            >
              Github
            </Typography>
          </Box>
          <Divider
            sx={{
              my: "24px",
              bgcolor: "text.primary",
              color: "background.default",
              opacity: 0.1,
            }}
          />
          <Typography sx={{ fontSize: "20px", fontWeight: "700", mb: "8px" }}>
            Skills
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "700", mb: "8px" }}>
            Languages:
          </Typography>
          <Typography sx={{ fontSize: "16px", mb: "16px" }}>
            JavaScript, HTML 5, CSS 3, SASS, TypeScript, Tailwind CSS, Next.js, Node.js, NPM,
            Github, Git and more
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "700", mb: "8px" }}>
            Technologies:
          </Typography>
          <Typography sx={{ fontSize: "16px", mb: "16px" }}>
            JavaScript, React.js, TypeScript, Next.js, Tailwind, Material-UI,
            Node.js, Git, CI/CD, Unit Testing
          </Typography>

          <Divider
            sx={{
              my: "24px",
              bgcolor: "text.primary",
              color: "background.default",
              opacity: 0.1,
            }}
          />
          <Typography sx={{ fontSize: "20px", fontWeight: "700", mb: "8px" }}>
            Education
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
            University of the Punjab, Lahore Pakistan
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Bachelor&apos;s in Computer Science
          </Typography>

          <Divider
            sx={{
              my: "24px",
              bgcolor: "text.primary",
              color: "background.default",
              opacity: 0.1,
            }}
          />

          <Typography sx={{ fontSize: "20px", fontWeight: "700", mb: "8px" }}>
            Projects
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Portfolio Website, Dashboard App, Open Source contributions on
            GitHub.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
