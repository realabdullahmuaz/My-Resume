"use client";

import { Typography, Switch, Box } from "@mui/material";
import { useThemeToggle } from "@/utils/themes";
import Link from "next/link";

export default function Navbar() {
  const { toggleColorMode, mode } = useThemeToggle();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "20px",sm:"30px", md: "30px 50px" },
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <Link href={"/"}>
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "20px",
          display: { xs: "none", sm: "block" },
        }}
      >
        Portfolio
      </Typography>
      </Link>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "15px", sm: "30px" },
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>About</Typography>
        <Typography sx={{ fontSize: "20px" }}>Projects</Typography>
        <Link href={"/contact-us"}>
        <Typography sx={{ fontSize: "20px" }}>Contact</Typography>
        </Link>
        <Link href={"/resume"}>
        <Typography sx={{ fontSize: "20px" }}>Resume</Typography>
        </Link>
      </Box>
      <Switch
        checked={mode === "dark"}
        onChange={toggleColorMode}
        color="default"
      />
    </Box>
  );
}
