import React from "react";

// Hacer este componente dinamico

const Table = () => {
    return (
        <div>
            <div className="row border">
                <div className="col-4 border">
                    <p>1</p>
                </div>
                <div className="col-4 border">
                     <p>2</p>
                </div>
                <div className="col-4 border">
                     <p>3</p>
                </div>
            </div>
            <div className="row border">
                <div className="col-4 border">
                     <p>4</p>
                </div>
                <div className="col-4 border">
                     <p>5</p>
                </div>
                <div className="col-4 border">
                     <p>6</p>
                </div>
            </div>
            <div className="row border">
                <div className="col-4 border">
                     <p>7</p>
                </div>
                <div className="col-4 border">
                     <p>8</p>
                </div>
                <div className="col-4 border">
                     <p>9</p>
                </div>
            </div>
        </div>
    );
}

export default Table;