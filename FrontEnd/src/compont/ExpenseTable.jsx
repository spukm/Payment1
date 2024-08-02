import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetAllPayment from "../hooks/useGetAllPayment";
import useGetAllExpense from "../hooks/useGetAllExpense";

const TablePayment = () => {
  const navigate = useNavigate();
  const { expense } = useSelector((store) => store.app);

  useGetAllExpense();

  // Calculate total amount
  const totalAmount = expense.reduce((total, payment) => total + parseFloat(payment.amount || 0), 0);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Format date and time as per locale
  };

  return (
    <div className="flex items-center justify-between pb-40  w-[100%]">
      <div className="w-[100%] h-svw">
        <Table striped bordered hover className="">
          <thead>
            <tr>
              <th className="w-2">Sr.No</th>
              <th>First Name</th>
			  <th>Expense</th>
              <th>Payment</th>  
              <th>Type</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {expense && expense.map((expense, index) => (
              <tr key={expense._id} >
                <td>{index + 1}</td>
                <td>{expense?.name}</td>
                <td>{expense?.expenditure}</td>
			        	<td>{expense?.amount}</td>
                <td>{expense?.method}</td>
                <td className="">{formatDate(expense?.createdAt)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3"><strong>Total Amount:-</strong></td>
              <td colSpan="1"><strong>{totalAmount.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
};

export default TablePayment;
