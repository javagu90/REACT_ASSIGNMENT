import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {user:"", password:""}
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }


    login=()=>{
       /*  if (this.state.user == "admin" && this.state.password == "admin"){ */
            this.props.history.push('/main/'+this.state.user);
        /*}*/
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form className="Card">
                        <div className="form-group" style={{width:"30%"}}>
                            <label>User Name:</label> 
                            <input type="text" name="user" className="form-control" placeholder="enter user name" value={this.state.user} onChange={this.handleChange}></input>
                           {/**{(this.state.user.length<8 && this.state.user.length>1)?<span>User Name should be at least 8 charanters!</span>:""}**/}
                        </div>
                        <div className="form-group" style={{width:"30%"}}>
                            <label>Password:</label> 
                            <input type="password" name="password" className="form-control" placeholder="enter user password" value={this.state.password} onChange={this.handleChange}></input>
                        </div>
                        <Button type="submit" variant="primary" onClick={this.login}>Login</Button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;