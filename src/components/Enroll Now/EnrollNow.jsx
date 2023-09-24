import React from "react";
import "./enrollNow.css";
import { useNavigate } from "react-router-dom";
import loginimage from "../../assets/fitimage.jpg"
const EnrollNow = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col md:flex-row h-screen'>
        <div className='bg-blue-500 md:w-1/2 flex justify-center items-center'>
            <img
                className='w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 imagePhoto'
                src={loginimage}
                alt='Side pic'
            />
        </div>
        <div className='bg-white md:w-1/2 flex justify-center items-center' id='bgphoto'>
            <div className='w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2' >
            <div className='flex flex-wrap justify-center'>
            <button
                            type='button'
                            onClick={() => navigate("/register")}
                            className='px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900 hover:bg-sky-700 enrollnowBTN'>
                            Register
                        </button>
                        </div>
                        <div className='flex flex-wrap justify-center'>
                        <button
                            type='button'
                            onClick={() => navigate("/login")}
                            className='px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900 hover:bg-green-700 enrollnowBTN'>
                            Login
                        </button>
</div>
                
               
            </div>
        </div>
    </div>
    );
};

export default EnrollNow;