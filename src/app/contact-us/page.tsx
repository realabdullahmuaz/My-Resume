import { Box } from "@mui/material";

import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import Navbar from "@/_components/Navbar";

export default function ContactUsPage() {
  return (
    <Box>
      <Navbar />
      <ContactUs />
      <Footer />
    </Box>
  );
}
