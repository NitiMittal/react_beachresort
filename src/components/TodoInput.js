import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange,handleSubmit,handleEdit}=this.props;
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
                    <center><button type="Submit" className="btn  btn-primary mt-3">Add Item</button></center>
                </form>
            </div>
        )
    }
}
