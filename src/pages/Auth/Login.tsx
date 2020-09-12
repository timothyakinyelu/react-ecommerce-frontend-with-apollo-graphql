import React, { useState } from 'react';
// // import Loading from '../../components/Loading';
// import icon from '../../../images/icon-google.png';
import '../../styles/admin-login.css';
import { AuthConsumer } from '../../authContext';

const Login: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState<boolean>(true);
    const [eye, setEye] = useState<boolean>(true);
    // const [show, setShow] = useState<boolean>(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
        // setShow(true);
    };

    const toggleShow = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        e.preventDefault();
        setHidden(!hidden);
        setEye(!eye);
    };

    return (
        <AuthConsumer>
            {({ handleAuthentication }) => (
                <div className="container-login">
                    <div className="login-container card max-w-sm w-full lg:max-w-full lg:flex">
                        <form
                            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                                handleAuthentication(e, email, password);
                            }}
                        >
                            <h2>Log In</h2>
                            <div className="input-border">
                                <input
                                    type="text"
                                    data-testid="login-input"
                                    value={email}
                                    className="text"
                                    required
                                    onChange={handleEmailChange}
                                />
                                <label>Email</label>
                                <div className="border"></div>
                            </div>

                            <div className="input-border">
                                <input
                                    type={hidden ? 'password' : 'text'}
                                    data-testid="password-input"
                                    value={password}
                                    className="text password"
                                    required
                                    pattern=".*\S.*"
                                    onChange={handlePasswordChange}
                                />
                                {/* {show && ( */}
                                <span className="show-hide">
                                    {eye ? (
                                        <i className="mdi mdi-eye-outline" onClick={toggleShow}></i>
                                    ) : (
                                        <i className="mdi mdi-eye-off-outline" onClick={toggleShow}></i>
                                    )}
                                </span>
                                {/* )} */}
                                <label>Password</label>
                                <div className="border"></div>
                            </div>
                            {/* <div className="remember-form-checkbox m-l-4">
                                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                <label className="label-checkbox100" htmlFor="ckb1">
                                    Remember me
                                </label>
                            </div> */}
                            <div className="button-div flex items-center justify-between">
                                <button className="btn" type="submit">
                                    Sign In
                                </button>
                                <a
                                    className="inline-block align-baseline font-bold text-sm text-custom-400 hover:text-blue-800"
                                    href="#password"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            {/* <div className="text-center w-full p-t-42 p-b-22">
                                <span className="txt1">Or login with social networks</span>
                            </div>
                            <div className="flex-c p-b-112">
                                <a href="#" className="login100-social-item">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                                <a href="#" className="login100-social-item">
                                    <img src={icon} alt="GOOGLE" />
                                </a>
                            </div> */}
                        </form>
                    </div>
                </div>
            )}
        </AuthConsumer>
    );
};

export default Login;
