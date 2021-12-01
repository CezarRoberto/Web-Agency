import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Landing } from "./pages/landing/landing";
import { Fonts } from "./theme/fonts";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingAbout } from "./pages/about/LandingAbout";
import { LandingService } from "./pages/services/LandingService";


const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
    <Fonts />
    <Header />
    <Routes>
      <Route path="/" element={<Landing />} ></Route>
      <Route path="/services"  element={<LandingService />} ></Route>
      <Route path="/about"  element={<LandingAbout />}></Route>
    </Routes>
    <Footer />
    </Router>
  </ChakraProvider>
);