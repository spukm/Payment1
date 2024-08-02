import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setExpense, setPayments } from "../redux/appSlice";

const useGetAllExpense=()=>{
	const dispatch=useDispatch();
	const {payments}=useSelector(store=>store.app)
	useEffect(()=>{
		const fetchPayments= async()=>{
			console.log("Fetching payments...")
			try {
				const res =await axios.get("http://localhost:8080/api/v1/Payment/getAllExpense", {
					withCredentials: true,
				  })
				 
				 dispatch(setExpense(res.data.payments))
				  
				  
				
			} catch (error) {
				console.log(error);
			}
		}
		fetchPayments();
	},[]);
}
export default useGetAllExpense;