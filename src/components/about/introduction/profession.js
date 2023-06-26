import React, { useEffect, useState } from "react";
import { PROFESSIONS } from "../../../constants/data";
import {
  LETTER_CHANGE_TIME,
  WORD_DISPLAY_TIME,
} from "../../../constants/constants";

const Profession = () => {
  const [professionIndex, setProfessionIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [word, setWord] = useState("");
  const [createWord, setCreateWord] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(0);
      setProfessionIndex((prevIndex) => (prevIndex + 1) % PROFESSIONS.length);
      setCreateWord(false);
    }, time);
    return () => {
      clearInterval(interval);
    };
  }, [PROFESSIONS, time]);

  useEffect(() => {
    setTime(
      PROFESSIONS[professionIndex].length * LETTER_CHANGE_TIME +
        WORD_DISPLAY_TIME
    );
  }, [professionIndex, PROFESSIONS]);

  const incrementWord = (profession) => {
    setWord((prevWord) => prevWord + profession[wordIndex]);
    setWordIndex((prevWordIndex) => prevWordIndex + 1);
  };
  const decrementWord = () => {
    setWord((prevWord) => prevWord.slice(0, -1));
  };
  useEffect(() => {
    const profession = PROFESSIONS[professionIndex];
    const interval = setInterval(() => {
      if (createWord) {
        if (wordIndex < profession.length) incrementWord(profession);
      } else {
        if (word.length === 0) setCreateWord(true);
        else decrementWord();
      }
    }, LETTER_CHANGE_TIME);
    return () => {
      clearInterval(interval);
    };
  }, [word, wordIndex, professionIndex, createWord]);

  return <React.Fragment>{word}</React.Fragment>;
};

export default Profession;
