import {useState} from "react"
import './Token.css'

const Token = ()=>{

    const [token, tokenUpdate] = useState(" ")
    const [time, timeUpdate] = useState(60)

        if(time == 60){
            fetch('https://random-data-api.com/api/v2/users')
            .then(response => response.json())
            .then(data => {
                tokenUpdate(data.password)  
            })
        }

        setTimeout(()=>{
            if(time > 0){
                timeUpdate(time-1)
            } else if(time == 0){
                timeUpdate(60)
            }
        }, 1000)
    
    return (
        <>
        <div>
            <div>
                <h5>SU TOKEN ES:</h5>
                <h5>{token}</h5>
            </div>
            <div>
                <p>Este token se regenerara {time % 60 == 0?"1:00":"0:"+time} segundos</p>
            </div>
        </div>
        </>
    )
}
export default Token