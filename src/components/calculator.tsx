import { useState } from 'react'
import Num from './num'
import Operators from './operators'
import Util from './util'
import { utilKeys } from './helper'

const Calculator = () => {
  const utils: utilKeys[] = ['AC', '+/-', '%', '.'];
  const [result, setResult] = useState('0');
  const [newNum, setNewNum] = useState(false);
  const [allClear, setAllClear] = useState(false);

  return (
    <div>
      <div>{result}</div>

      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => (
          <Num key={n} n={n} result={result} setResult={setResult} newNum={newNum} setNewNum={setNewNum} />
        ))}
        <Util uType={utils[3]} result={result} setResult={setResult} setAllClear={setAllClear} />
      </div>

      <div>
        {utils.slice(0, 3).map(u => (
          <Util key={u} uType={u} result={result} setResult={setResult} setAllClear={setAllClear} />
        ))}
      </div>

      <div>
        <Operators result={result} setResult={setResult} newNum={newNum} setNewNum={setNewNum} allClear={allClear} setAllClear={setAllClear} />
      </div>
    </div>
  )
}

export default Calculator

