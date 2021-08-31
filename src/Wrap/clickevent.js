const CickEvent = () => {
    const handleClick = () =>{
        console.log('Hello')
    }
    const clickAgain = (name) => {
        console.log("Hello", name)
    }
    return (
        <div className = "home">
            <h2>Home</h2>
            <button onClick = {handleClick}>Click Here</button>
            <button onClick = {() => {
                clickAgain('there')
            }}>Click Again</button>
        </div>
    )
}

export default CickEvent;