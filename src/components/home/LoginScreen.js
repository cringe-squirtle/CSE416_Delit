import React from 'react';
import { connect } from 'react-redux';
import { loginHandler, clearErrorHandler } from '../../store/database/HomeScreenHandler'
import { Redirect } from 'react-router-dom';
import { TextInput } from 'react-materialize';
import { Grid } from '@material-ui/core'
import Dialog from '../tools/Dialog'
import Typography from "@material-ui/core/Typography";
import { Button} from "react-bootstrap";
import TextField from '@material-ui/core/TextField';

class LoginScreen extends React.Component {

    state = {
        email: "",
        password: "",
        modelActive1: false,
        modelActive2: false,
        vemail: "",
        vcode: "",
        vpass: "",
        vpass2: "",
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


    goRegister = () => {
        this.props.clearError();
        this.props.handleGoRegister();
    }

    handleModalOpen1 = () => {
        this.setState({ modelActive1: true });
    }

    handleModalClose1 = () => {
        this.setState({ modelActive1: false });
    }

    handleModalOpen2 = () => {
        this.handleModalClose1();
        this.setState({ modelActive2: true });
    }

    handleModalClose2 = () => {
        this.setState({ modelActive2: false });
    }

    render() {
        const { email, password, vemail, vpass, vpass2, vcode } = this.state;
        const { auth } = this.props;

        if (auth.email)
            return <Redirect to="/dashboard" />;

        return (
            <div className="login-form">
                <Grid
                    container
                    direction="column"
                >
                    <Grid Item>
                        <div className="grey-text text-darken-3">
                            <div className="loginHeader1">Delit</div>
                        </div>
                        <div className="loginHeader2">Account Login</div>
                    </Grid>
                    <Grid
                        item
                        justify="center"
                    >
                        <TextInput type="email" label="Enter Your Email" id='email' value={email} onChange={this.handleChange} />
                        <TextInput type="password" label="Enter Your Password" id='password' value={password} onChange={this.handleChange} />
                        {auth.authError ? <div className="red-text center"><p>{auth.authError}</p></div> : null}

                        <p className='login-link'><b><a onClick={this.goRegister}>New to Delit? sign up</a></b></p>
                        <p className='login-link'><b><a onClick={this.handleModalOpen1}>Forget your password?</a> </b></p>
                    </Grid>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Button className="home-submitbtn" variant="primary" onClick={this.handleSubmit} type="submit" >
                            Sign in
                        </Button>
                    </Grid>
                </Grid>

                <Dialog
                    header={
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h4" gutterBottom align="justify">
                                Verification
                            </Typography>
                        </Grid>
                    }
                    open={this.state.modelActive1}
                    maxWidth="md"
                    fullWidth="true"
                    actions={[
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                        >,
                            <Button className="home-dialog-subBtn" onClick={this.handleModalOpen2} variant="primary" size="lg">Submit</Button>,
                            <Button className="home-dialog-subBtn" onClick={this.handleModalClose1} variant="primary" size="lg">Cancel</Button>,
                        </Grid>
                    ]}
                    content={
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="subtitle1" gutterBottom>
                                Please Enter Your Email
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                We will send you a verification code
                            </Typography>
                            <TextInput label="Enter Your Email" id='vemail' value={vemail} onChange={this.handleChange} />
                        </Grid>
                    } />

                <Dialog
                    header={
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h4" gutterBottom align="justify">
                                Reset Password
                            </Typography>
                        </Grid>
                    }
                    maxWidth="md"
                    fullWidth="true"
                    open={this.state.modelActive2}
                    actions={[
                        <Button className="home-dialog-subBtn" onClick={this.handleModalClose2} color="primary">Submit</Button>,
                        <Button className="home-dialog-subBtn" onClick={this.handleModalClose2} color="primary">Close</Button>
                    ]}
                    content={
                       <section className="dialog_content">
                            <Grid
                            container
                            justify="center"
                            alignItems="center"
                            >
                                <Typography variant="subtitle1" gutterBottom>
                                    <strong>We have sent you a verification code</strong>
                                </Typography>
                            </Grid>
                                <TextInput label="Enter Your Verification Code" id='vcode' value={vcode}
                                    onChange={this.handleChange} />
                                <Button onClick={this.handleResend} variant="info" style={{ textTransform: "none"}}> Resend <span style={{ color: "red" }}> (60s) </span> </Button>
                                <TextInput label="Enter Your New Password" id='vpass' value={vpass}
                                    onChange={this.handleChange} />
                                <TextInput label="Confirm Your New Password" id='vpass2' value={vpass2}
                                    onChange={this.handleChange} />
                       </section>
                    } />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    console.log(state)
    const auth = state.auth;
    const socket = state.backend.socket
    return {
        auth: auth,
        socket: socket,
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (data, socket) => dispatch(loginHandler(data, socket)),
    clearError: () => dispatch(clearErrorHandler()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);;