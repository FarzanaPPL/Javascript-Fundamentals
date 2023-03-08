import { useEffect, useState } from "react"
import './index.css'

export const Clock=()=>{
    const [date,setDate]=useState('')

    useEffect(()=>{
        const timerId=setInterval(()=>{
            setDate(new Date().toLocaleTimeString())
        }, 1000)
        
        return ()=>{
            clearInterval(timerId)
        }
    },[])

    
    
    return(
        <div className="clockContainer">
            <div className="clockCard">
            <h1 className="clockHeading">Clock</h1>
            <p className="clock">{date}</p>
            </div>
        </div>
    )
}

export default Clock