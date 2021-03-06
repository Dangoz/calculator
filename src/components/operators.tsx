import { operatorKeys } from "./helper"
import { useState, useEffect } from "react"
import Operator from "./operator"

// operator buttons, /, x, -, +, =
const Operators = ({ result, setResult, newNum, setNewNum, allClear, setAllClear, curOp, setCurOp }:
  {
    result: string,
    setResult: React.Dispatch<React.SetStateAction<string>>,
    newNum: boolean,
    setNewNum: React.Dispatch<React.SetStateAction<boolean>>,
    allClear: boolean,
    setAllClear: React.Dispatch<React.SetStateAction<boolean>>,
    curOp: operatorKeys,
    setCurOp: React.Dispatch<React.SetStateAction<operatorKeys>>
  }) => {
  const oKeys: operatorKeys[] = ['÷', 'x', '-', '+', '='];
  const [curInput, setCurInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const [prevOp, setPrevOp] = useState<operatorKeys>('=');

  useEffect(() => {
    if (allClear) {
      setPrevInput('');
      setCurInput('');
      setCurOp('=');
      setPrevOp('=');
      setAllClear(false);
    }
  }, [allClear])

  const handle = (op: operatorKeys) => {
    setNewNum(true);
    setCurInput(result);

    if (op === '=' && curOp === '=' && curInput !== '') return calculate[prevOp]();

    setPrevOp(curOp);
    setCurOp(op);
    if (newNum && op !== '=') return;
    if (op !== '=' && curOp !== '=' && curInput !== '') return calculate[curOp]();

    if (op === '=') calculate[curOp]();
  }

  const calculate = {
    '÷': () => {
      if (curOp === '=') return setResult(`${+result / +prevInput}`);
      setPrevInput(result);
      setCurInput(`${+curInput / +result}`)
      setResult(`${+curInput / +result}`);
    },
    'x': () => {
      if (curOp === '=') return setResult(`${+result * +prevInput}`);
      setPrevInput(result);
      setCurInput(`${+curInput * +result}`);
      setResult(`${+curInput * +result}`);
    },
    '-': () => {
      if (curOp === '=') return setResult(`${+result - +prevInput}`);
      setPrevInput(result);
      setCurInput(`${+curInput - +result}`)
      setResult(`${+curInput - +result}`);
    },
    '+': () => {
      if (curOp === '=') return setResult(`${+result + +prevInput}`);
      setPrevInput(result);
      setCurInput(`${+curInput + +result}`)
      setResult(`${+curInput + +result}`);
    },
    '=': () => {
      return;
    }
  }

  return (
    <div>
      {oKeys.map(o => (
        <Operator key={o} oType={o} handle={handle} curOp={curOp} />
      ))}
    </div>
  )
}

export default Operators
