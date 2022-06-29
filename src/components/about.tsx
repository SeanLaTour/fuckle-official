import { Box, Button, Divider, Text } from "@chakra-ui/react";
import React from "react";

interface AboutProps {
  onClose: Function;
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <Box
      display={"flex"}
      borderRadius={"5px"}
      padding="2rem"
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      width={"85vw"}
      borderWidth={"2px"}
      borderColor={"#565656"}
      height={"60vh"}
      backgroundColor="#111"
      marginTop={"-17vh"}
    >
      <Text
        marginBottom={".5rem"}
        fontFamily={"monospace"}
        fontSize={"1.5rem"}
        color={"#cdcdcd"}
      >
        How to play
      </Text>
      <Divider
        marginBottom={"1.5rem"}
        height={"2px"}
        backgroundColor={"#565656"}
        width={"85%"}
      />
      <Text
        width={"85%"}
        marginBottom={".25rem"}
        textAlign={"left"}
        fontFamily={"monospace"}
        fontSize={".6rem"}
        color={"#cdcdcd"}
      >
        Type in your guess and click "enter"
      </Text>
      <Text
        width={"85%"}
        marginBottom={".25rem"}
        textAlign={"left"}
        fontFamily={"monospace"}
        fontSize={".6rem"}
        color={"#cdcdcd"}
      >
        Green indicates the letter is in the correct position
      </Text>
      <Text
        width={"85%"}
        marginBottom={".25rem"}
        textAlign={"left"}
        fontFamily={"monospace"}
        fontSize={".6rem"}
        color={"#cdcdcd"}
      >
        Yellow indicates the letter is not in the correct position but is
        included in the word
      </Text>
      <Text
        width={"85%"}
        marginBottom={".25rem"}
        textAlign={"left"}
        fontFamily={"monospace"}
        fontSize={".6rem"}
        color={"#cdcdcd"}
      >
        No color means that the letter is not included in the word
      </Text>
      <Text
        width={"85%"}
        marginBottom={".25rem"}
        textAlign={"left"}
        fontFamily={"monospace"}
        fontSize={".6rem"}
        color={"#cdcdcd"}
      >
        You have just five tries to guess the correct four letter word! Fuckle
        will only give you cuss words and words that allude to nasty and kinky
        things.
      </Text>
      <Text
        width={"85%"}
        marginBottom={".25rem"}
        textAlign={"left"}
        fontFamily={"monospace"}
        fontSize={".6rem"}
        color={"#cdcdcd"}
      >
        Remember, you can only fuckle yourself once a day, so make every guess
        worth it!
      </Text>
      <Button
        onClick={props.onClose}
        fontWeight={"bold"}
        borderRadius={"5px"}
        paddingBlock={".25rem"}
        paddingInline={"1rem"}
        marginTop={"2rem"}
        backgroundColor={"#878787"}
        color={"#222"}
        width={"85%"}
      >
        Go fuckle myself
      </Button>
    </Box>
  );
};

export default About;
