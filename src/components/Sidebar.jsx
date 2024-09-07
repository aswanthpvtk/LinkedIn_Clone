import { Avatar } from '@mui/material'
import React from 'react'
import './sidebar.css'

function Sidebar() {
     
    const recentItem = (topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <sidebar className="sidebar_top">
                <img src="https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-p_1258-112144.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid" alt="" />
                <Avatar className='sidebar_avatar' src='https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7d2a57d4-23ee-4ccf-b34c-bd6ddbb1f4a8/width=450/00000-3694828998-A%20professional%20profile%20photo%20for%20linkedin%20of%20%20man,%20%20business%20clothing,%20at%20office,%20bokeh%20background,%20deep%20of%20field,%20kkw-ph1%20_lora.jpeg' />
                <h2>Aswanth P</h2>
                <h4 className='gray'>aswasnth@gmail.com</h4>
            </sidebar>
            <div className="sidebar_status">
                <div className="sidebar_stat">
                    <p className='gray'>Profile view</p>
                    <p className="sidebar_statNumber">
                        2.543
                    </p>
                </div>
                <div className="sidebar_stat">
                    <p className='gray'>Views all analytics</p>
                    <p className="sidebar_statNumber">
                        
                    </p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p className='gray'>Recent</p>
                {recentItem('Reactjs')}
                {recentItem('Programming')}
                {recentItem('Software engineering')}
                {recentItem('Design')}
                {recentItem('Developer')}

            </div>
        </div>
    )
}

export default Sidebar