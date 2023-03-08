import './index.css'

const Profile=(props)=>{
    const {userDetails,deleteUser}=props
    const {uniqueNo,imageUrl,name,role}=userDetails
    const onDeleteUser=()=>{
        deleteUser(uniqueNo)
    }
    
    return(
        <li className='profileContainer'>
            <img src={imageUrl} alt="avatar" className="imageUrl" />
           <div className='detailsContainer '>
                <h1 className='heading'>{name}</h1>
                <p className='role'>{role}</p>
            </div>
            <button className='crossButton' onClick={onDeleteUser}>
                <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" className='crossImage' />
            </button>
        </li>
    )
}

export default Profile