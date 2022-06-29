import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

interface StatsProps {
  stats: object;
  onClose: Function;
}

const Stats: React.FC<StatsProps> = (props) => {
  const getTotalTimesPlayed = () => {
    if (!props.stats) {
      return 0;
    }
    const total =
      props.stats.one +
      props.stats.two +
      props.stats.three +
      props.stats.four +
      props.stats.five +
      props.stats.six;
    return total;
  };

  const getPercent = (number) => {
    if (!props.stats) {
      return 0;
    }
    const total =
      props.stats.one +
      props.stats.two +
      props.stats.three +
      props.stats.four +
      props.stats.five +
      props.stats.six;

    return (number / total) * 100;
  };

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
        fontFamily={"monospace"}
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
        marginBottom={"1rem"}
      >
        <Text width={"2rem"} marginInline={"1rem"} color={"silver"}>
          Games
        </Text>

        <Text width={"2rem"} marginInline={".25rem"} color={"silver"}>
          {getTotalTimesPlayed()}
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
            display={"flex"}
            alignItems={"center"}
            backgroundColor={"#4b7a47"}
            height={"1rem"}
            width={`${getPercent(props.stats ? props.stats.one : 0)}%`}
            justifyContent={"right"}
          >
            <Text marginRight={".25rem"} color="#111" fontSize={".4rem"}>
              {props.stats &&
              Number(getPercent(props.stats ? props.stats.one : 0).toFixed(1)) >
                15
                ? `${getPercent(props.stats ? props.stats.one : 0).toFixed(1)}%`
                : ""}
            </Text>
          </Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={".5rem"}>
          {" "}
          {props.stats ? props.stats.one : 0}
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
            display={"flex"}
            alignItems={"center"}
            backgroundColor={"#4b7a47"}
            height={"1rem"}
            width={`${getPercent(props.stats ? props.stats.two : 0)}%`}
            justifyContent={"right"}
          >
            <Text marginRight={".25rem"} color="#111" fontSize={".4rem"}>
              {props.stats &&
              Number(getPercent(props.stats ? props.stats.two : 0).toFixed(1)) >
                15
                ? `${getPercent(props.stats ? props.stats.two : 0).toFixed(1)}%`
                : ""}
            </Text>
          </Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={".5rem"}>
          {" "}
          {props.stats ? props.stats.two : 0}
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
            display={"flex"}
            alignItems={"center"}
            backgroundColor={"#4b7a47"}
            height={"1rem"}
            width={`${getPercent(props.stats ? props.stats.three : 0)}%`}
            justifyContent={"right"}
          >
            <Text marginRight={".25rem"} color="#111" fontSize={".4rem"}>
              {props.stats &&
              Number(
                getPercent(props.stats ? props.stats.three : 0).toFixed(1)
              ) > 15
                ? `${getPercent(props.stats ? props.stats.three : 0).toFixed(
                    1
                  )}%`
                : ""}
            </Text>
          </Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={".5rem"}>
          {" "}
          {props.stats ? props.stats.three : 0}
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
            display={"flex"}
            alignItems={"center"}
            backgroundColor={"#4b7a47"}
            height={"1rem"}
            width={`${getPercent(props.stats ? props.stats.four : 0)}%`}
            justifyContent={"right"}
          >
            <Text marginRight={".25rem"} color="#111" fontSize={".4rem"}>
              {props.stats &&
              Number(
                getPercent(props.stats ? props.stats.four : 0).toFixed(1)
              ) > 15
                ? `${getPercent(props.stats ? props.stats.four : 0).toFixed(
                    1
                  )}%`
                : ""}
            </Text>
          </Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={".5rem"}>
          {" "}
          {props.stats ? props.stats.four : 0}
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
            display={"flex"}
            alignItems={"center"}
            backgroundColor={"#4b7a47"}
            height={"1rem"}
            width={`${getPercent(props.stats ? props.stats.five : 0)}%`}
            justifyContent={"right"}
          >
            <Text marginRight={".25rem"} color="#111" fontSize={".4rem"}>
              {props.stats &&
              Number(
                getPercent(props.stats ? props.stats.five : 0).toFixed(1)
              ) > 15
                ? `${getPercent(props.stats ? props.stats.five : 0).toFixed(
                    1
                  )}%`
                : ""}
            </Text>
          </Box>
        </Box>
        <Text width={"2rem"} color={"silver"} marginInline={".5rem"}>
          {" "}
          {props.stats ? props.stats.five : 0}
        </Text>
      </Box>

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
        Close
      </Button>
    </Box>
  );
};

export default Stats;
