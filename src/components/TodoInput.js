import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange,handleSubmit,editItem}=this.props;
        return (
            <div className="card card-body mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                    <input type="text" className="form-control text-capitalize" placeholder="add todo item"
                    value={item} onChange={handleChange}></input>
                    </div>
                    <center>{editItem==true?<button type="Submit" className="btn  btn-success mt-3">EDIT ITEM
                    </button>:<button type="Submit" className="btn  btn-primary mt-3" disabled={item?false:true}>ADD ITEM</button>}</center>
                </form>
            </div>
        )
    }
}
