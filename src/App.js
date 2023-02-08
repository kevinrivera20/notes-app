import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";

function App() {
  const obtResult = useRef(null);

  const [result, setResult] = useState("");

  const ruleOne = (text) => {
    let textResult = "";
    if(text === "0" || text === "1" || text === "2"){
      textResult = "Muy deficiente";
      setResult(textResult);
    }
  }
  const ruleTwo = (text) => {
    let textResult = "";
    if(text === "3" || text === "4" || text === "5"){
      textResult = "Insuficiente";
      setResult(textResult);
    }
  }
  const ruleThree = (text) => {
    let textResult = "";
    if(text === "6" || text === "7"){
      textResult = "Bien";
      setResult(textResult);
    }
  }
  const ruleFour = (text) => {
    let textResult = "";
    if(text === "8" || text === "9"){
      textResult = "Notable";
      setResult(textResult);
    }
  }
  const ruleFive = (text) => {
    let textResult = "";
    if(text === "10"){
      textResult = "Sobresaliente";
      setResult(textResult);
    }
  }


  const handleClick = () => {
    const text = obtResult.current.value;
    setResult(obtResult.current.value);
    ruleOne(text);
    ruleTwo(text);
    ruleThree(text);
    ruleFour(text);
    ruleFive(text);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your note</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a note"
              name="result"
              ref={obtResult}
            />
            <Form.Text className="text-muted">
              Enter your note, to know your result
            </Form.Text>
          </Form.Group>
          <Button onClick={handleClick}>See result</Button>
          <h1 className="resultado">Result: {result}</h1>
        </Form>
      </header>
    </div>
  );
}

export default App;
