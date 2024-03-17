import { useState } from 'react';
import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

function App() {
  
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  
const cardsDatadashboard = [
  {
    title: "Sales",
    color: {
      backGround: "blue",
      boxShadow: "rgb(81 108 233) 0px 10px 20px 0px",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "green",
      boxShadow: "rgb(50 189 71) 0px 10px 20px 0px",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "chocolate",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

const cardsDataOrders = [
  {
    title: "Pending",
    color: {
      backGround: "red",
      boxShadow: "rgb(254 5 41) 0px 10px 20px 0px",
    },
    barValue: 15,
    value: "5,632",
    png: UilUsdSquare,
    series: [
      {
        name: "Pending",
        data: [68, 56, 8, 73, 32, 159, 80],
      },
    ],
  },
  {
    title: "Delivered",
    color: {
      backGround: "green",
      boxShadow: "rgb(50 189 71) 0px 10px 20px 0px",
    },
    barValue: 75,
    value: "40,690",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Delivered",
        data: [30, 20, 90, 10, 90, 50, 40],
      },
    ],
  },
  {
    title: "Cancelled",
    color: {
      backGround:
        "darkred",
      boxShadow: "rgb(239 131 131) 0px 10px 20px 0px",
    },
    barValue: 2,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Cancelled",
        data: [16, 85, 25, 50, 52, 5, 10],
      },
    ],
  },
];

const cardsDataCustomers = [
  {
    title: "Male",
    color: {
      backGround: "blue",
      boxShadow: "rgb(81 108 233) 0px 10px 20px 0px",
    },
    barValue: 65,
    value: "79,662",
    png: UilUsdSquare,
    series: [
      {
        name: "Male",
        data: [28, 96, 58, 13, 79, 109, 200],
      },
    ],
  },
  {
    title: "Female",
    color: {
      backGround: "lightgreen",
      boxShadow: "rgb(50 189 71) 0px 10px 20px 0px",
    },
    barValue: 75,
    value: "80,000",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Female",
        data: [10, 20, 90, 10, 90, 50, 40],
      },
    ],
  },
];

const cardsDataProducts = [
  {
    title: "Men",
    color: {
      backGround: "blue",
      boxShadow: "rgb(81 108 233) 0px 10px 20px 0px",
    },
    barValue: 30,
    value: "125,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Men",
        data: [101, 80, 28, 51, 42, 139, 100],
      },
    ],
  },
  {
    title: "Women",
    color: {
      backGround: "aqua",
      boxShadow: "rgb(78 168 168) 0px 10px 20px 0px",
    },
    barValue: 50,
    value: "214,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Women",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Kids",
    color: {
      backGround:
        "chocolate",
      boxShadow: "rgb(229 127 55) 0px 10px 20px 0px",
    },
    barValue: 10,
    value: "44,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Girls",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar 
        selected={selected} 
        setSelected={setSelected} 
        expanded={expanded}
        setExpaned={setExpaned}
        sidebarVariants={sidebarVariants}
        />
        <MainDash
          selected={selected} 
          cardsDatadashboard={
            selected===0 ? cardsDatadashboard : 
            selected===1 ? cardsDataOrders :
            selected===2 ? cardsDataCustomers : 
            cardsDataProducts 
          }
        />
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
