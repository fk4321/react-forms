import { useState, useEffect } from "react"

function SignUpForm() {

    //state variables 
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [error, setError] = useState(null)

    // console.log(setUserName)
    // console.log(passWord)
    // console.log(error)
                
    async function handleSubmit(event) {
        event.preventDefault() 
        try{
            useEffect(async () => {
                const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup')
                console.log(response)
                const data = await response.json()
                setUserName(data)
                console.log(data)
            },[])       
        }catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>   
            <h1>Sign Up Form</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label> Username 
                    <input type="text" value={userName} 
                    onChange={(event) => {
                        setUserName(event.target.value)
                    }}/>
                </label>
                <label> Password 
                    <input type="text" value={passWord} 
                    onChange={(event) => {
                        setPassWord(event.target.value)
                    }}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SignUpForm 