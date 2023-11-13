import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { Loader } from "../../../utils/Atom"

const biographiContainer = styled.div`

`
function Biographie(){
    const { id } = useParams()
    
    const [biographie, setbiographie] = useState([])
    const [error, setError] = useState(false)
    const [isDataLoading, setIsDataLoading] = useState(false)

    useEffect(()=>{
        async function FetchBiographie(){
            setIsDataLoading(true)
            try {
                const response = await fetch(`http://127.0.0.1:8000/v1/user/${id}/`)
                const biographie = await response.json()
                setbiographie(biographie)
            }catch(err){
                setError(true)
            } finally {
                setIsDataLoading(false)
            }
        }
        FetchBiographie()
    }, [])

    if (error){
        return (
            <span>Il y a eu une erreur</span>
        )
    }

    return (
        <div>
            {
                isDataLoading ? (
                    <Loader />
                ) : (
                    <biographiContainer>
                        <p>Salut, je suis {biographie.first_name } {biographie.last_name}</p>
                        <h1>{ biographie.job_title?.jobtitle }</h1>
                        <p>{ biographie.biography }</p>
                    </biographiContainer>    
                )
            }
        </div>
    )
}

export default Biographie