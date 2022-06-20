import "modern-normalize/modern-normalize.css";
import TextEditor from "./components/text-editor";
import { styled } from "@stitches/react";

const Main = styled("main", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
});

const App = () => {
  return (
    <Main>
      <TextEditor />
    </Main>
  );
};

export default App;
