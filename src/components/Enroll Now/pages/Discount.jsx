import React, { useState } from "react";
import "./pages.css";

import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

const pricingPlans = [
    { duration: "1 Month", price: 2000, discount: 5 },
    { duration: "3 Months", price: 4000, discount: 10 },
    { duration: "6 Months", price: 6000, discount: 20 },
    { duration: "1 Year", price: 9000, discount: 30 },
    { duration: "Lifetime", price: 12000, discount: 40 },
];

const Discount = () => {


    const [selectedPlan, setSelectedPlan] = useState(null);

    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        const confirmed = window.confirm("Are you sure you want to log out?");
        if (confirmed) {
            navigate("/");
        }
    }


    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (amount) => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("You are offline...Failed to load razorpay SDK");
            return;
        }

        const options = {
            key: "rzp_test_mOvBMw0KK5CDuV",
            currency: "INR",
            amount: 100000,
            name: "Fitness Stdio",
            description: "Thanks for Purchasing",
            image: "https://th.bing.com/th/id/OIP.Hx8-M_DJuLr23J4yqMO4gwHaGS?pid=ImgDet&rs=1",

            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert("Payment Successfully");
                alert("You can LOGOUT!");
            },

            prefill: {
                name: "Fitness Studio",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

    };

    return (
        // this is heading
        
        <div className='bg-gray-100 min-h-screen flex justify-center items-center '>
            <div className='bg-white shadow-lg rounded-lg p-8'>
            <h2 className='text-4xl text-slate-500 text-center font-bold mb-6 gymHeading'>
                    Choose the class you would like to attend
                </h2>
                <div id="classes-select">
                <input type="radio" name="fav_language" defaultValue="HTML" className="radio-class" id="radio" de/>
                <button className="btn" mode="contained" color="green" >  Yoga</button>
                <input type="radio" name="fav_language" defaultValue="HTML"className="radio-class" id="radio"/>
                    <button className="btn" mode="contained" color="red">Gym</button>
                <input type="radio" name="fav_language" defaultValue="HTML" className="radio-class" id="radio"/><button className="btn" mode="contained" color="green" >Meditation</button>
                <input type="radio" name="fav_language" defaultValue="HTML" className="radio-class" id="radio"/><button className="btn" mode="contained" color="red" >Zumba</button>
</div>
                <h2 className='text-4xl text-slate-500 text-center font-bold mb-6 gymHeading'>
                    Choose Your Pricing Plan
                </h2>

                {/* start the grid */}
                <div className='grid grid-cols-1 gap-6'>
                    <div class='inline-grid grid-cols-4 gap-2'>
                        <span className='container'>
                            <img
                                className='w-16 md:w-32 lg:w-48 object-cover lg:object-top image'
                                src='https://t4.ftcdn.net/jpg/00/98/97/57/240_F_98975761_HF7SqSbR0k7UIhXZcC96fgj5dim1r4Az.jpg'
                                alt='discount pic'
                            />
                            <div className='overlay'>
                                <div className='text'>
                                    <p className="text-lg w-32 h-50">
                                    You can save 10% if you choose the 3-month
                                    plan option.
                                    </p>
                                </div>
                            </div>
                        </span>

                        {/* This is Discount section of Enroll Now page */}

                        <span className='container'>
                            <img
                                className='w-16 md:w-32 lg:w-48 object-cover lg:object-top image'
                                src='https://t4.ftcdn.net/jpg/00/98/97/59/240_F_98975906_CJNgwJZ8z62SHsjlGqSrG2JisAXWeXBh.jpg'
                                alt='discount pic'
                            />
                            <div className='overlay '>
                                <div className='text'>
                                    <p className="text-lg w-32 h-50">
                                    You can save 20% if you choose the 6-month
                                    plan option.
                                    </p>
                                </div>
                            </div>
                        </span>
                        <span className='container'>
                            <img
                                className='w-16 md:w-32 lg:w-48 object-cover lg:object-top image'
                                src='https://t4.ftcdn.net/jpg/00/98/97/67/240_F_98976780_gQyTklvRpof6bY4KQtyLzdYohbOwuelQ.jpg'
                                alt='discount pic'
                            />
                            <div className='overlay'>
                                <div className='text'>
                                    <p className="text-lg w-32 h-50">
                                    You can save 30% if you choose the 1-Year
                                    plan option.
                                    </p>
                                </div>
                            </div>
                        </span>
                        <span className='container'>
                            <img
                                className='w-16 md:w-32 lg:w-48 object-cover lg:object-top image'
                                src='https://t3.ftcdn.net/jpg/00/98/97/68/240_F_98976874_2oufUlOChMQ1WwlkNyHkeOAHM6B0cRDV.jpg'
                                alt='discount pic'
                            />
                            <div className='overlay'>
                                <div className='text'>
                                    <p className="text-lg w-32 h-22">
                                    You can save 40% if you choose the Lifetime
                                    plan option.
                                    </p>
                                </div>
                            </div>
                        </span>
                    </div>
                    {/* End of the discount section */}

                    {/* start the main discount function and dropdown menu */}

                    <div>
                        <label
                            htmlFor='selectedPlan'
                            className='block mb-2 text-sm font-medium text-gray-700 selectPlan'>
                            Select Plan
                        </label>
                        <select
                            id='selectedPlan'
                            className='w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm selectBTN'
                            value={selectedPlan ? selectedPlan.duration : ""}
                            onChange={(e) => {
                                const duration = e.target.value;
                                const plan = pricingPlans.find(
                                    (p) => p.duration === duration
                                );
                                setSelectedPlan(plan || null);
                            }}>

                            <option value=''>Select a plan</option>

                            {pricingPlans.map((plan) => (
                                <option
                                    key={plan.duration}
                                    value={plan.duration}>
                                    {plan.duration}
                                </option>
                            ))}
                        </select>
                    </div>
                    {selectedPlan && (
                        <div>
                            <div className='flex justify-between'>
                                <p className='text-lg font-semibold priceDES'>{`Price: ₹ ${selectedPlan.price}`}</p>
                                <p className='text-lg font-semibold discountDES'>{`Discount: ${selectedPlan.discount}% off`}</p>
                            </div>

                            <p className='text-lg font-semibold totalDES'>{`Total: ₹ ${selectedPlan.price -
                                (selectedPlan.price * selectedPlan.discount) /
                                100
                                } only :-)`}</p>

                        </div>
                    )}

                    {/* end of the main discount function and dropdown menu */}

                    {/* This is the button section of Enroll Now page */}
                    <div className='mt-6 text-center'>
                        <button

                            className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer  '
                            // onClick={handlePayment}
                            //onClick={() => displayRazorpay(selectedPlan)}

                            disabled={!selectedPlan}>
                            Make Payment
                        </button>
                        {/* End of the button section of Enroll Now page */}
                    </div>

                    <hr className='w-100 h-px mt-0 bg-black border-0 dark:bg-black  ' />
                    <div className='mt-6 text-center'>
                        <button
                            className='inline-flex items-center  px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-center text-white bg-indigo-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer'
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>

                </div>
            </div>
        </div>
        
        // Add active class to the current button (highlight it)
        
        
    );
};




export default Discount;
