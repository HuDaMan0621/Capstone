import React, { Component } from 'react';
import { db } from '../firebase';

export default class NewUserForm extends Component {
    state = {
        username: '',
        fullname: '',
        address: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.username && this.state.fullname) {
            db.collection('users').add(this.state);
            this.setState({
                username: '',
                fullname: '',
                address: '',
            })
        }
    }

    handleChange = (e) => {
        const { name, address, value } = e.target;
        this.setState({
            [name]: value,
            [address]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label><br />
                    <input id="username" name="username" onChange={this.handleChange} value={this.state.username} />
                </div>
                <div>
                    <label htmlFor="fullname">Full Name</label><br />
                    <input id="fullname" name="fullname" onChange={this.handleChange} value={this.state.fullname} />
                </div>
                <div className="">
                    <label htmlFor="address">Address</label> <br />
                    <input id="address" name="address" onChange={this.handleChange} value={this.state.address} />
                </div>
                <button type="submit">Add User</button>
            </form>
        )
    }
}
