import React from 'react'

function Grid() {
    return (
        <div clssName="container">

            <div className="row bg-success m-5 p-5 text-white">
                <div className="col-2">C2</div>
                <div className="col-3">C3</div>

                <div className="col-1">C6</div>
                <div className="col-3">C7</div>


                <div className="col-3">C2</div>

            </div>
            <div className="row bg-secondary m-5 p-5 text-white"><div className="col-2">C1</div>

                <div className="col-2 bg-warning">C4</div>

                <div className="col-2">C6</div>

                <div className="col-2 bg-dark">C9</div>
                <div className="col-2">C10</div>

                <div className="col-2">C2</div></div>
            <div className="row bg-dark m-5 p-5 text-white"><div className="col-12 bg-danger">C1</div>
                </div>
            <div className="row bg-info m-5 p-5 text-white"><div className="col-1">C1</div>
                <div className="col-1">C2</div>
                <div className="col-1">C3</div>
                <div className="col-1">C4</div>
                <div className="col-1">C5</div>

                <div className="col-1">C7</div>
                <div className="col-1">C8</div>
                <div className="col-1">C9</div>
                <div className="col-1">C10</div>
                <div className="col-1">C11</div>
                <div className="col-2">C2</div></div>
            <div className="row bg-danger m-5 p-5 text-white"><div className="col-6 bg-success">C1</div>
                <div className="col-6 bg-warning">C2</div>
                </div>
            <div className="row bg-warning m-5 p-5 text-white"><div className="col-6 bg-dark">C1</div>

                <div className="col-1">C7</div>
                <div className="col-1">C8</div>
                <div className="col-1">C9</div>
                <div className="col-1">C10</div>
                <div className="col-1">C11</div>
                <div className="col-1">C2</div></div>
            <div className="row bg-light m-5 p-5 text-white"><div className="col-9 bg-danger">C1</div>
                <div className="col-1">C2</div>

                <div className="col-1">C11</div>
                <div className="col-1">C2</div></div>

        </div>
    )
}

export default Grid
