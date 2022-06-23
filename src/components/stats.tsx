import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

interface StatsProps {
  stats: object;
  onClose: Function;
}

const Stats: React.FC<StatsProps> = (props) => {
  console.log("stats stats: ", props.stats);
  const getPercent = (number) => {
    console.log(
      props.stats.one,
      props.stats.two,
      props.stats.three,
      props.stats.four,
      props.stats.five,
      props.stats.six
    );
    const total =
      props.stats.one +
      props.stats.two +
      props.stats.three +
      props.stats.four +
      props.stats.five +
      props.stats.six;
    console.log(total);
    return (number / total) * 100;
  };
  console.log(getPercent(props.stats.six));
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
      borderColor={"white"}
      height={"42vh"}
      backgroundColor="#111"
    >
      <Text
        marginTop={"-1rem"}
        marginBottom={"1rem"}
        fontSize={"1.5rem"}
        color={"silver"}
      >
        STATS
      </Text>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"silver"}>
          1
        </Text>

        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.one)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.one}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"silver"}>
          2
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.two)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.two}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"silver"}>
          3
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.three)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.three}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"silver"}>
          4
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.four)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.four}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"silver"}>
          5
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.five)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.five}
        </Text>
      </Box>
      <Box
        width={"95%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"2rem"} marginInline={".5rem"} color={"silver"}>
          F
        </Text>
        <Box
          alignItems={"center"}
          height={"1rem"}
          width={"95%"}
          justifyContent={"left"}
        >
          <Box
            borderRadius={"3px"}
            backgroundColor={"green"}
            height={"1rem"}
            width={`${getPercent(props.stats.six)}%`}
          ></Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={"0.5.5rem"}>
          {" "}
          {props.stats.six}
        </Text>
      </Box>
      <Button
        onClick={props.onClose}
        fontWeight={"bold"}
        borderRadius={"5px"}
        paddingBlock={".25rem"}
        paddingInline={"1rem"}
        marginTop={"2rem"}
        backgroundColor={"silver"}
      >
        Close
      </Button>
    </Box>
  );
};

export default Stats;
