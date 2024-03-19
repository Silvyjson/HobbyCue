import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button, { InputProps, SignInOptions } from "./FormProps";
import { facebookIcon, googleIcon, lockIcon } from "../assets/images";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="">
            <div className="">
                <SignInOptions
                    src={googleIcon}
                    label="Continue with Google"
                />
                <SignInOptions
                    src={facebookIcon}
                    label="Continue with Facebook"
                />
            </div>
            <span className="">
                <p className="">Or connect with</p>
            </span>
            <form className="">
                <InputProps
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputProps
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <span className="">
                        <input type="checkbox" id="RememberMe" />
                        <label htmlFor="RememberMe">Remember me</label>
                    </span>
                    <span className="">
                        <img src={lockIcon} alt="key lock" />
                        <p className="font-syne text-[18px] text-red-600 cursor-pointer">Forgot password</p>
                    </span>
                </div>
                <Button
                    label="Continue"
                    className=""
                />
            </form>
        </div>
    );
}

export default SignIn;