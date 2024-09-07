import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { Avatar } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { db } from './firebase';
// import firebase from 'firebase';

function Feed() {
  // const [posts,setPosts]=useState([])
  // const [input,setInput]=useState('')

  // useEffect(()=>{
  //     db.collection("posts").onSnapshot(snapshot=>(
  //       setPosts(snapshot.docs.map(doc=>(
  //         {
  //           id:doc.id,
  //           data:doc.data(),
  //         }
  //       )))
  //     ))
  // },[])

  //  const sendPost= (e)=>{
  //   e.preventDefault();

  //   db.collection('posts').add({
  //     name:'Aswanth',
  //     description:'this is a test',
  //     message:input,
  //     photoUrl:'',
  //     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //  };

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className="feed_input">
          <Avatar className='avathar_feed' src='https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7d2a57d4-23ee-4ccf-b34c-bd6ddbb1f4a8/width=450/00000-3694828998-A%20professional%20profile%20photo%20for%20linkedin%20of%20%20man,%20%20business%20clothing,%20at%20office,%20bokeh%20background,%20deep%20of%20field,%20kkw-ph1%20_lora.jpeg' />
          <form action="">
            <input type="text" placeholder='Start a post, try writing with AI' />
            {/* value={input} onChange={e=>setInput(e.input.value)} */}
            <button type='submit' >Send</button>
            {/* onClick={sendPost} */}
          </form>
        </div>
        {/* <div style={{ height: '1px', backgroundColor: "gray", width: '100%', margin: '10px 0' }}>
        </div> */}
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title='Media' color="#70B5F9" />
          <InputOption Icon={CalendarMonthIcon} title='Event' color="#E7A33E" />

          <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#e06847" />

        </div>

      </div>
      <div className='sort'>
        <span className='span'> ———————————————————————————————— sort by:</span>
        <select className="opt" id="cars">
          <option value="volvo">Top</option>
          <option value="saab">Recent</option>
        </select>

      </div>
      {/* posts */}
      {/* {posts.map(({id,data:{name,description,message,photoUrl}})=>(
          <Post
            key={id}
            name={name} 
            description={description}
            message={message}
            photoUrl={photoUrl}         
          />
      ))} */}

      <Post 
         name="Roshan Roy"
         description="Software Engineer Trainee" 
         message="React" 
         img="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
         like="Praise esho"
         comments="23 Comments"
         photoUrl='https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png'
     />.

      <Post 
         name="Murshid T"
         description="DevOps Engineer" 
         message="Firebase" 
         photoUrl="https://blog.openreplay.com/images/firebase-cloud-storage-for-react-apps/images/hero.png" 
         img="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg" 
         like="Athul krishnan"
         comments="93 Comments"
         />
      <Post 
         name="Lithin D" 
         description="Software Engineer" 
         message="MongoDB" 
         photoUrl="https://images.contentstack.io/v3/assets/blt7151619cb9560896/bltfe3bee7877352896/Meta_Generic.png" 
         img='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8yN19yZWFsaXN0aWNfcGhvdG9fb2Zfc21pbGluZ19oYW5kc29tZV95b3VuZ19pbl8xNWExMTE1ZC0xZTBiLTQ4YjAtOGEyNi01ZDE1ZmE3Njg2MzYucG5n.png'
         like="Praise esho"
         comments="2093 Comments"
         />

    </div>
  )
}

export default Feed