import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function Shop() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <div className="mt-3">
        <h2>Withdraw/Deposit Money</h2>
        <button
          className="btn btn-danger"
          onClick={() => {
            actions.withdrawMoney(100);
          }}
        >
          -
        </button>
        <span className="mx-3">Update Balance</span>
        <button
          className="btn btn-success"
          onClick={() => {
            actions.withdrawMoney(100);
          }}
        >
          +
        </button>
        {/* <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(actionCreators.withdrawMoney(100));
          }}
        >
          -
        </button>
        <span className="mx-3">Update Balance</span>
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(actionCreators.depositMoney(100));
          }}
        >
          +
        </button> */}
      </div>
    </>
  );
}
