import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8000/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const JsonData = await response.json();

            if (response.ok) {
                // console.log("Access Token: ", data.data.accessToken);
                document.cookie = `accessToken=${JsonData.data.accessToken}; path=/;`;
                console.log('User Logged in Successfully');
                navigate('/home'); // Redirect to the homepage or another page
            } else {
                // Handle errors
                setError(JsonData.message || 'Login failed');
            }
        } catch (err) {
            if (err.message === 'Failed to fetch') {
                setError('Failed to connect to the server. Please check your internet connection');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <div className='bg-stdBg flex items-center justify-center min-h-screen font-stdFont p-4'>
            <div className="rounded-2xl w-full max-w-[450px] md:h-[65%] h-auto text-center bg-white p-6">
                <h1 className='text-3xl md:text-4xl font-bold text-stdYellow'>Welcome</h1>
                <p className='text-[12px] md:text-[14px] mt-1 text-stdBlue font-semibold'>
                    Welcome to our community of skilled professionals!
                </p>
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-4 justify-center items-center mt-10">
                        <input
                            type="email"
                            placeholder='Email'
                            className='h-[45px] w-full max-w-[300px] md:max-w-[350px] border rounded-2xl pl-3 outline-none text-sm md:text-base'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            className='h-[45px] w-full max-w-[300px] md:max-w-[350px] border rounded-2xl pl-3 outline-none text-sm md:text-base'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p className='text-right mt-2 md:text-sm text-paraFont'>
                        <a href="#">Forgot Password?</a>
                    </p>
                    <div className="mt-5">
                        <button type='submit' className='h-[45px] w-[120px] bg-stdBlue rounded-full text-[18px] font-bold text-stdYellow'>
                            Login
                        </button>
                    </div>
                    {error && <p className='text-red-500 mt-2'>{error}</p>}
                    <p className='text-[12px] md:text-sm mt-2'>
                        Don't have an account? <a href="/signup " className='text-[14px] font-semibold text-stdBlue'>Sign Up</a>
                    </p>
                    <fieldset className='mt-2'>
                        <legend>OR</legend>
                    </fieldset>
                    <div className="flex flex-col gap-2 justify-center items-center mt-2">
                        <button className='w-full max-w-[250px] md:max-w-[280px] h-[40px] border border-stdBlue rounded-xl font-semibold'>
                            <i className="fa-brands fa-google mr-2"></i>
                            Login with Google
                        </button>
                        <button className='w-full max-w-[250px] md:max-w-[280px] h-[40px] border border-stdBlue rounded-xl font-semibold'>
                            <i className="fa-brands fa-apple mr-2.5 text-ternaryFont"></i>
                            Login with Apple
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}