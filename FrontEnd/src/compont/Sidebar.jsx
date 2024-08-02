import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FcViewDetails } from "react-icons/fc";
import { FaHandHoldingUsd, FaWallet, FaCrown } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GiWallet } from "react-icons/gi";
import { MdFestival } from "react-icons/md";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const sidebarItems = [
    { icon: <IoMdHome size={"24px"} />, path: "/", text: "Home" },
    { icon: <RiMoneyRupeeCircleFill size={"24px"} />, path: "/Payment", text: "Payment" },
    { icon: <FcViewDetails size={"24px"} />, path: "/Details", text: "Payment Details" },
    { icon: <GiWallet size={"24px"} />, path: "/Expence", text: "Expense" },
    { icon: <FaWallet size={"24px"} />, path: "/expensetable", text: "All-Expense" },
    { icon: <FaHandHoldingUsd size={"24px"} />, path: "/Total", text: "Saving" },
  ];

  const { user } = useSelector(store => store.app);

  return (
    <div className="w-64 bg-back h-screen border-r border-gray-300">
      {user && (
        <div>
          {sidebarItems.map((item, index) => (
            <NavLink to={item.path} key={index} className="text-decoration-none">
              <ListItemButton sx={{ p: 2, borderRadius: 1, mb: 1, '&:hover': { bgcolor: 'grey.200' } }}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </NavLink>
          ))}
          
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
          
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <MdFestival size={"25px"} className='text-black' />
              </ListItemIcon>
              <ListItemText primary="Festival" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/Shiv-jayanti" className="text-decoration-none">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FaCrown />
                    </ListItemIcon>
                    <ListItemText primary="Shiv-jayanti" />
                  </ListItemButton>
                </NavLink>
                <NavLink to="/saving" className="text-decoration-none">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FaCrown />
                    </ListItemIcon>
                    <ListItemText primary="Rajyabhishekh" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </List>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
