import React, { useState } from 'react';
// // import Loading from '../../components/Loading';
// import icon from '../../../images/icon-google.png';
import '../../styles/admin-login.css';
import { AuthConsumer } from '../../authContext';

function Login(): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
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
                            <h2>Admin Log In</h2>
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
                                    type="password"
                                    data-testid="password-input"
                                    value={password}
                                    className="text"
                                    required
                                    onChange={handlePasswordChange}
                                />
                                <label>Password</label>
                                <div className="border"></div>
                            </div>
                            <div className="remember-form-checkbox m-l-4">
                                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                <label className="label-checkbox100" htmlFor="ckb1">
                                    Remember me
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
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
}

export default Login;
