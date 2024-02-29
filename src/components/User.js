const User= (user) =>{
    const {name, email, githubAcc} = user.info
    
    return (
        <div className="user-container">
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{githubAcc}</h4>

        </div>
    );
}

export default User;