import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';
import Payment from './Payment';
import TablePayment from './TablePayment';
import Login from './Login';
import Signup from './Signup';
import { useSelector } from 'react-redux';
import Festival1 from './Festival1'
import Expense1 from './Expense1';
import ExpenseTable from './ExpenseTable.jsx'
import SummaryTable from './SummaryTable .jsx';
const MyRoutes = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.app);

  useEffect(() => {
    // Redirect to login if user is not authenticated
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex pl-10 py-3 w-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        
        {/* Protected Routes */}
        <Route path="/payment" element={ <Payment /> } />
        <Route path="/details" element={ <TablePayment />} />
        <Route path="/Shiv-jayanti" element={<Festival1 /> } />
        <Route path="/Expence" element={ <Expense1 />} />
        <Route path="/expensetable" element={ <ExpenseTable />} />
        <Route path="/total" element={ <SummaryTable />} />

      </Routes>
    </div>
  );
};

export default MyRoutes;
