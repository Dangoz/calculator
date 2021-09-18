import { Button } from "antd"
import { utilKeys } from "./helper"

// utility buttons, AC, +/-, %, .(decimal)
const Util = ({ uType, result, setResult, setAllClear }:
  {
    uType: utilKeys, result: string,
    setResult: React.Dispatch<React.SetStateAction<string>>
    setAllClear: React.Dispatch<React.SetStateAction<boolean>>
  }) => {

  const handlers = {
    '+/-': () => {
      if (result === '0') return setResult('-0');
      setResult(`${+result * -1}`);
    },
    'AC': () => {
      setAllClear(true);
      setResult('0');
    },
    '%': () => {
      setResult(`${+result / 100}`);
    },
    '.': () => {
      if (result.indexOf('.') !== -1) return;
      setResult(`${result}.`);
    }
  }

  return (
    <>
      <Button onClick={() => handlers[uType]()}>
        {(uType === 'AC' && result !== '0') ? 'C' : uType}
      </Button>
    </>
  )
}


export default Util
