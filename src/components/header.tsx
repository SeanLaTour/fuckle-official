import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillBarChartFill, BsFillQuestionCircleFill } from "react-icons/bs";

interface HeaderProps {
  onOpen: Function;
  setToggleStats: Function;
  setToggleAbout: Function;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Box
      borderBottomWidth={"1px"}
      borderBottomColor={"#444"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100vw"}
      height={"10vh"}
      backgroundColor={"#171717"}
      paddingInline={"2rem"}
    >
      <BsFillQuestionCircleFill
        onClick={() => {
          props.setToggleAbout(true);
          props.setToggleStats(false);
          props.onOpen();
        }}
        color="grey"
      />
      <Text fontFamily={"monospace"} fontSize={"2.5rem"} color={"#cdcdcd"}>
        FUCKLE
      </Text>
      <BsFillBarChartFill
        onClick={() => {
          props.setToggleStats(true);
          props.setToggleAbout(false);
          props.onOpen();
        }}
        color="grey"
      />
    </Box>
  );
};

export default Header;
