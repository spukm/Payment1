import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import useGetAllPayment from "../hooks/useGetAllPayment";
import useGetAllExpense from "../hooks/useGetAllExpense";

const SummaryTable = () => {
  const { payments = [] } = useSelector((store) => store.app); 
  const { expense = [] } = useSelector((store) => store.app); 

  useGetAllPayment();
  useGetAllExpense();

  const totalPayments = payments.reduce((total, payment) => total + parseFloat(payment.amount || 0), 0);
  const totalExpenses = expense.reduce((total, exp) => total + parseFloat(exp.amount || 0), 0);

  const netAmount = totalPayments - totalExpenses;

  return (
    <div className="flex items-center justify-between pl-4 w-[100%]">
      <div className="w-[100%] h-svw">
        <Table striped bordered hover>
          <tfoot>
            <tr>
              <td><strong>Total Payments:</strong></td>
              <td><strong>{totalPayments.toFixed(2)}</strong></td>
            </tr>
            <tr>
              <td><strong>Total Expenses:</strong></td>
              <td><strong>{totalExpenses.toFixed(2)}</strong></td>
            </tr>
            <tr></tr><br /><br />
            <tr>
              <td><strong>Net Amount:</strong></td>
              <td><strong>{netAmount.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
};

export default SummaryTable;
