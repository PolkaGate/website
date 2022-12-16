
import { Avatar, Box, Grid, Typography, Button, Link } from "@mui/material";
import React, { useCallback } from "react";
import Features from "./Features";
import Team from "./Team";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";
import Plus from "./Plus";
import Pools from "./Pools";
import Pg from "./Pg";

const Home = () => {
  const handleOpenFirefox = useCallback(() => {
    window.open(
      "https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-plus-extension/",
      "_blank"
    );
  }, []);

  const handleOpenChrome = useCallback(() => {
    window.open(
      "https://github.com/Nick-1979/polkadot-Js-Plus-extension#add-on",
      "_blank"
    );
  }, []);

  return (
    <>
      <Header />
      <Plus />
      <Pg />
      <Pools />
      <Team />
      <Footer />
    </>
  );
}

export default Home;
