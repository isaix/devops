import React, {Component} from 'react';
import {Button, Card, Col, Container, FormLabel,Form, FormControl, FormGroup, Navbar, Row} from "react-bootstrap";
import {login} from "../../Axios";


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            showError: false,
            errormessage: ""
        }
    }

    handleSubmit(event){

        event.preventDefault()
        //This should probably be more advanced, but its gonna work fine for now.
        if(!this.state.email.match(/.+@.+/)){
            this.setState({errorMessage: "You must enter a valid email adress", showError: true});
            return false
        } else if(this.state.password.length < 8){
            this.setState({errorMessage: "Please enter a password thats longer than 8 characters", showError: true});
            return false
        }

        login(this.state.email, this.state.password, (res) => {
            //console.log(res);
            if(res.status !== null && res.status === 200){
                sessionStorage.setItem('token', 'Bearer ' + res.data.token);
                sessionStorage.setItem('user_id', res.data.user_id);
                console.log("login")
                this.props.history.push('/projects');
                window.location.reload();
            }else if(res.message.includes("401")){
                this.setState({showError: true});
                this.setState({errorMessage: "Wrong password"});
            } else if(res.message.includes('404')){
                this.setState({showError: true});
                this.setState({errorMessage: "Wrong username"});
            } else {
                this.setState({showError: true});
                this.setState({errorMessage: "Something went wrong"});
            }
        });
    }

    setEmail(value){
        this.setState({email : value});
    }

    setPassword(value){
        this.setState({password : value});
    }




    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Card>
                            {/*Tyvstjålet kode*/}
                            <div className="Login">
                                <Form style={{marginRight: 2 + 'em'}}>
                                    <FormGroup controlId="email" size="large">
                                        <FormLabel column={1}>Email</FormLabel>
                                        <FormControl
                                            autoFocus
                                            type="email"
                                            value={this.email}
                                            onChange={e => this.setEmail(e.target.value)}
                                            />
                                    </FormGroup>
                                    <FormGroup controlId="password" size="large">
                                        <FormLabel column={1}>Password</FormLabel>
                                        <FormControl
                                            value={this.password}
                                            onChange={e => this.setPassword(e.target.value)}
                                            type="password"
                                            />
                                    </FormGroup>
                                    <Button block size="large"  type="submit" onClick={this.handleSubmit.bind(this)}>
                                        Login
                                    </Button>
                                </Form>
                                {
                                    this.showError()
                                }
                                <a href="#" className="" onClick={ () => {this.props.history.push('signup')}}>Dont have an account yet? Sign up here</a>
                            </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    showError(){
        if(this.state.showError){
            return( <div className = "alert alert-danger" role="alert">{this.state.errorMessage}</div>)
        } else{
            return;
        }
    }



}

export default Login

class Error extends Component{
constructor(props) {
    super(props)
    this.state = {
    }
}

    render() {
        return(
            <p></p>
        )
    }
}
