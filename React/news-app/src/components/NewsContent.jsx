import React from 'react'
import "./NewsContent.css"
import NewsHeader from './NewsHeader'
import NewsTitle from './NewsTitle'
import NewsBody from './NewsBody'
import Author from './Author'

function NewsContent() {
    // let NewsTitle ="Nation"
    // let NewsBody ="News Content 1"
    // let Author="Syamala"
    let news = [
        {NewsTitle:"Sports",NewsBody:"Content 1",Author:"Syamala"},
        {NewsTitle:"Local",NewsBody:"Content 1",Author:"Harika"},
        {NewsTitle:"International",NewsBody:"Content 1",Author:"Saranya"}
    ]
  return (
    <div className='news-content'>
                <hr></hr>

        {/* <h2 className='news-heading'>UPSC Released the Notification for 2026</h2>
        <p>The UPSC notification 2026 will be released on January 14, 2026, on the official UPSC website, upsc.gov.in. The application window will close on February 3, 2026. The preliminary exam is scheduled for May 24, 2026, and the main exam will begin on August 21, 2026. </p> */}
        {/* <div>NewsTitle : {NewsTitle}</div>
        <div>NewsBody : {NewsBody}</div>
        <div>Author : {Author}</div> */}
        {news.map((item,idx)=>( 
            <div key:idx className='news-item'>
                <div><NewsTitle NewsTitle={item.NewsTitle}/></div>
                <p><NewsBody NewsBody = {item.NewsBody}/></p>
                <h6><Author Author={item.Author}/></h6>
                        <hr></hr>

            </div>
        ))
        }
        </div>
  )
}

export default NewsContent