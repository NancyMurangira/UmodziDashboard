import './index.css'
import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { IoHomeOutline } from 'react-icons/io5';
import { FcStatistics } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
import { CiDollar } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronRight } from "react-icons/hi";

const Settings = () =>{

    return (
      <div>
             <h1>Settings</h1>
             <div className='container'>
             <div className="sections">
              
          <div className="home">
            <IoHomeOutline />
            <p>Home</p>
          </div>

    
          <div className="transaction">
          <CiDollar />
            <p>Transaction</p>
          </div>


          <div className="statistics">
            <FcStatistics />
            <p>Statistics</p>
          </div>


          <div className="care">
            <RiCustomerService2Line />
            <p>Customer Care</p>
          </div>


          <div className="setting">
            <IoSettingsOutline />
            <p>Settings</p>
          </div>


          <div className="log">
            <IoIosLogOut />
            <p>Log Out</p>
          </div>
        </div>


          <div className='heading'>
          <h2>Accounts</h2>

          <div className='customer'>
            <div className='icon'>
            <IoPersonCircleOutline />
            <p> Customer Name</p>
            </div>
            <HiChevronRight />
            </div>
          

            <div className='language'>
            <div className='icon-language'>
            <GrLanguage />
            <p>Language</p>
            </div>
            <HiChevronRight />
            <br></br>
            </div>

            <div className='notify'>
            <div className='icon-notify'>
            <IoIosNotifications />
            <p>Notifications</p>
            </div>
            <HiChevronRight />
            <br></br>
            </div>
            
            <div className='mode'>
            <IoIosNotifications />
            <p>Dark Mode</p>
            </div>


          </div>
          </div> 



        </div>


       
    )
}


export default Settings;


