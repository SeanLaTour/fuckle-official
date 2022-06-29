import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface TextLineProps {
  textArray: string[];
  textColors: string[];
  active: boolean;
}

const TextLine: React.FC<TextLineProps> = (props) => {
  return (
    <Box
      height={"20%"}
      justifyContent={"space-evenly"}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <Text
        fontFamily={"monospace"}
        borderColor={props.active ? "#777777" : "#474747"}
        transition="background-color 2000ms linear, border-color 1000ms linear"
        backgroundColor={props.textColors[0]}
        borderRadius={"2px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width="22%"
        borderWidth={"1px"}
        fontSize={"5vh"}
        height={"90%"}
        color={"#cdcdcd"}
      >
        {props.textArray[0]}
      </Text>
      <Text
        fontFamily={"monospace"}
        transition="background-color 2000ms linear, border-color 1000ms linear"
        backgroundColor={props.textColors[1]}
        borderRadius={"2px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width="22%"
        borderColor={props.active ? "#777777" : "#474747"}
        borderWidth={"1px"}
        fontSize={"5vh"}
        height={"90%"}
        color={"#cdcdcd"}
      >
        {props.textArray[1]}
      </Text>
      <Text
        fontFamily={"monospace"}
        transition="background-color 2000ms linear, border-color 1000ms linear"
        backgroundColor={props.textColors[2]}
        borderRadius={"2px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width="22%"
        borderColor={props.active ? "#777777" : "#474747"}
        borderWidth={"1px"}
        fontSize={"5vh"}
        height={"90%"}
        color={"#cdcdcd"}
      >
        {props.textArray[2]}
      </Text>
      <Text
        fontFamily={"monospace"}
        transition="background-color 2000ms linear, border-color 1000ms linear"
        backgroundColor={props.textColors[3]}
        borderRadius={"2px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width="22%"
        borderColor={props.active ? "#777777" : "#474747"}
        borderWidth={"1px"}
        fontSize={"5vh"}
        height={"90%"}
        color={"#cdcdcd"}
      >
        {props.textArray[3]}
      </Text>
    </Box>
  );
};

export default TextLine;
