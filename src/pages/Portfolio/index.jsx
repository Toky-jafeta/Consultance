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
    display: flex;
    justify-content: center;
    align-items: center;
`
const ImgContainer = styled.img`
    width: 93%;
    transition: transform 0.2s ease-in-out
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
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const calculateImageTransform = () => {
        const xOffset = (mousePosition.x / window.innerWidth - 0.5) * 25;
        const yOffset = (mousePosition.y / window.innerHeight - 0.5) * 25;
    
        return `translate(${xOffset}px, ${yOffset}px)`;
      };
    
    if (error){
        return (
            <span>Il y a eu une erreur</span>
        )
    }
    console.log(userData.profile?.extension)
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
                {
                    userData.profile &&  (
                        <ImgContainer src={`data:image/${userData.profile.extension};base64,${userData.profile.container}`} alt={userData.profile.name} style={{ transform: calculateImageTransform() }}/>
                    )
                }
            </DivImg>
            <DivOutlet>
                <Outlet />
            </DivOutlet>
        </SectionContainer>
    )
}
export default Portfolio