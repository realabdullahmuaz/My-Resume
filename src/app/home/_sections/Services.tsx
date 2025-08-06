"use client";

import Grid from "@mui/material/Grid";
import { Box, Typography, IconButton } from "@mui/material";
import { FaFileAlt, FaShoppingCart, FaTools } from "react-icons/fa";
import { FaArrowLeft, FaCode, FaGlobe, FaLaptopCode } from "react-icons/fa6";

const services = [
  {
    icon: <FaLaptopCode size={36} />,
    title: "Frontend Web Developer",
    desc: "As a frontend web developer, I specialize in creating responsive, accessible, and visually engaging user interfaces that deliver smooth and intuitive digital experiences. With a strong command of modern technologies like HTML, CSS, JavaScript, React, and Next.js, I build fast, scalable frontends that not only look great but also perform flawlessly across all devices. My approach combines clean code, design precision, and a focus on user experience to bring each project to life with clarity and impact.",
  },
  {
    icon: <FaGlobe size={36} />,
    title: "Web Development",
    desc: "I offer end-to-end web development services that bring ideas to life through clean code, modern design, and a focus on performance. Whether you're building a business website, blog, or dynamic web application, I develop fast, responsive, and SEO-friendly sites tailored to your goals. With a strong attention to detail and a user-first approach, I ensure every website is scalable, secure, and built to deliver a seamless experience across all devices.",
  },
  {
    icon: <FaTools size={36} />,
    title: "Web Application Development",
    desc: "I build scalable, high-performance web applications tailored to your specific business needs—whether it’s a custom CRM, project management tool, or client-facing portal. Leveraging modern frameworks like React, Next.js, and other cutting-edge technologies, I create responsive, secure, and user-friendly solutions that streamline workflows and enhance operational efficiency. From concept to deployment, I focus on delivering reliable applications that support your business goals and are built to scale as you grow.",
  },
  {
    icon: <FaShoppingCart size={36} />,
    title: "E-commerce Development",
    desc: "I design and develop secure, high-performing e-commerce websites that make it easy for businesses to sell online with confidence. Whether you're launching a new store or optimizing an existing one, I focus on creating seamless shopping experiences with responsive design, smooth checkout flows, and secure payment integrations. With experience across platforms like Shopify, WooCommerce, and custom solutions, I build online stores that not only look great but also drive engagement, boost conversions, and support long-term business growth.",
  },
  {
    icon: <FaCode size={36} />,
    title: "Custom Web Development",
    desc: "I specialize in crafting custom websites that align with your unique goals and brand identity. Whether you're starting fresh or looking to enhance your current website, I take a collaborative approach to deliver clean, responsive, and scalable web solutions that not only look great but work seamlessly across devices. With a strong focus on quality, performance, and long-term value, I aim to build websites that grow with your business and reflect the care and attention your project deserves.",
  },
  {
    icon: <FaFileAlt size={36} />,
    title: "Landing Page Development",
    desc: "I create high-converting landing pages designed to capture attention and drive action. Whether you need a promotional page, product launch, or lead generation funnel, I focus on clean design, clear messaging, and optimized performance to deliver pages that not only look great but also achieve real results. Every landing page is built with responsiveness, speed, and user experience in mind—ensuring it performs flawlessly across all devices and helps you meet your marketing goals.",
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
          mb: "32px",
        }}
      >
        My <span style={{ color: "text.pramiry" }}>Services</span>
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: { xs: "350px", md: "400px" },
              width: "100%",
              p: { xs: "20px", md: "25px" },
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              borderRadius: 3,
              color: "background.default",
              bgcolor: "text.primary",
              boxShadow: 6,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-15px)",
                boxShadow: 10,
              },
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
              <IconButton
                sx={{
                  color: "background.default",
                  backgroundColor: "#8686861a",
                  backdropFilter: "blur(20px)",
                }}
              >
                <FaArrowLeft />
              </IconButton>
            </Box>
            <Box sx={{ textAlign: "justify" }}>
              <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
                {service.title}
              </Typography>
              <Typography
                sx={{ fontSize: "18px", my: 1, color: "text.pramiry" }}
              >
                {service.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
