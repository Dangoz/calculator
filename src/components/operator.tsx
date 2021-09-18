import { Button } from "antd"
import { operatorKeys } from "./helper"

const Operator = ({ oType, handle }:
  { oType: operatorKeys, handle: (op: operatorKeys) => void }) => {
  return (
    <>
      <Button onClick={() => handle(oType)}>{oType}</Button>
    </>
  )
}

export default Operator
