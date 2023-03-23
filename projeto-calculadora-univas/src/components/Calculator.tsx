import { useState } from "react";

interface ICalculator {
    num: number,
    oldNum: number
}

export const Calculator = () => {
    const [num, setNum] = useState<ICalculator>();
    const [oldnum, setOldNum] = useState<ICalculator>();
    const [operator, setOperator] = useState();
  
    function inputNum(e: any) {
      var input = e.target.value;
      if (num === 0) {
        setNum(input);
      } else {
        setNum(num + input);
      }
    }
  
    function clear() {
      setNum(0);
    }
  
    function porcentage() {
      setNum(num / 100);
    }
  
    function changeSign() {
      if (num > 0) {
        setNum(-num);
      } else {
        setNum(Math.abs(num));
      }
    }
  
    function operatorHandler(e: any) {
      var operatorInput = e.target.value;
      setOperator(operatorInput);
      setOldNum(num);
      setNum(0);
    }
  
    function calculate() {
      if (operator === "/") {
        setNum(parseFloat(oldnum) / parseFloat(num));
      } else if (operator === "X") {
        setNum(parseFloat(oldnum) * parseFloat(num));
      } else if (operator === "-") {
          console.log(oldnum)
          console.log(num)
          console.log(oldnum-num)
        setNum(parseFloat(oldnum) - parseFloat(num));
      } else if (operator === "+") {
        setNum(parseFloat(oldnum) + parseFloat(num));
      }
    }
    return (
        <div>
        <div>
          <div className="wrapper">
            <div/>
            <h1 className="result">{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={porcentage}>%</button>
            <button className="orange" onClick={operatorHandler} value="/">
              /
            </button>
            <button className="gray" onClick={inputNum} value={7}>
              7
            </button>
            <button className="gray" onClick={inputNum} value={8}>
              8
            </button>
            <button className="gray" onClick={inputNum} value={9}>
              9
            </button>
            <button className="orange" onClick={operatorHandler} value="X">
              X
            </button>
            <button className="gray" onClick={inputNum} value={4}>
              4
            </button>
            <button className="gray" onClick={inputNum} value={5}>
              5
            </button>
            <button className="gray" onClick={inputNum} value={6}>
              6
            </button>
            <button className="orange" onClick={operatorHandler} value="-">
              -
            </button>
            <button className="gray" onClick={inputNum} value={1}>
              1
            </button>
            <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">
            +
          </button>
          <button className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value={"."}>
            ,
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
    )
}