import styled from "styled-components"
import { Link } from "react-router-dom"
import linkedin from "../../../assets/linkedin.png"
import instagram from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'
import PropTypes from 'prop-types'

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

function Portfolionav({linkedin_account, instagram_account, facebook_account}){
    return (
        <>
            <LinkStyled to="/list-portfolio">List portfolios</LinkStyled>
            <LinkStyled to="biographie">Biographie</LinkStyled>
            <LinkStyled to="cvdownload">Télécharger le CV</LinkStyled>
            <LinkStyled to="techno">Techno</LinkStyled>
            <StyledHr />
            <SocialNetworkDiv>
                <a href={linkedin_account} target="_blank" rel="noreferrer">
                    <SocialIcon src={linkedin} alt="linkedin-logo" />
                </a>
                <a href={instagram_account} target="_blank" rel="noreferrer">
                    <SocialIcon src={instagram}alt="instagram-logo" />
                </a>
                <a href={facebook_account} target="_blank" rel="noreferrer">
                    <SocialIcon src={facebook} alt="facebook-logo" />
                </a>
            </SocialNetworkDiv>
        </>
    )
}

Portfolionav.propTypes = {
    linkedin_account : PropTypes.string,
    instagram_account : PropTypes.string,
    facebook_account  : PropTypes.string
}

export default Portfolionav

