import { useEffect, useState } from "react"
import ListCards from "../../../components/Portfolio/ListCards/ListCards"
import { Loader } from "../../../utils/Atom"
import styled from "styled-components"


const PageSubtitle = styled.h2`
  font-size: 20px;
  color: white;
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const ListCardContainer = styled.div`
    padding-top:20vh;
`

function Lists(){
    const [listColab, setListColab] = useState([])
    const [isDataLoading, setIsDataLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsDataLoading(true)
        async function fetchListColab(){
            try {
                const response = await fetch('http://127.0.0.1:8000/v1/user/')
                const listColab = await response.json()
                setListColab(listColab.results)
            }catch(err){
                setError(true)
            }finally{
                setIsDataLoading(false)
            }
        }
        fetchListColab()
    }, [])

    if (error){
        return (
            <span>Il y a eu une</span>
        )
    }
    return (
        <ListCardContainer>
            <PageSubtitle>Chez nous, les meilleurs profils pour vos services</PageSubtitle>
            {
                isDataLoading ? (
                    <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>
                 ) : (
                    <CardsContainer>
                        {listColab.map((profile, index) => (
                            <ListCards
                                key={profile.id}
                                id={profile.id}
                                job_title={ profile.job_title?.jobtitle }
                                title={profile.title}
                                first_name={profile.first_name}
                                last_name={profile.last_name}
                                picture={profile.pictures_profiles}
                            />
                        ))}
                    </CardsContainer>
                 )
            }
        </ListCardContainer>
    )
}

export default Lists