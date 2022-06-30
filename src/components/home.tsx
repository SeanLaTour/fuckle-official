import {
  Box,
  Modal,
  useDisclosure,
  Text,
  ModalOverlay,
  ModalContent,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import TextLine from "./text_line";
import {
  CUSS_WORDS,
  CUSS_WORDS_APRIL,
  CUSS_WORDS_AUGUST,
  CUSS_WORDS_DECEMBER,
  CUSS_WORDS_FEB,
  CUSS_WORDS_JAN,
  CUSS_WORDS_JULY,
  CUSS_WORDS_JUNE,
  CUSS_WORDS_MARCH,
  CUSS_WORDS_MAY,
  CUSS_WORDS_NOVEMBER,
  CUSS_WORDS_OCTOBER,
  CUSS_WORDS_SEPTEMBER,
} from "./cuss_words";
import Keyboard from "./keyboard";
import Stats from "./stats";
import AdSense from "react-adsense";
import AdComponent from "./GoogleAds";
import Header from "./header";
import About from "./about";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const date = new Date();
  const isBrowser = typeof window !== "undefined";
  const [lastDate, setLastDate] = useState(
    isBrowser && window.localStorage.getItem("fuckle-last-played")
      ? window.localStorage.getItem("fuckle-last-played")
      : ""
  );
  const [toggleStats, setToggleStates] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  const [stats, setStats] = useState(
    isBrowser && window.localStorage.getItem("fuckle-stats")
      ? JSON.parse(window.localStorage.getItem("fuckle-stats"))
      : {
          one: 0,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          six: 0,
        }
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalText, setModalText] = useState("");
  const [allUsedLetters, setAllUsedLetters] = useState("");
  const [textA, setTextA] = useState([]);
  const [textB, setTextB] = useState([]);
  const [textC, setTextC] = useState([]);
  const [textD, setTextD] = useState([]);
  const [textE, setTextE] = useState([]);
  const [textAColors, setTextAColors] = useState([
    "#272727",
    "#272727",
    "#272727",
    "#272727",
  ]);
  const [textBColors, setTextBColors] = useState([
    "#272727",
    "#272727",
    "#272727",
    "#272727",
  ]);
  const [textCColors, setTextCColors] = useState([
    "#272727",
    "#272727",
    "#272727",
    "#272727",
  ]);
  const [textDColors, setTextDColors] = useState([
    "#272727",
    "#272727",
    "#272727",
    "#272727",
  ]);
  const [textEColors, setTextEColors] = useState([
    "#272727",
    "#272727",
    "#272727",
    "#272727",
  ]);

  const getMonthWords = (month) => {
    switch (month) {
      case 0:
        return CUSS_WORDS_JAN;
      case 1:
        return CUSS_WORDS_FEB;
      case 2:
        return CUSS_WORDS_MARCH;
      case 3:
        return CUSS_WORDS_APRIL;
      case 4:
        return CUSS_WORDS_MAY;
      case 5:
        return CUSS_WORDS_JUNE;
      case 6:
        return CUSS_WORDS_JULY;
      case 7:
        return CUSS_WORDS_AUGUST;
      case 8:
        return CUSS_WORDS_SEPTEMBER;
      case 9:
        return CUSS_WORDS_OCTOBER;
      case 10:
        return CUSS_WORDS_NOVEMBER;
      case 11:
        return CUSS_WORDS_DECEMBER;
      default:
        return CUSS_WORDS_JAN;
    }
  };
  const [currentLine, setCurrentLine] = useState(1);
  const [cussWord, setCussWord] = useState(
    getMonthWords(date.getMonth())[date.getDate()].word
  );
  const [cussWordDetails, setCussWordDetails] = useState(
    getMonthWords(date.getMonth())[date.getDate()]
  );

  const setStatsFromCurrentGame = (attempts) => {
    switch (attempts) {
      case 6:
        setStats((stats) => (stats.six += 1));
        break;
      case 1:
        setStats((stats) => (stats.one += 1));
        break;
      case 2:
        setStats((stats) => (stats.two += 1));
        break;
      case 3:
        setStats((stats) => (stats.three += 1));
        break;
      case 4:
        setStats((stats) => (stats.four += 1));
        break;
      case 5:
        setStats((stats) => (stats.five += 1));
        break;
    }
  };

  const translateNumberToText = (number: number) => {
    switch (number) {
      case 1:
        return "Fuck yeah! One try!";
      case 2:
        return "Damn son! Two tries!";
      case 3:
        return "Hell yeah! Three tries!";
      case 4:
        return "Good Shit! Four tries!";
      case 5:
        return "Fuuuck that was close!";
    }
  };

  const checkIfMatch = (
    word: string[],
    cussword: string,
    setColors: Function,
    setAllUsedLetters: Function
  ) => {
    const compareWord = cussword.split("");
    const tempColorsArray = [];
    if (word.length !== 4) return;
    if (word.join("") !== cussword) {
      setCurrentLine(currentLine + 1);
    }
    const alreadyUsedLetters = [];

    const findDoubleLetters = (word) => {
      for (let i = 0; i <= 3; i++) {
        for (let j = i; j <= 3; j++) {
          if (word[i] === word[j + 1]) {
            return word[i];
          }
        }
        if (word[i] === word[i - 1]) {
          return word[i];
        }
      }
    };

    const doubleLetters = [];
    doubleLetters.push(findDoubleLetters(compareWord));
    for (let i = 0; i <= 3; i++) {
      if (word[i] === compareWord[i]) {
        tempColorsArray.push("#4b7a47");
      } else if (
        cussword.includes(word[i]) &&
        !alreadyUsedLetters.includes(word[i])
      ) {
        tempColorsArray.push("#d6bc5c");
      } else if (doubleLetters.includes(word[i])) {
        tempColorsArray.push("#d6bc5c");
      } else {
        tempColorsArray.push("#272727");
      }
      alreadyUsedLetters.push(word[i]);
    }
    setColors(tempColorsArray);

    setAllUsedLetters(allUsedLetters + word.join(""));

    if (word.join("") === cussword) {
      setModalText(`${translateNumberToText(currentLine)}`);
      setToggleStates(false);
      setToggleAbout(false);
      setStatsFromCurrentGame(currentLine);
      setTimeout(() => {
        isBrowser
          ? window.localStorage.setItem("fuckle-stats", JSON.stringify(stats))
          : stats;
        isBrowser
          ? window.localStorage.setItem(
              "fuckle-last-played",
              JSON.stringify(date.getDate())
            )
          : "";
        onOpen();
      }, 2000);
    }
    if (word.join("") !== cussword && currentLine === 5) {
      setModalText(
        `That one was tough! Don't beat yourself up, you'll get it next time! The word was ${cussWord}!`
      );
      setToggleStates(false);
      setToggleAbout(false);
      setStatsFromCurrentGame(6);
      setTimeout(() => {
        isBrowser
          ? window.localStorage.setItem("fuckle-stats", JSON.stringify(stats))
          : stats;
        isBrowser
          ? window.localStorage.setItem(
              "fuckle-last-played",
              JSON.stringify(date.getDate())
            )
          : "";
        onOpen();
      }, 2000);
    }
  };

  const enterChecker = (line: number) => {
    if (currentLine > 5) return;
    switch (line) {
      case 1:
        checkIfMatch(textA, cussWord, setTextAColors, setAllUsedLetters);
        break;
      case 2:
        checkIfMatch(textB, cussWord, setTextBColors, setAllUsedLetters);
      case 3:
        checkIfMatch(textC, cussWord, setTextCColors, setAllUsedLetters);
      case 4:
        checkIfMatch(textD, cussWord, setTextDColors, setAllUsedLetters);
      case 5:
        checkIfMatch(textE, cussWord, setTextEColors, setAllUsedLetters);
    }
  };

  const textInput = (word: string, setFunction: Function) => {
    const wordArray = word.toUpperCase().split("");
    setFunction(wordArray);
  };

  const addTextToLine = (word: string) => {
    switch (currentLine) {
      case 1:
        textInput(word, setTextA);
        break;
      case 2:
        textInput(word, setTextB);
        break;
      case 3:
        textInput(word, setTextC);
        break;
      case 4:
        textInput(word, setTextD);
        break;
      case 5:
        textInput(word, setTextE);
        break;
    }
  };

  const determineLine = (currentLine: number) => {
    switch (currentLine) {
      case 1:
        return { text: textA, setText: setTextA };
      case 2:
        return { text: textB, setText: setTextB };
      case 3:
        return { text: textC, setText: setTextC };
      case 4:
        return { text: textD, setText: setTextD };
      case 5:
        return { text: textE, setText: setTextE };
      case 6:
        return { text: textE, setText: setTextE };
    }
  };

  const determineDate = (currentDate, lastDate) => {
    if (!lastDate && !lastDate.length) return true;

    if (currentDate !== lastDate) return true;
    return false;
  };

  const renderModal = () => {
    if (toggleAbout) {
      return <About onClose={onClose} />;
    } else if (toggleStats) {
      return (
        <Stats
          onClose={onClose}
          stats={
            isBrowser
              ? JSON.parse(window.localStorage.getItem("fuckle-stats"))
              : stats
          }
        />
      );
    } else {
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
          height={"59vh"}
          marginTop={"-17vh"}
          backgroundColor="#111"
        >
          <Text
            marginBottom={"1rem"}
            fontFamily={"monospace"}
            fontSize={"1.2rem"}
            fontWeight={"bold"}
            color="#cdcdcd"
          >
            {modalText}
          </Text>
          <Text
            as="i"
            fontWeight={"bold"}
            fontSize={"1.2rem"}
            marginBottom={"1rem"}
            color="#cdcdcd"
          >
            {cussWordDetails.word.toLocaleLowerCase()}
          </Text>
          <Text as="i" marginBottom={"1rem"} color="#cdcdcd">
            {cussWordDetails.pronounce}
          </Text>
          <Text
            fontSize={".75rem"}
            borderRadius={"3px"}
            paddingInline={".5rem"}
            backgroundColor={"#232323"}
            as="i"
            marginBottom={".5rem"}
            color="#cdcdcd"
          >
            {cussWordDetails.type}
          </Text>
          <Text
            fontSize={".75rem"}
            as="i"
            marginBottom={".5rem"}
            color="#cdcdcd"
          >
            {cussWordDetails.def}
          </Text>
          <Text
            fontSize={".75rem"}
            as="i"
            marginBottom={".5rem"}
            color="#cdcdcd"
          >
            {cussWordDetails.def2}
          </Text>
          <Text
            fontSize={".75rem"}
            as="i"
            marginBottom={"2rem"}
            color="#cdcdcd"
          >
            "{cussWordDetails.example}"
          </Text>

          <Button
            onClick={() => {
              setToggleStates(true);
            }}
            fontWeight={"bold"}
            borderRadius={"5px"}
            paddingBlock={".25rem"}
            paddingInline={"1rem"}
            backgroundColor={"#878787"}
            color={"#222"}
            width={"85%"}
          >
            See Stats
          </Button>
        </Box>
      );
    }
  };

  return (
    <>
      {determineDate(date.getDate().toString(), lastDate) ? (
        <Box
          padding="2rem"
          flexDirection={"column"}
          display={"flex"}
          paddingTop={"0rem"}
          alignItems={"center"}
          width={"100vw"}
          height={"100vh"}
          backgroundColor={"#000"}
        >
          <Header
            setToggleAbout={setToggleAbout}
            setToggleStats={setToggleStates}
            onOpen={onOpen}
          />
          <Box
            marginTop={"1.5rem"}
            padding={"0.5rem"}
            paddingBlock={".5rem"}
            width={"90vw"}
            height={"55vh"}
          >
            <TextLine
              active={currentLine === 1 ? true : false}
              textColors={textAColors}
              textArray={textA}
            />
            <TextLine
              active={currentLine === 2 ? true : false}
              textColors={textBColors}
              textArray={textB}
            />
            <TextLine
              active={currentLine === 3 ? true : false}
              textColors={textCColors}
              textArray={textC}
            />
            <TextLine
              active={currentLine === 4 ? true : false}
              textColors={textDColors}
              textArray={textD}
            />
            <TextLine
              active={currentLine === 5 ? true : false}
              textColors={textEColors}
              textArray={textE}
            />
          </Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay onClick={onClose} />
            <ModalContent
              zIndex={99}
              alignItems={"center"}
              justifyContent={"center"}
              paddingInline={"2rem"}
              display={"flex"}
              textAlign={"center"}
            >
              {renderModal()}
            </ModalContent>
          </Modal>
          <Keyboard
            currentLine={currentLine}
            onClick={enterChecker}
            textObj={determineLine(currentLine)}
            addText={addTextToLine}
            allUsedLetters={allUsedLetters}
            setAllUsedLetters={setAllUsedLetters}
            cussword={cussWord}
          />
        </Box>
      ) : (
        <Box
          padding="5rem"
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100vw"}
          height={"100vh"}
          backgroundColor={"#000"}
        >
          {" "}
          <Text
            fontFamily={"monospace"}
            fontSize={"3rem"}
            marginTop={"2rem"}
            marginBottom={"2rem"}
            color={"#cdcdcd"}
            textAlign={"center"}
          >
            Next word will be available at midnight ...
          </Text>
          <Text
            fontFamily={"monospace"}
            fontSize={"4rem"}
            marginBottom={"2rem"}
            color={"#cdcdcd"}
            textAlign={"center"}
          >
            Bitch
          </Text>
        </Box>
      )}
    </>
  );
};

export default Home;
