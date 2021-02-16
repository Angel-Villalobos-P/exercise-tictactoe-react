import React from "react";

const Square = (props) => {

    const handelClick = (props) => {
        props.updateBoard(props.loc, props.turn);
    }

    return (
        <div className="row">
            {
                [1, 2, 3].map((elemt, i) => {
                    return (
                        <div key={i} className="col-4 border" onClick={()=>handelClick(props)} style={{ height: "190px", background:"white" }}>
                            <p>{elemt}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Square;

//style={{ height: "189px" }}