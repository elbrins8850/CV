import React from 'react'
import { social } from '../data/dummydata'

export const Footer = () => {
  return (
    <>
     <footer>
        {social.map((item)=>{
            return(
                <a href={item.url} data-aos='zoom-in-left'>{item.icon}</a>
            )
        })}
        <p data-aos='zoom-in-right'>All Right Rescved 2024</p>
        </footer>   

    </>
  )
}
