import styled from "styled-components"
import { Outlet, useParams} from "react-router-dom"
import Portfolionav from "../../components/Portfolio/Portfolionav/Portfolionav"
import { useEffect, useState, useContext } from "react"
import { Loader } from "../../utils/Atom"
import { UserDataContext } from "../../utils/context"


const DivLink = styled.div`
    width: 20%;
    display:flex;
    flex-direction: column;
    text-align:center;
    align-items: center;    
    border-right: solid 2px black;
`
const DivImg = styled.div`
    width: 30%;
    margin-left: 100px;
    margin-right: 25px;
    border: solid 5px black;
    min-height: 500px;
`

const DivOutlet = styled.div`
    width: 50%;
    text-align:justify;
    overflow-y: auto;
    padding-right: 30px;
    &::-webkit-scrollbar {
        width: 2px;
      }
    
    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 6px;
    }
`
const SectionContainer = styled.section`
    display:flex;
    align-items: stretch;
    margin-top: 7%;
    & > div {
        height: 100%;
    }
`

function Portfolio(){
    const [error, setError] = useState(false)
    const [isDataLoading, setIsDataLoading] = useState(true)
    const { id } = useParams()

    const { userData, updateId } = useContext(UserDataContext)

    useEffect(() => {
        try{
            updateId(id)
        }catch(err){
            setError(true)
        }finally{
            setIsDataLoading(false)
        }
      }, [id, updateId])
    if (error){
        return (
            <span>Il y a eu une erreur</span>
        )
    }
    return (
        <SectionContainer>
            <DivLink>
                {isDataLoading ? (
                    <div>
                        <Loader />
                    </div>
                ) : (
                    <Portfolionav linkedin_account={userData?.linkedin_account} instagram_account={userData?.instagram_account} facebook_account={userData?.facebook_account}/>
                )}
            </DivLink>
            <DivImg>

            </DivImg>
            <DivOutlet>
                <Outlet />
            </DivOutlet>
        </SectionContainer>
    )
}
export default Portfolio