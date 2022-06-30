import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Key from "./key";

interface KeyboardProps {
  addText: Function;
  textObj: TextObj;
  onClick: Function;
  currentLine: number;
  allUsedLetters: string;
  setAllUsedLetters: Function;
  cussword: string;
}

interface TextObj {
  text: string;
  setText: Function;
}

const Keyboard: React.FC<KeyboardProps> = (props) => {
  const [toggleU, setToggleU] = useState({ color: "#676767", keepSame: false });
  const [toggleF, setToggleF] = useState({ color: "#676767", keepSame: false });
  const [toggleG, setToggleG] = useState({ color: "#676767", keepSame: false });
  const [toggleA, setToggleA] = useState({ color: "#676767", keepSame: false });
  const [toggleB, setToggleB] = useState({ color: "#676767", keepSame: false });
  const [toggleC, setToggleC] = useState({ color: "#676767", keepSame: false });
  const [toggleD, setToggleD] = useState({ color: "#676767", keepSame: false });
  const [toggleE, setToggleE] = useState({ color: "#676767", keepSame: false });
  const [toggleH, setToggleH] = useState({ color: "#676767", keepSame: false });
  const [toggleI, setToggleI] = useState({ color: "#676767", keepSame: false });
  const [toggleJ, setToggleJ] = useState({ color: "#676767", keepSame: false });
  const [toggleK, setToggleK] = useState({ color: "#676767", keepSame: false });
  const [toggleL, setToggleL] = useState({ color: "#676767", keepSame: false });
  const [toggleM, setToggleM] = useState({ color: "#676767", keepSame: false });
  const [toggleN, setToggleN] = useState({ color: "#676767", keepSame: false });
  const [toggleO, setToggleO] = useState({ color: "#676767", keepSame: false });
  const [toggleP, setToggleP] = useState({ color: "#676767", keepSame: false });
  const [toggleQ, setToggleQ] = useState({ color: "#676767", keepSame: false });
  const [toggleR, setToggleR] = useState({ color: "#676767", keepSame: false });
  const [toggleS, setToggleS] = useState({ color: "#676767", keepSame: false });
  const [toggleT, setToggleT] = useState({ color: "#676767", keepSame: false });
  const [toggleV, setToggleV] = useState({ color: "#676767", keepSame: false });
  const [toggleW, setToggleW] = useState({ color: "#676767", keepSame: false });
  const [toggleX, setToggleX] = useState({ color: "#676767", keepSame: false });
  const [toggleY, setToggleY] = useState({ color: "#676767", keepSame: false });
  const [toggleZ, setToggleZ] = useState({ color: "#676767", keepSame: false });
  const [toggleEnter, setToggleEnter] = useState({
    color: "#676767",
    keepSame: false,
  });
  const [canChange, setCanChange] = useState([]);
  const [changeObjects, setChangeObjects] = useState([]);

  const addLetterToArray = (letter: string) => {
    if (!props.textObj) return;
    if (props.textObj.text.length >= 4) return;
    let tempArray = [...props.textObj.text, letter];
    const string = tempArray.join("");
    props.addText(string);
    setCanChange([...canChange, letter]);
  };

  const determineIfCanChange = (change, letter) => {
    if (canChange.includes(letter)) {
      return true;
    } else {
      return false;
    }
  };

  const sliceIndex = (currentLine: number) => {
    switch (currentLine) {
      case 1:
        return [0, 4];
      case 2:
        return [0, 4];
      case 3:
        return [4, 8];
      case 4:
        return [8, 12];
      case 5:
        return [12, 16];
      case 6:
        return [16, 20];
    }
  };

  const colorCodeUsedLetters = (
    letters: string[],
    letter: string,
    currentLine: number,
    cussword: string,
    setFunction: Function,
    keepSame: boolean
  ) => {
    const sliceNumbers = sliceIndex(currentLine);
    if (letters.includes(letter)) {
      const word = letters.slice(sliceNumbers[0], sliceNumbers[1]);
      const indexWord = word.indexOf(letter);
      const currentLetter = letters[indexWord];
      cussword = cussword.split("");

      function getAllIndexes(arr, val) {
        var indexes = [],
          i = -1;
        while ((i = arr.indexOf(val, i + 1)) != -1) {
          indexes.push(i);
        }
        return indexes;
      }

      const indexesA = getAllIndexes(letters, letter);
      const indexesB = getAllIndexes(cussword, letter);

      const letterIncluded = () => {
        let included = false;
        changeObjects.forEach((changeObject) => {
          if (letter === changeObject.letter) {
            included = true;
          }
        });
        return included;
      };

      if (letterIncluded()) {
        return;
      }

      const changeArray = [];

      if (indexesA.length === 2 && indexesB.length === 2) {
        if (indexesA[1] === indexesB[1]) {
          changeArray.push({
            canChange: false,
            letter,
            correct: true,
            included: false,
            incorrect: false,
          });
        } else if (indexesA[0] === indexesB[0]) {
          changeArray.push({
            canChange: false,
            letter,
            correct: true,
            included: false,
            incorrect: false,
          });
        } else if (indexesA[0] === indexesB[1]) {
          changeArray.push({
            canChange: false,
            letter,
            correct: true,
            included: false,
            incorrect: false,
          });
        } else if (indexesA[1] === indexesB[0]) {
          changeArray.push({
            canChange: false,
            letter,
            correct: true,
            included: false,
            incorrect: false,
          });
        } else if (cussword.includes(letter)) {
          changeArray.push({
            canChange: false,
            letter,
            correct: false,
            included: true,
            incorrect: false,
          });
        }
      } else if (indexesA.length === 2 && indexesB.length === 1) {
        if (indexesA[1] === indexesB[0] || indexesA[0] === indexesB[0]) {
          changeArray.push({
            canChange: false,
            letter,
            correct: true,
            included: false,
            incorrect: false,
          });
        } else if (cussword.includes(letter)) {
          changeArray.push({
            canChange: false,
            letter,
            correct: false,
            included: true,
            incorrect: false,
          });
        }
      } else if (indexesA.length === 1 && indexesB.length === 2) {
        if (indexesA[0] === indexesB[1]) {
          changeArray.push({
            canChange: false,
            letter,
            correct: true,
            included: false,
            incorrect: false,
          });
        } else if (cussword.includes(letter)) {
          changeArray.push({
            canChange: false,
            letter,
            correct: false,
            included: true,
            incorrect: false,
          });
        }
      } else if (indexesA[0] === indexesB[0]) {
        changeArray.push({
          canChange: false,
          letter,
          correct: true,
          included: false,
          incorrect: false,
        });
      } else if (cussword.includes(letter)) {
        changeArray.push({
          canChange: false,
          letter,
          correct: false,
          included: true,
          incorrect: false,
        });
      } else {
        changeArray.push({
          canChange: false,
          letter,
          correct: false,
          included: false,
          incorrect: true,
        });
      }
      setColors(changeArray);
    }
  };

  const removeLetterFromArray = () => {
    if (!props.textObj) return;
    if (props.textObj.text.length > 4) return;
    if (props.textObj.text.length < 1) return;
    const tempText = props.textObj.text.slice(0, props.textObj.text.length - 1);
    props.textObj.setText(tempText);
    const tempChange = canChange.slice(0, canChange.length - 1);
    setCanChange(tempChange);
    setChangeObjects([changeObjects.slice(0, changeObjects.length - 1)]);
  };

  const setColors = (changeArray) => {
    changeArray.forEach((change) => {
      switch (change.letter) {
        case "H":
          if (change.canChange) {
            return;
          } else if (change.correct) {
            setToggleH({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleH({ color: "#d6bc5c", keepSame: false });
          } else if (change.incorrect) {
            setToggleH({ color: "#333", keepSame: true });
          }
          break;
        case "A":
          if (toggleA.keepSame) {
            return;
          } else if (change.correct) {
            setToggleA({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleA({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleA({ color: "#333", keepSame: true });
          }
          break;
        case "B":
          if (toggleB.keepSame) {
            return;
          } else if (change.correct) {
            setToggleB({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleB({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleB({ color: "#333", keepSame: true });
          }
          break;
        case "C":
          if (toggleC.keepSame) {
            return;
          } else if (change.correct) {
            setToggleC({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleC({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleC({ color: "#333", keepSame: true });
          }
          break;
        case "D":
          if (toggleD.keepSame) {
            return;
          } else if (change.correct) {
            setToggleD({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleD({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleD({ color: "#333", keepSame: true });
          }
          break;
        case "E":
          if (toggleE.keepSame) {
            return;
          } else if (change.correct) {
            setToggleE({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleE({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleE({ color: "#333", keepSame: true });
          }
          break;
        case "F":
          if (toggleF.keepSame) {
            return;
          } else if (change.correct) {
            setToggleF({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleF({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleF({ color: "#333", keepSame: true });
          }
          break;
        case "G":
          if (toggleG.keepSame) {
            return;
          } else if (change.correct) {
            setToggleG({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleG({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleG({ color: "#333", keepSame: true });
          }
          break;

        case "I":
          if (toggleI.keepSame) {
            return;
          } else if (change.correct) {
            setToggleI({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleI({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleI({ color: "#333", keepSame: true });
          }
          break;
        case "J":
          if (toggleJ.keepSame) {
            return;
          } else if (change.correct) {
            setToggleJ({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleJ({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleJ({ color: "#333", keepSame: true });
          }
          break;
        case "K":
          if (toggleK.keepSame) {
            return;
          } else if (change.correct) {
            setToggleK({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleK({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleK({ color: "#333", keepSame: true });
          }
          break;
        case "L":
          if (toggleL.keepSame) {
            return;
          } else if (change.correct) {
            setToggleL({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleL({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleL({ color: "#333", keepSame: true });
          }
          break;
        case "M":
          if (toggleM.keepSame) {
            return;
          } else if (change.correct) {
            setToggleM({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleM({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleM({ color: "#333", keepSame: true });
          }
          break;
        case "N":
          if (toggleN.keepSame) {
            return;
          } else if (change.correct) {
            setToggleN({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleN({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleN({ color: "#333", keepSame: true });
          }
          break;
        case "O":
          if (toggleO.keepSame) {
            return;
          } else if (change.correct) {
            setToggleO({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleO({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleO({ color: "#333", keepSame: true });
          }
          break;
        case "P":
          if (toggleP.keepSame) {
            return;
          } else if (change.correct) {
            setToggleP({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleP({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleP({ color: "#333", keepSame: true });
          }
          break;
        case "Q":
          if (toggleQ.keepSame) {
            return;
          } else if (change.correct) {
            setToggleQ({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleQ({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleQ({ color: "#333", keepSame: true });
          }
          break;
        case "R":
          if (toggleR.keepSame) {
            return;
          } else if (change.correct) {
            setToggleR({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleR({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleR({ color: "#333", keepSame: true });
          }
          break;
        case "S":
          if (toggleS.keepSame) {
            return;
          } else if (change.correct) {
            setToggleS({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleS({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleS({ color: "#333", keepSame: true });
          }
          break;
        case "T":
          if (toggleT.keepSame) {
            return;
          } else if (change.correct) {
            setToggleT({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleT({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleT({ color: "#333", keepSame: true });
          }
          break;
        case "U":
          if (toggleU.keepSame) {
            return;
          } else if (change.correct) {
            setToggleU({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleU({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleU({ color: "#333", keepSame: true });
          }
          break;
        case "V":
          if (toggleV.keepSame) {
            return;
          } else if (change.correct) {
            setToggleV({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleV({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleV({ color: "#333", keepSame: true });
          }
          break;
        case "W":
          if (toggleW.keepSame) {
            return;
          } else if (change.correct) {
            setToggleW({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleW({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleW({ color: "#333", keepSame: true });
          }
          break;
        case "X":
          if (toggleX.keepSame) {
            return;
          } else if (change.correct) {
            setToggleX({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleX({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleX({ color: "#333", keepSame: true });
          }
          break;
        case "Y":
          if (toggleY.keepSame) {
            return;
          } else if (change.correct) {
            setToggleY({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleY({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleY({ color: "#333", keepSame: true });
          }
          break;
        case "Z":
          if (toggleZ.keepSame) {
            return;
          } else if (change.correct) {
            setToggleZ({ color: "#4b7a47", keepSame: true });
          } else if (change.included) {
            setToggleZ({ color: "#d6bc5c", keepSame: false });
          } else {
            setToggleZ({ color: "#333", keepSame: true });
          }
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    colorCodeUsedLetters(
      props.textObj.text,
      "Enter",
      props.currentLine,
      props.cussword,
      setToggleEnter,
      toggleEnter.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "U",
      props.currentLine,
      props.cussword,
      setToggleU,
      toggleU.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "F",
      props.currentLine,
      props.cussword,
      setToggleF,
      toggleF.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "G",
      props.currentLine,
      props.cussword,
      setToggleG,
      toggleG.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "A",
      props.currentLine,
      props.cussword,
      setToggleA,
      toggleA.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "B",
      props.currentLine,
      props.cussword,
      setToggleB,
      toggleB.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "C",
      props.currentLine,
      props.cussword,
      setToggleC,
      toggleC.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "D",
      props.currentLine,
      props.cussword,
      setToggleD,
      toggleD.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "E",
      props.currentLine,
      props.cussword,
      setToggleE,
      toggleE.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "H",
      props.currentLine,
      props.cussword,
      setToggleH,
      toggleH.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "I",
      props.currentLine,
      props.cussword,
      setToggleI,
      toggleI.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "J",
      props.currentLine,
      props.cussword,
      setToggleJ,
      toggleJ.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "K",
      props.currentLine,
      props.cussword,
      setToggleK,
      toggleK.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "L",
      props.currentLine,
      props.cussword,
      setToggleL,
      toggleL.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "M",
      props.currentLine,
      props.cussword,
      setToggleM,
      toggleM.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "N",
      props.currentLine,
      props.cussword,
      setToggleN,
      toggleN.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "O",
      props.currentLine,
      props.cussword,
      setToggleO,
      toggleO.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "P",
      props.currentLine,
      props.cussword,
      setToggleP,
      toggleP.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "Q",
      props.currentLine,
      props.cussword,
      setToggleQ,
      toggleQ.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "R",
      props.currentLine,
      props.cussword,
      setToggleR,
      toggleR.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "S",
      props.currentLine,
      props.cussword,
      setToggleS,
      toggleS.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "T",
      props.currentLine,
      props.cussword,
      setToggleT,
      toggleT.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "V",
      props.currentLine,
      props.cussword,
      setToggleV,
      toggleV.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "W",
      props.currentLine,
      props.cussword,
      setToggleW,
      toggleW.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "X",
      props.currentLine,
      props.cussword,
      setToggleX,
      toggleX.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "Y",
      props.currentLine,
      props.cussword,
      setToggleY,
      toggleY.keepSame
    );
    colorCodeUsedLetters(
      props.textObj.text,
      "Z",
      props.currentLine,
      props.cussword,
      setToggleZ,
      toggleZ.keepSame
    );
  }, [props.onClick]);

  return (
    <Box
      position={"fixed"}
      bottom="0"
      backgroundColor={"#222"}
      height="27%"
      width={"100%"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingBlock=".6rem"
      >
        <Key
          color={toggleQ.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"Q"}
          canChange={determineIfCanChange(canChange, "Q")}
        />
        <Key
          color={toggleW.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"W"}
          canChange={determineIfCanChange(canChange, "W")}
        />
        <Key
          color={toggleE.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"E"}
          canChange={determineIfCanChange(canChange, "E")}
        />
        <Key
          color={toggleR.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"R"}
          canChange={determineIfCanChange(canChange, "R")}
        />
        <Key
          color={toggleT.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"T"}
          canChange={determineIfCanChange(canChange, "T")}
        />
        <Key
          color={toggleY.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"Y"}
          canChange={determineIfCanChange(canChange, "Y")}
        />
        <Key
          color={toggleU.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"U"}
          canChange={determineIfCanChange(canChange, "U")}
        />
        <Key
          color={toggleI.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"I"}
          canChange={determineIfCanChange(canChange, "I")}
        />
        <Key
          color={toggleO.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"O"}
          canChange={determineIfCanChange(canChange, "O")}
        />
        <Key
          color={toggleP.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"P"}
          canChange={determineIfCanChange(canChange, "P")}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingInline={"4vw"}
        paddingBlock=".6rem"
      >
        <Key
          color={toggleA.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"A"}
          canChange={determineIfCanChange(canChange, "A")}
        />
        <Key
          color={toggleS.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"S"}
          canChange={determineIfCanChange(canChange, "S")}
        />
        <Key
          color={toggleD.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"D"}
          canChange={determineIfCanChange(canChange, "D")}
        />
        <Key
          color={toggleF.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"F"}
          canChange={determineIfCanChange(canChange, "F")}
        />
        <Key
          color={toggleG.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"G"}
          canChange={determineIfCanChange(canChange, "G")}
        />
        <Key
          color={toggleH.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"H"}
          canChange={determineIfCanChange(canChange, "H")}
        />
        <Key
          color={toggleJ.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"J"}
          canChange={determineIfCanChange(canChange, "J")}
        />
        <Key
          color={toggleK.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"K"}
          canChange={determineIfCanChange(canChange, "K")}
        />
        <Key
          color={toggleL.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"L"}
          canChange={determineIfCanChange(canChange, "L")}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"33%"}
        paddingBlock=".6rem"
      >
        <Key
          color="#676767"
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          onClick={props.onClick}
          setLetter={addLetterToArray}
          letter={"Enter"}
          thickKey={true}
          canChange={canChange}
        />
        <Key
          color={toggleZ.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"Z"}
          canChange={determineIfCanChange(canChange, "Z")}
        />
        <Key
          color={toggleX.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"X"}
          canChange={determineIfCanChange(canChange, "X")}
        />
        <Key
          color={toggleC.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"C"}
          canChange={determineIfCanChange(canChange, "C")}
        />
        <Key
          color={toggleV.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"V"}
          canChange={determineIfCanChange(canChange, "V")}
        />
        <Key
          color={toggleB.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"B"}
          canChange={determineIfCanChange(canChange, "B")}
        />
        <Key
          color={toggleN.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"N"}
          canChange={determineIfCanChange(canChange, "N")}
        />
        <Key
          color={toggleM.color}
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={addLetterToArray}
          letter={"M"}
          canChange={determineIfCanChange(canChange, "M")}
        />
        <Key
          color="#676767"
          currentLine={props.currentLine}
          cussword={props.cussword}
          allUsedLetters={props.allUsedLetters}
          setLetter={removeLetterFromArray}
          letter={"<-"}
          thickKey={true}
        />
      </Box>
    </Box>
  );
};

export default Keyboard;
