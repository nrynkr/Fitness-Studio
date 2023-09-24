
import React, { useState } from "react";
import "./pages.css";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
	const [fullName, setFullName] = useState("");
	const [currentWeight, setCurrentWeight] = useState("");
	const [height, setHeight] = useState("");
	const [bmi, setBmi] = useState("");
	const [age, setAge] = useState("");
	const [goalWeight, setGoalWeight] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [emergencyContactPerson, setEmergencyContactPerson] = useState("");
	const [relationship, setRelationship] = useState("");
	const [deserveReason, setDeserveReason] = useState("");
	const [acceptedTerms, setAcceptedTerms] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		// Handle form submission here
		e.preventDefault();
		console.log(
			fullName,
			currentWeight,
			height,
			bmi,
			age,
			goalWeight,
			address,
			phoneNumber,
			email,
			emergencyContactPerson,
			relationship,
			deserveReason,
			acceptedTerms
		);
		navigate("/discount");
	};

	const handleLogout = async () => {
		await signOut(auth);
		localStorage.removeItem("token");
		localStorage.removeItem("user");

		const confirmed = window.confirm("Are you sure you want to log out?");
		if (confirmed) {
			navigate("/login");
		}
	};

	return (
		<div className="bg-gray-100 min-h-screen flex justify-center items-center ">
			<div className="bg-white shadow-lg rounded-lg p-8">
				<h2 className="text-4xl text-slate-500 text-center font-bold mb-6 gymHeading">
					Gym Registration Form
				</h2>

				<div className="grid grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="fullName"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Full Name
						</label>
						<input
							type="text"
							id="fullName"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							placeholder="Enter Full Name"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="currentWeight"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Current Weight
						</label>
						<input
							type="text"
							id="currentWeight"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={currentWeight}
							onChange={(e) => setCurrentWeight(e.target.value)}
							placeholder="Enter Current Weight"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="height"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Height
						</label>
						<input
							type="text"
							id="height"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={height}
							onChange={(e) => setHeight(e.target.value)}
							placeholder="Enter Height"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="bmi"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Body Mass Index - BMI
						</label>
						<input
							type="text"
							id="bmi"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={bmi}
							onChange={(e) => setBmi(e.target.value)}
							placeholder="Find Your BMI: BMI = weight (kg) / (height (m))^2"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="age"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Age
						</label>
						<input
							type="text"
							id="age"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={age}
							onChange={(e) => setAge(e.target.value)}
							placeholder="Enter Age"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="goalWeight"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Goal Weight
						</label>
						<input
							type="text"
							id="goalWeight"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={goalWeight}
							onChange={(e) => setGoalWeight(e.target.value)}
							placeholder="Enter Goal Weight"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="address"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Address
						</label>
						<textarea
							id="address"
							placeholder="Enter Your Full Address with PIN code"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						></textarea>
					</div>
					<div>
						<label
							htmlFor="phoneNumber"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Phone Number
						</label>
						<input
							type="text"
							id="phoneNumber"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							placeholder="Enter Phone Number"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="text"
							id="email"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter Email"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="emergencyContactPerson"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Emergency Contact Person
						</label>
						<input
							type="text"
							id="emergencyContactPerson"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={emergencyContactPerson}
							onChange={(e) => setEmergencyContactPerson(e.target.value)}
							placeholder="Enter Emergency Contact Person"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="relationship"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Relationship
						</label>
						<input
							type="text"
							id="relationship"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={relationship}
							onChange={(e) => setRelationship(e.target.value)}
							placeholder="Enter Relationship"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="deserveReason"
							className="block mb-2 text-sm font-medium text-gray-700"
						>
							Tell why you deserve to be in the Grace Transformation Challenge
						</label>
						<textarea
							id="deserveReason"
							className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={deserveReason}
							onChange={(e) => setDeserveReason(e.target.value)}
							placeholder="Enter Reason why you deserve to be in the Grace Transformation Challenge."
							required
						></textarea>
					</div>

					<div className="flex items-center">
						<input
							type="checkbox"
							id="acceptedTerms"
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
							checked={acceptedTerms}
							onChange={(e) => setAcceptedTerms(e.target.checked)}
							
						/>
						<label
							htmlFor="acceptedTerms"
							className="ml-2 text-sm text-gray-700"
						>
							I accept the terms and conditions.
						</label>
					</div>
					<br />
					<div className="mt-6 ">
						<button
							className="inline-flex items-center  px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-center text-white bg-indigo-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer"
							onClick={handleSubmit}
							disabled={!acceptedTerms}
							id="submit"
						>
							Submit
						</button>
					</div>

					<div className="mt-6 text-right">
						<button
							className="inline-flex items-center  px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-center text-white bg-indigo-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer"
							onClick={handleLogout}
							id="logout"
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;

