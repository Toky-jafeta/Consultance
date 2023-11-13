import styled from "styled-components"
import { Link } from "react-router-dom"
import linkedin from "../../../assets/linkedin.png"
import instagram from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'

const LinkStyled = styled(Link)`
    padding: 15px;
    text-decoration: none;
`

const SocialNetworkDiv = styled.div`
    display:flex;
`

const SocialIcon = styled.img`
    width: 50px;
    height: auto;
    margin-right: 10px;
`

const StyledHr = styled.hr`
    width: 75%;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid black;
`

function Portfolionav(){
    return (
        <>
            <LinkStyled to="/list-portfolio">List portfolios</LinkStyled>
            <LinkStyled to="biographie">Biographie</LinkStyled>
            <LinkStyled to="cvdownload">cvdownload</LinkStyled>
            <LinkStyled to="techno">Techno</LinkStyled>
            <StyledHr />
            <SocialNetworkDiv>
                <a href="https://www.linkedin.com/in/toky-rasolomanitra-121896220/" target="_blank" rel="noreferrer">
                    <SocialIcon src={linkedin} alt="linkedin-logo" />
                </a>
                <SocialIcon src={instagram}alt="instagram-logo" />
                <SocialIcon src={facebook} alt="facebook-logo" />
            </SocialNetworkDiv>
        </>
    )
}
export default Portfolionav