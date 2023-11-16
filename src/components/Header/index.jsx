import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
    padding: 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    &.active {
        background-color: red;
        border-radius:5px;
    }
`

const StyledNav = styled.nav`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        background-color: #333;
        padding: 10px;
        border-radius: 5px;
        display: none;
    }
`

function Header(){
    return (
        <StyledNav>
            <StyledLink to='/'>Acceuil</StyledLink>
            <StyledLink to='/service'>Nos service</StyledLink>
            <StyledLink to='/list-portfolio'>Nos collaborateur</StyledLink>
            <StyledLink to='/resume'>Nous en quelques mots</StyledLink>
            <StyledLink to='/contact'>Nous contacté</StyledLink>
        </StyledNav>
    )
}

export default Header