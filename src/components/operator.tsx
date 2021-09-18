import { Button } from "antd"
import { operatorKeys } from "./helper"

const Operator = ({ oType, handle, curOp }:
  { oType: operatorKeys, handle: (op: operatorKeys) => void, curOp: string }) => {
  return (
    <>
      <Button onClick={() => handle(oType)}>{oType}</Button>
    </>
  )
}

export default Operator
