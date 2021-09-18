import { Button } from "antd"
import { operatorKeys } from "./helper"
import CalcStyle from '../styles/calc.module.css'

const Operator = ({ oType, handle, curOp }:
  { oType: operatorKeys, handle: (op: operatorKeys) => void, curOp: string }) => {
  return (
    <>
      <Button danger={curOp === oType} type={'primary'}
        style={curOp !== oType ? { backgroundColor: '#ff9a00', borderColor: '#ff9a00' } : {}}
        onClick={() => handle(oType)} className={CalcStyle.icon}>{oType}</Button>
    </>
  )
}

export default Operator
