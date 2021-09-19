import { useState } from 'react'
import Num from './num'
import Operators from './operators'
import Util from './util'
import { utilKeys } from './helper'
import CalcStyle from '../styles/calc.module.css'
import { operatorKeys } from './helper'

const Calculator = () => {
  const utils: utilKeys[] = ['AC', '+/-', '%', '.'];
  const [result, setResult] = useState('0');
  const [newNum, setNewNum] = useState(false);
  const [allClear, setAllClear] = useState(false);

  const [curOp, setCurOp] = useState<operatorKeys>('=');

  return (
    <div className={CalcStyle.wrapper}>

      <div className={CalcStyle.displayWrapper}>
        {result.length >= 13 ? (+result).toExponential(0) : result}
      </div>

      <div className={CalcStyle.numWrapper}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => (
          <Num key={n} n={n} result={result} setResult={setResult} newNum={newNum} setNewNum={setNewNum} />
        ))}
        <Util uType={utils[3]} result={result} setResult={setResult} setAllClear={setAllClear} newNum={newNum} setNewNum={setNewNum} curOp={curOp} />
      </div>

      <div className={CalcStyle.utilWrapper}>
        {utils.slice(0, 3).map(u => (
          <Util key={u} uType={u} result={result} setResult={setResult} setAllClear={setAllClear} newNum={newNum} setNewNum={setNewNum} curOp={curOp} />
        ))}
      </div>

      <div className={CalcStyle.operatorWrapper}>
        <Operators result={result} setResult={setResult} newNum={newNum} setNewNum={setNewNum} allClear={allClear} setAllClear={setAllClear} curOp={curOp} setCurOp={setCurOp} />
      </div>
    </div>
  )
}

export default Calculator

