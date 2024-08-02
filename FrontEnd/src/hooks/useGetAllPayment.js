import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setPayments } from "../redux/appSlice";

const useGetAllPayment=()=>{
	const dispatch=useDispatch();
	const {payments}=useSelector(store=>store.app)
	useEffect(()=>{
		const fetchPayments= async()=>{
			console.log("Fetching payments...")
			try {
				const res =await axios.get("http://localhost:8080/api/v1/Payment/getAllPayment", {
					withCredentials: true,
				  })
				 
				 dispatch(setPayments(res.data.payments))
				  
				  
				
			} catch (error) {
				console.log(error);
			}
		}
		fetchPayments();
	},[]);
}
export default useGetAllPayment;