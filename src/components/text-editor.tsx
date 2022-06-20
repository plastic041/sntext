import { getFromLocalStorage, saveToLocalStorage } from "../lib/localstorage";
import { styled } from "@stitches/react";
import { useDeferredValue, useEffect, useState } from "react";

const TextArea = styled("textarea", {
  width: "100vw",
  height: "100vh",
  margin: 0,
  border: "none",
  outline: "none",
  padding: "4rem",
  fontSize: "1.5rem",
  lineHeight: "2.25rem",
  fontFamily: "Noto Sans KR, sans-serif",
  resize: "none",
});

const TextEditor = () => {
  const [internalText, setInternalText] = useState("");
  const deferredText = useDeferredValue(internalText);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInternalText(value);
  };

  useEffect(() => {
    const textFromLocalstorage = getFromLocalStorage("text");
    if (textFromLocalstorage) {
      setInternalText(textFromLocalstorage);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage("text", deferredText);
  }, [deferredText]);

  return <TextArea value={internalText} onChange={onChange} autoFocus />;
};

export default TextEditor;
