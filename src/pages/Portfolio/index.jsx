import styled from "styled-components"
import { Outlet} from "react-router-dom"
import Portfolionav from "../../components/Portfolio/Portfolionav/Portfolionav"

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
    return (
        <SectionContainer>
            <DivLink>
                <Portfolionav />
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