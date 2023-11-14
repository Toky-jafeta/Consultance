import { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { Loader } from "../../../utils/Atom"
import { UserDataContext } from "../../../utils/context"

const BiographiContainer = styled.div`

`
function Biographie(){
    const { id } = useParams()
    const [error, setError] = useState(false)
    const [isDataLoading, setIsDataLoading] = useState(true)

    const { userData, updateId } = useContext(UserDataContext)

    useEffect(()=>{
        try{
            updateId(id)
        }catch(err){
            setError(true)
        }finally{
            setIsDataLoading(false)
        }
    },[id, updateId])

    if (userData.length === 0 || error){
        return(
            <span>Il y aeu une erreur</span>
        )
    }

    return (
        <div>
            {
                isDataLoading ? (
                    <Loader />
                ) : (
                    <BiographiContainer>
                        <p>Salut, je suis {userData.first_name } {userData.last_name}</p>
                        <h1>{ userData.job_title?.jobtitle }</h1>
                        <p>{ userData.biography }</p>
                    </BiographiContainer>    
                )
            }
        </div>
    )
}

export default Biographie