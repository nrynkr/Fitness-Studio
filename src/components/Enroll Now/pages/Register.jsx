import { useState } from "react";
import './auth.css'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import GoogleButton from 'react-google-button'



const Register = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    // const [registrationStatus, setRegistrationStatus] = useState('');

    const navigate = useNavigate();

    //   const handleRegistration = async () => {
    //     try {
    //       await auth.createUserWithEmailAndPassword(formData.email, formData.password);
    //       setRegistrationStatus('success');
    //     } catch (error) {
    //       setRegistrationStatus('error');
    //     }
    //   };

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Register Form Data:", formData);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', JSON.stringify(user))
            alert("User Register Successfully!");
            navigate("/login")
        } catch (error) {
            alert(error.code);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            localStorage.setItem('token', user.accessToken)
            localStorage.setItem('user', JSON.stringify(user))
            alert("User Login Successfully!");
            navigate("/userdetails")
        } catch (error) {
            alert(error.code);
        }
    };



    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <div className='bg-blue-500 md:w-1/2 flex justify-center items-center' id='bgphoto'>
            <div className='w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2'>
            <h1 className='text-2xl font-bold mb-8  text-center'id='coloring'>
                        Welcome Back!
                    </h1>
            <button
                            type='button'
                            onClick={() => navigate("/login")}
                            className='w-full enrollnowBTN'>
                            Login
                        </button>
                        </div>
            </div>
            <div className='bg-white md:w-1/2 flex justify-center items-center'>
                <div className='w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2'>
                    <h2 className='text-2xl font-semibold mb-8 text-center'>Register Here</h2>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        {/* <div>
                            <label
                                className='block mb-2 text-lg'
                                htmlFor='name'>
                                Full Name
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter Full Name"
                            />
                        </div> */}
                        <div>
                            <label
                                className='block mb-2 text-lg'
                                htmlFor='email'>
                                Email
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter Email Id"
                            />
                        </div>
                        {/* <div>
                            <label
                                className='block mb-2 text-lg'
                                htmlFor='phone'>
                                Phone No
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                type='tel'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter Phone Number"
                            />
                        </div> */}
                        <div>
                            <label
                                className='block mb-2 text-lg'
                                htmlFor='password'>
                                Password
                            </label>
                            <input
                                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                type='password'
                                id='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Enter Password"
                            />
                        </div>
                        <button
                            className='w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-green-600'
                            type='submit' id='login-register-button'>
                            Register
                        </button>
                    </form>
                    <hr className="w-100 h-px my-8 bg-black border-0 dark:bg-black  " />

                    <div className='flex justify-center items-center mt-4 p-2'>
                        <GoogleButton
                            onClick={handleSignInWithGoogle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;