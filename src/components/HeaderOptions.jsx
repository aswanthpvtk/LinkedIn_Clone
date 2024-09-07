import React from 'react'
import './HeaderOptions.css'
import { Avatar } from '@mui/material';

function HeaderOptions({avatar,Icon,Premium,title,color}) {
  return (
    <div className='headerOptions'>
        {Icon && <Icon className='headerOptions' />}
        {avatar &&
            <Avatar className='headerOptions_icon'style={{fontSize:'0px',marginRight:'15px'}} src={avatar}/>
        }
        {Premium && <Premium className='headerOptions' />}
        <h3 className='headerOptions_title'>{title}</h3>

    </div>
  );
}

export default HeaderOptions