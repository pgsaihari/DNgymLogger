import axios from "axios";
import React, { FormEvent, useState } from "react";
const AddDataModal = () => {
  const [workout,setWorkout]=useState("")
  const [weight,setWeight]=useState<number>(0)

  const handleSubmit=async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{

    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <form className="max-w-sm mx-auto " onSubmit={handleSubmit}>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Todays:Workout
        </label>
        <input
          type="text"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required
          onChange={(e)=>{
            setWorkout(e.target.value)
          }}
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Weight
        </label>
        <input
          type="number"
          
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
          onChange={(e) => {
            // Parse the input value to a number
            const parsedWeight = parseFloat(e.target.value);
        
            // Check if the conversion is successful before setting the state
            if (!isNaN(parsedWeight)) {
              setWeight(parsedWeight);
            }
          }}
        />
      </div>

      <button
        type="submit" 

        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  );
};

export default AddDataModal;
