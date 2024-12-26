import React from 'react'
import style from './SignUpForm.module.css'
import vector from '../../assets/images/vector2.png'

const SignUpForm = () => {
    return (
        <>
            <div style={{ display: "flex" , justifyContent: "center",height:"100vh",alignItems:"center",backgroundColor:"black"}}>
                <div className={style.boxDiv} style={{backgroundColor:"deepskyblue"}}>
                    <div style={{ width: "550px" }}>
                        <h3 style={{ fontSize: "28px" }}>Sign Up</h3>
                        <p>Already have account? <a style={{ color: "blue", textDecoration: "underline" }}>Login here</a></p>

                        <div className={style.Fields}>
                            Name: <input type='text' placeholder='Enter your name' />
                        </div>

                        <div className={style.Fields}>
                            Email: <input type='text' placeholder='Enter your email' />
                        </div>

                        <div className={style.Fields}>
                            Password: <input type='text' placeholder='Enter your password' />
                        </div>

                        <div>
                            <input type='checkbox' className={style.marginTop} /> By signing up you agree to receive updates and special offers
                        </div>

                        <div style={{ marginLeft: "90px" }}>
                            <button className={style.marginTop} style={{ padding: "7px 35px", backgroundColor: "rgb(0, 0, 103)", color: "white", borderRadius: "20px" }}>Submit</button>
                        </div>
                    </div>
                    <div>
                        <img src={vector} alt='image' width={400} height={400} />
                    </div>
                </div>


            </div>
        </>
    )
}

export default SignUpForm