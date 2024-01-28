import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Login (){
    const [login, setLogin] = useState({
        username: "",
        password: "",
    })
    let navigate = useNavigate();

    const valid_password = "Kl17#1747";
    const valid_username = "Coderz"

    function writeLogin(event) {
        const { name, value } = event.target;
        setLogin((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    }

      function handleLogin() {
        if (login.username === valid_username && login.password === valid_password) {
          alert("Login successful!");
          navigate("/bookings");
        } else {
          alert("Invalid username or password");
        }
      }

    
    return (
        
        <div className="Login">
            <Header />
            <form >
                <div className="Border">
                    <input name="username" onChange={writeLogin} type="text" placeholder="Enter Username:"/>
                    <input name="password" onChange={writeLogin} type="password" placeholder="Enter Password:"/>
                    <button onClick={(handleLogin)}>Book</button>  
                </div>
            </form>
            <Footer />
        </div>
     )        

}

export default Login;