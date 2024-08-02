import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useGetAllPayment from '../hooks/useGetAllPayment';
import { setPayments ,} from '../redux/appSlice';

const Payment = () => {
  useGetAllPayment();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    amount: "",
    method: ""
  });

  const [errors, setErrors] = useState({});
  const { payments } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Basic validation function
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.amount || formData.amount <= 0) formErrors.amount = "Amount must be a positive number";
    if (!formData.method) formErrors.method = "Payment method is required";
    return formErrors;
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    // Validate form data
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/v1/payment/create", formData, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      });

alert('Payment successfully submitted!');
      dispatch(setPayments([...payments, res.data.payment]));
      setFormData({ name: "", address: "", amount: "", method: "" }); // Clear form on success

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className='w-[100%]'>
      <div className="flex px-10 py-10">
        <form onSubmit={submitHandler} className="bg-white shadow-md rounded pl-0 w-[70%] mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={changeHandler} 
              value={formData.name}
              placeholder="Enter your name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={changeHandler} 
              value={formData.address}
              placeholder="Enter your address"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address ? 'border-red-500' : ''}`}
            />
            {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              onChange={changeHandler} 
              value={formData.amount}
              placeholder="Enter amount"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.amount ? 'border-red-500' : ''}`}
            />
            {errors.amount && <p className="text-red-500 text-xs italic">{errors.amount}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="method" className="block text-gray-700 text-sm font-bold mb-2">
              Payment Method:
            </label>
            <select
              id="method"
              name="method"
              onChange={changeHandler} 
              value={formData.method}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.method ? 'border-red-500' : ''}`}
            >
              <option value="">Select Method</option>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
            </select>
            {errors.method && <p className="text-red-500 text-xs italic">{errors.method}</p>}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
