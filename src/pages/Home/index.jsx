import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loader } from "../../utils/Atom"
import { Link } from "react-router-dom";

const HomeContainner = styled.div`
  align-items: center;
  width: 100%;
  height: 100%;
  color:white;
  padding-top:20vh;
`
const SectionContainer = styled.section`
  padding: 50px;
  justify-content: flex-start;
  width: 50%;
`;

const BiographyContainer = styled.p`
  text-align: justify;
  padding-bottom:20px;
`

const NameContainer = styled.h2`
  border-right: solid 4px #8186a0;
`

const StyledLink = styled(Link)`
  margin: 15px;
  padding:10px;
  text-decoration: none;
  font-size: 18px;
  color:white;
  border: solid 2px white;
  border-radius: 25px;
`

function Home() {
  const [bioData, setBioData] = useState({})
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    async function fetchBio(){
      setIsDataLoading(true)
      try{
        const response = await fetch('http://127.0.0.1:8000/v1/user/6/')
        const bioData = await response.json()
        setBioData(bioData)
      }catch(err){
        setError(true)
      }finally{
        setIsDataLoading(false)
      }
    }
    fetchBio()
  }, [])

  if (error){
    return <span>oups, une erreur est survenu</span>
  }

  function extractFirst50Words(text) {
    if (!text) {
      return '';
    }
    const words = text.split(" ");
    if (words.length <= 30) {
      return text;
    }
    const first50Words = words.slice(0, 30).join(" ") + " ...";
    return first50Words;
  }
  
  
  return (
    <HomeContainner>
      <SectionContainer>
        <h1>Salut!</h1>
        { isDataLoading ? (
          <Loader />
        ) : (
          <div>
            <NameContainer>Nous somme {bioData.first_name} {bioData.last_name}</NameContainer>
            <BiographyContainer>{extractFirst50Words(bioData.biography)}</BiographyContainer>
            <StyledLink to='/list-portfolio'>Voir nos Portfolio</StyledLink>
            <StyledLink to='/contact'>Nous engagé</StyledLink>
          </div>
        )
        }
      </SectionContainer>
    </HomeContainner>
  );
}

export default Home;
