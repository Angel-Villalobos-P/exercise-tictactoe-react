import React from "react";

const Square = (props) => {

    const handelClick = (props) => {
        props.updateBoard(props.loc, props.turn);
    }

    return (
        <div className="col-4 border " onClick={() => handelClick(props)} style={{ height: "157.5px", background: "white" }}>
            <p className="text-center" style={{ fontSize: "80px", color: "#87f1ff" }}>{props.value}</p>
        </div>
    );
}

export default Square;