import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import Home from "../components/home";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <>
      {" "}
      <SEO />
      <h1 style={{ display: "none" }}>
        Shit, piss, fuck, cunt, cocksucker, motherfucker, tits, fart, dirty
        twat!
      </h1>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </>
  );
};

export default IndexPage;
