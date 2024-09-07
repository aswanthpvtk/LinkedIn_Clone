import React from 'react'
import './Widgets.css'
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import FiberNewSharpIcon from '@mui/icons-material/FiberNewSharp';

function Widgets() {
    const newsArticle=(heading,subtitle)=>(
        <div className="widgets_artcle">
            <div className="widgets_artcle_left">
            
            </div>
            <div className="widgets_artcle_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
                </div>
        </div>
    )
  return (
    <>
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoSharpIcon/>
        </div>
        {newsArticle("The top B-school For Career groth","17min ago . 456434 readers ")}
        {newsArticle("The Bit coin groth $234","17min ago . 676434 readers ")}
        {newsArticle("The React reduc is For Career groth","17min ago . 456434 readers ")}
        {newsArticle("The top B-school For Career groth","17min ago . 956434 readers ")}
        {newsArticle("The Bit coin groth $234","17min ago . 236434 readers ")}
        {newsArticle("The React reduc is For Career groth","17min ago . 256434 readers ")}



    </div>
    
    </>
  )
}

export default Widgets