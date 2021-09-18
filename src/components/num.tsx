import { Button } from "antd"

// number buttons, 0 ~ 9
const Num = ({ n, result, setResult, newNum, setNewNum }:
  {
    n: number, result: string, setResult: React.Dispatch<React.SetStateAction<string>>,
    newNum: boolean, setNewNum: React.Dispatch<React.SetStateAction<boolean>>
  }) => {

  const inputNum = () => {
    if (newNum) { setResult(`${n}`); return setNewNum(false); }
    (+result || result.slice(0, 2) === '0.')
      ? setResult(`${result}${n}`)
      : result === '0'
        ? setResult(`${n}`)
        : setResult(`-${n}`);
  }

  return (
    <>
      <Button type={'primary'}
        onClick={inputNum}>{n}</Button>
    </>
  )
}

export default Num
