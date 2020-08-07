import React from 'react';
import '../../styles/admin-login.css';

const AdminLogin: React.FC = (): JSX.Element => {
    return (
        <div className="login-container max-w-sm w-full lg:max-w-full lg:flex">
            <div className="border-t border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="card">
                    <h2>Sign In</h2>
                    <form>
                        <div className="input-border">
                            <input type="text" className="text" required />
                            <label>Email</label>
                            <div className="border"></div>
                        </div>

                        <div className="input-border">
                            <input type="password" className="text" required />
                            <label>Password</label>
                            <div className="border"></div>
                        </div>

                        <input type="submit" className="btn" value="Sign In" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
