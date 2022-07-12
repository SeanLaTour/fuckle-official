import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import Home from "../components/home";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <>
      {" "}
      <SEO />
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </>
  );
};

export default IndexPage;
