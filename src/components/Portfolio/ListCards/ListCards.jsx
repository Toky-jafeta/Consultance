import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DefaultPicture from '../../../assets/profile.png'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
  text-align:center;
`

const CardJobTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
    background-color: rgba(255, 255, 255, 0.5);
  }
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

function ListCards({id, title, first_name, last_name, picture, job_title}){
  console.log({id})
    return (
        <CardWrapper to={`/portfolio/${id}/biographie`}>
            <CardLabel>{title} {first_name} {last_name}</CardLabel>
            <CardImage src={picture} alt="profile" />
            <CardJobTitle>{job_title}</CardJobTitle>
        </CardWrapper>
    )
}
ListCards.protoTypes = {
    title: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    job_title: PropTypes.string.isRequired
}

ListCards.defaultProps = {
    first_name: '',
    last_name:'',
    title: '',
    job_title:'',
    picture: DefaultPicture,
  }


export default ListCards