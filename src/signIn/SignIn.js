import React from 'react'
import {Link} from 'react-router-dom';
import './SignIn.css';
import SecondaryFooter from '../components/secondaryFooter/SecondaryFooter';



export default function SignUp() {
    return (
        
        <div className="sign_in">
            <form action="Sign_in_page">
            <div className="mid-center">
            <h1>Sign In </h1>
            <div className="sing_in_inputs">
            <label for="email" className="label">Email</label><br/>
            <input type="text" id="email" placeholder="Email" required /><br/>
            <label for="password"className="label">Password</label><br/>
            <input type="password" id="password" placeholder="Password" required /><br/>
            </div>
            <input type="button" class="button" value="Sign up"/>
            <p>Not a member yet ?</p>  
            <Link to="/signup"><p>Sign Up</p>
            </Link> 
            </div>
            </form>
            <SecondaryFooter/>

        </div>
    )
}
