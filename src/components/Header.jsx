import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOptions from './HeaderOptions';
import HouseIcon from '@mui/icons-material/House';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import { Badge } from '@mui/material'; // Import the Badge component
import CropDinIcon from '@mui/icons-material/CropDin';
function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <div className='header_search'>
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className='header_right'>
                <HeaderOptions Icon={HouseIcon} title='Home' />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
                {/* <HeaderOptions Icon={MessageIcon} title='Messaging' /> */}
                

                <Badge 
                    className='nofi_badge' 
                    badgeContent={3} 
                    color="error"
                    sx={{
                        '& .MuiBadge-badge': {
                            right:53, // Adjust the horizontal position
                            top: 6, // Adjust the vertical position
                            border: `2px solid white`, // Optional: border around the badge
                            padding: '0 4px', // Optional: extra padding
                        },
                    }}
                >
                    <HeaderOptions Icon={MessageIcon} title='Messaging' />
                </Badge>
                
                
                {/* Notification icon with badge */}
                <Badge 
                    className='nofi_badge' 
                    badgeContent={2} 
                    color="error"
                    sx={{
                        '& .MuiBadge-badge': {
                            right:53, // Adjust the horizontal position
                            top: 6, // Adjust the vertical position
                            border: `2px solid white`, // Optional: border around the badge
                            padding: '0 4px', // Optional: extra padding
                        },
                    }}
                >
                    <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
                </Badge>
                
                <HeaderOptions avatar="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7d2a57d4-23ee-4ccf-b34c-bd6ddbb1f4a8/width=450/00000-3694828998-A%20professional%20profile%20photo%20for%20linkedin%20of%20%20man,%20%20business%20clothing,%20at%20office,%20bokeh%20background,%20deep%20of%20field,%20kkw-ph1%20_lora.jpeg" title="Aswanth" />
                
                <div style={{ width: '1px', backgroundColor: "gray", marginInlineEnd: '5px' }}></div>

                <HeaderOptions Premium={MenuIcon} title='For Business ▼' />
                {/* <HeaderOptions Premium={CropDinIcon} title='Premium' /> */}
                <div style={{marginLeft:'-25px'}}>
                    <div style={{height:'50%',width:'20px',backgroundColor:'#e7a33e',marginLeft:'21px',marginRight:'21px',borderRadius: '4px'}}></div>
                    <div style={{height:'50%', display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <span style={{fontSize:'12px',fontWeight:'400',color:'grey'}}>Premium</span>
                    {/* <HeaderOptions title='Premium'/> */}
                    </div>
            
                </div>
            </div>
        </div>
    );
}

export default Header;
