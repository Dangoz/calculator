import { operatorKeys } from "./helper"
import { useState, useEffect } from "react"
import Operator from "./operator"

// operator buttons, /, x, -, +, =
const Operators = ({ result, setResult, setNewNum, allClear, setAllClear }:
  {
    result: string,
    setResult: React.Dispatch<React.SetStateAction<string>>,
    setNewNum: React.Dispatch<React.SetStateAction<boolean>>,
    allClear: boolean,
    setAllClear: React.Dispatch<React.SetStateAction<boolean>>
  }) => {
  const oKeys: operatorKeys[] = ['÷', 'x', '-', '+', '='];
  const [curInput, setCurInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const [curOp, setCurOp] = useState<operatorKeys>('=');
  const [prevOp, setPrevOp] = useState<operatorKeys>('=');

  useEffect(() => {
    console.log('prevInput changed', prevInput);
  }, [prevInput])
  useEffect(() => {
    console.log('curOp changed', curOp);
  }, [curOp])
  useEffect(() => {
    console.log('curInput changed', curInput);
  }, [curInput])
  useEffect(() => {
    console.log('prevOp changed', prevOp);
  }, [prevOp])

  useEffect(() => {
    if (allClear) {
      setPrevInput('');
      setCurInput('');
      setCurOp('=');
      setPrevOp('=');
      setAllClear(false);
    }
  }, [allClear])

  useEffect(() => {

  }, [result])

  const handle = (op: operatorKeys) => {
    setNewNum(true);
    if (op === '=' && curOp === '=' && curInput !== '') return calculate[prevOp]();

    setPrevOp(curOp);
    setCurOp(op);

    if (op !== '=' && curOp !== '=' && curInput !== '') return calculate[curOp](true);

    // if (!prevInput.length && !curInput.length) {
    //   setPrevInput(result);
    // } else {
    //   setPrevInput(curInput);
    // }
    setCurInput(result);

    if (op === '=') calculate[curOp]();
  }

  const calculate = {
    '÷': (doubleO: boolean = false) => {
      if (curOp === '=') return setResult(`${+result / +curInput}`);
      if (doubleO) setCurInput(`${+curInput / +result}`);
      setResult(`${+curInput / +result}`);
    },
    'x': (doubleO: boolean = false) => {
      if (curOp === '=') return setResult(`${+result * +curInput}`);
      if (doubleO) setCurInput(`${+curInput * +result}`);
      setResult(`${+curInput * +result}`);
    },
    '-': (doubleO: boolean = false) => {
      if (curOp === '=') return setResult(`${+result - +curInput}`);
      if (doubleO) setCurInput(`${+curInput - +result}`);
      setResult(`${+curInput - +result}`);
    },
    '+': (doubleO: boolean = false) => {
      if (curOp === '=') return setResult(`${+result + +curInput}`);
      if (doubleO) setCurInput(`${+curInput + +result}`);
      setResult(`${+curInput + +result}`);
    },
    '=': () => {
      return;
    }
  }

  return (
    <div>
      {oKeys.map(o => (
        <Operator key={o} oType={o} handle={handle} />
      ))}
    </div>
  )
}

export default Operators
