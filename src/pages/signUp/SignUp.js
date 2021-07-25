import React ,{useState}from 'react'
import './SignUp.css';
import SecondaryFooter from '../../components/secondaryFooter/SecondaryFooter';


export default function SignUp() {

const [wrong, setWrong] = useState(false);
const [password,setPassword] = useState("");
const [passwordAuth,setAuthPassword] = useState("");

const checkPassword = ()=>{
    if(password !== passwordAuth){
        setWrong(true);
    }
console.log("password",password);
console.log("passwordAuth",passwordAuth);
}
    
    return (
        <div className="sign_up">
           
            <form onSubmit={(e)=>{e.preventDefault(); checkPassword()}} >
            <p>Sign Up </p>
            <div className="sing_in_inputs">
            <input type="text" id="name" placeholder="Full name" required /><br/>
            <input type="email" id="email" placeholder="Email" required /><br/>
            <input className={wrong?"border-red":"border-normal"} type="password" value = {password} onChange={(e)=>{setPassword(e.target.value)}} id="password" placeholder={wrong?"Password doesn't match":"Password"} required /><br/>
            <input className={wrong?"border-red":"border-normal"} type="password" value={passwordAuth}  onChange={(e)=>{setAuthPassword(e.target.value)}} id="passwordAuth" placeholder="Re-enter password" required /><br/>
            <input type="text" id="Company" placeholder="Company name (optional)" /><br/>
            <input type="number" id="employee" placeholder="Number of employee (optional)"/><br/>
            <input type="country" id="Country" placeholder="Country" required /><br/>
            <input type="text" id="Adrress" placeholder="Adrress" required  /><br/>
            <div class="note">
            <input type="text" id="notes" placeholder="Notes" />
            </div>
            <div className="signup_checkbox">
            <label className="subs-check" for="Subs">Subscribe</label><br/>
            <input type="checkbox" id="subs" name="subs" value="subs" />
            </div>
            </div>
            <button  type="submit" className="button" >Sign Up </button>
            </form>
            <SecondaryFooter/>

            
        </div>
    )
}
