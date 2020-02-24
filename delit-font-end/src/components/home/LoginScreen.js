import React from 'react';
import { connect } from 'react-redux';
import { loginHandler } from '../../store/database/HomeScreenHandler'
import { NavLink } from 'react-router-dom';

class LoginScreen extends React.Component {

    state = {
        email: "",
        password: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state, this.props.socket);
    }

    handleChange = (e) => {
        const { target } = e;

        this.setState(state => ({
            ...state,
            [target.id]: target.value,
        }));
    }

    render() {
        const { email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className="white login-form right">
                <h5 className="grey-text text-darken-3">Login</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input className="active" type="email" name="email" id="email" onChange={this.handleChange} value={email} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input className="active" type="password" name="password" id="password" onChange={this.handleChange} value={password} />
                </div>
                <li><NavLink to="/register">Doesn't have account, sign up</NavLink></li>
                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        );
    };
}

const mapStateToProps = (state) => {
    const socket = state.mongodb.socket;
    return {
        socket: socket,
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (data, socket) => dispatch(loginHandler(data, socket))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);;