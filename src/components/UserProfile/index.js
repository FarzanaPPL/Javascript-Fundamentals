import { useState } from 'react'
import Profile from '../Profile'
import './index.css'

const initialUserDetailsList = [
    {
      uniqueNo: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'Software Developer'
    },
    {
      uniqueNo: 2,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'Software Developer'
    },
    {
      uniqueNo: 3,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'Software Developer'
    },
    {
      uniqueNo: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
      name: 'Devon Lane',
      role: 'Software Developer'
    }
  ]
  
const UserProfile=()=>{
  const [searchInput,SetSearchInput]=useState('')
  const [userDetailsList,setUserDetailsList]=useState(initialUserDetailsList)
  const onChangeSearchInput=(event)=>{
    SetSearchInput(event.target.value)
  }

  const filteredList=userDetailsList.filter(each=>each.name.toLowerCase().includes(searchInput))

  const deleteUser=uniqueNo=>{
    const filteredData=userDetailsList.filter(each=>each.uniqueNo!==uniqueNo)
    setUserDetailsList(filteredData)
  }

  return(
    <div className='userContainer'>
        <h1 className='userHeading'>User Profile</h1>
        <input type="text" onChange={onChangeSearchInput} />
        {filteredList.map(eachUser=>(
            <Profile userDetails={eachUser} key={eachUser.uniqueNo} deleteUser={deleteUser}/>
        ))}
    </div>
  )
}

export default UserProfile