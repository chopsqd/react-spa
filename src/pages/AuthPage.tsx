import React from 'react';
import {useInput} from "../hook/input";
import {useAppDispatch} from "../hook/redux";
import {login, register} from "../store/actions/authActions";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {
    const username = useInput('')
    const password = useInput('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const submitHandler = async (event: React.FormEvent) => {
        try {
            event.preventDefault()

            if(username.value && password.value) {
                await dispatch(register({
                    username: username.value,
                    password: password.value
                }))
                navigate("/")
            } else {
                alert('INVALID FORM DATA')
            }
        } catch(e) {

        }
    }

    const loginHandler = async () => {
        if(username.value && password.value) {
            await dispatch(login({
                username: username.value,
                password: password.value
            }))
            navigate("/")
        } else {
            alert('INVALID FORM DATA')
        }
    }

    return (
        <form
            className={"container mx-auto max-w-[500px] pt-8"}
            onSubmit={submitHandler}
        >
            <div className={"mb-2"}>
                <label htmlFor="username" className={"block"}>Username</label>
                <input type="text" {...username} id={"username"} className={"border py-1 px-2 w-full"}/>
            </div>

            <div className={"mb-2"}>
                <label htmlFor="password" className={"block"}>Password</label>
                <input type="password" {...password} id={"password"} className={"border py-1 px-2 w-full"}/>
            </div>

            <button className={"py-2 px-4 bg-blue-700 border text-white hover:bg-blue-800"} type={"submit"}>Register</button>
            <button className={"py-2 px-4 bg-green-700 border text-white hover:bg-green-800"} type={"button"} onClick={loginHandler}>login</button>
        </form>
    );
};

export default AuthPage;