import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import useGetAllPayment from "../hooks/useGetAllPayment";

const TablePayment = () => {
  const { payments } = useSelector((store) => store.app);

  useGetAllPayment();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [filteredPayments, setFilteredPayments] = useState(payments);

  useEffect(() => {
    if (payments) {
      const filtered = payments.filter((payment) => {
        const paymentDate = new Date(payment.createdAt);
        const paymentMonth = paymentDate.getMonth() + 1; // Months are zero-indexed
        return (
          (payment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            payment.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
            payment.method.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedMonth ? paymentMonth === parseInt(selectedMonth) : true)
        );
      });
      setFilteredPayments(filtered);
    }
  }, [searchTerm, selectedMonth, payments]);

  // Extract unique months from payments for the dropdown
  
  const months = Array.from(
    new Set(
      payments.map((payment) => new Date(payment.createdAt).getMonth() + 1)
    )
  ).sort((a, b) => a - b); // Sort in ascending order

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const totalAmount = filteredPayments.reduce(
    (total, payment) => total + parseFloat(payment.amount || 0),
    0
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="flex items-center justify-between pb-32 w-[100%]">
      <div className="w-[100%] h-svw">
        <div className="mb-3 ml-auto w-80">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3  w-80">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="form-select"
          >
            <option value="">All Months</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {monthNames[month - 1]}
              </option>
            ))}
          </select>
        </div>
        <Table striped bordered hover className="">
          <thead>
            <tr>
              <th className="w-2">Sr.No</th>
              <th>First Name</th>
              <th>Payment</th>
              <th>Type</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment?.name}</td>
                <td>{payment?.amount}</td>
                <td>{payment?.method}</td>
                <td>{formatDate(payment?.createdAt)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <strong>Total Amount:</strong>
              </td>
              <td colSpan="3">
                <strong>{totalAmount.toFixed(2)}</strong>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
};

export default TablePayment;
