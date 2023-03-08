import {useState} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const RandomJokes=()=>{
    const [joke,setJoke]=useState('')
    const [isLoading,setLoading]=useState(false)

    const onClickJoke=async()=>{
        setLoading(true)
        const url="https://apis.ccbp.in/jokes/random"
        const options={
            method:'GET'
        }
        
        const response=await fetch(url,options)
        
        const jsonData=await response.json()
        
        setJoke(jsonData.value)
        setLoading(false)
    }
    
    return(
        <div className="jokesContainer">
        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/random-joke-img.png" alt="random" className="jokeImage" />
        <h1 className="jokeHeading">Click the button below to get a random joke!</h1>
        <button className='jokeButton' onClick={onClickJoke}>Joke</button>
        {isLoading?<Loader type="TailSpin" color="blue" height={50} width={50} />:<p className='resultJoke'>{joke}</p>}
    </div>
    )
}

export default RandomJokes