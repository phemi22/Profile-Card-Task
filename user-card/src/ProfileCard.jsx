function ProfileCard({name, age, location, image, bio, occupation, hobbies}){

    return(

        <div className="profile-card-container">
            <div className="card-image-container">
                <img src={image} alt="" />
            </div>

            <div className="profile-details-container">  
                <h1>{name}</h1>
                <h2>{age}</h2>
                <p>{location}</p>

                {bio ? <p>{bio}</p> : " "}
                {occupation ? <p>{occupation}</p> : " "}
                {hobbies && hobbies.length > 0 ? <ul>
                    {hobbies.map((hobby, index)=>(
                        <li key={index}>{hobby}</li>
                    ))}
                </ul> : " "}
            </div>
        </div>
    )
}

export default ProfileCard