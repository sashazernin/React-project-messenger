import {SubmitHandler, useForm} from 'react-hook-form'
import React from "react";
import {Navigate} from "react-router-dom";
import c from "./Login.module.css"

const Login = (props) => {
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: {errors},
        reset,
    } = useForm({
        mode: 'all',
    })
    const onSubmit = data => {
        props.login(data.email, data.password, data.rememberMe, data.captcha, setError)
        reset()
    }

    if (props.isAuth) {
        return <Navigate to={'/Profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register('email',
                        {
                            required: "required filed",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Pleace enter the valid email'
                            }
                        })}
                           onFocus={() => {
                               clearErrors()
                           }}
                           placeholder={"Email"}/>
                </div>
                {errors.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
                <div>
                    <input {...register('password',
                        {
                            required: "required filed"
                        })}
                           onFocus={() => {
                               clearErrors()
                           }}
                           placeholder={"Password"}/>
                </div>
                {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
                <div>
                    <input {...register('rememberMe')} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
                {props.captchaUrl &&
                    <div className={c.captcha}>
                        <img src={props.captchaUrl}/>
                        <input {...register(
                            "captcha"
                        )} placeholder={"Captcha"}
                        />
                    </div>
                }
                {errors.server && <div style={{color: 'red'}}>{errors.server.message}</div>}
            </form>
        </div>
    )
}

export default Login