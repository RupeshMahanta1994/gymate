import React from 'react'
import Backdrop from './Backdrop'
import styled from '@emotion/styled'
import aboutImg from '../assets/about.png'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import AdsClickIcon from '@mui/icons-material/AdsClick';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
   font-family: 'Roboto';
   background-image: url("https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
@media (min-width: 480px){
    padding: 0 6em;
}

`
const Herosection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5em 0;

    @media (min-width: 480px){
        flex-direction: row;
    }
        
        
`

const AboutText = styled.div`
text-align: center;
padding: 3em 1.5em;
& h5 {
    font-size: 1rem;
    text-transform: uppercase;
    background: #fff;
    margin: 0 3.5em;
    padding: 0.3em;
    border-radius: 0%.5rem;
}

& h2 {
    font-size: 2.5rem;
    text-transform: capitalize;
    margin: 0.5em 0;
    line-height: 3.3rem;
    
}

& p {
    font-size: 1.1rem;
    line-height: 1.5rem;
}

@media (min-width: 480px){
        width: 50%;
        text-align: left;

        & h5 {
            margin: 0;
            margin-right: 25em;
            background: red;
            color: #fff;
            text-align: center;
        }

        & h2 {
            font-size: 2.5rem;
            letter-spacing: 0.1rem;
            line-height: 3rem;
        }

        & p {
            font-size: 1.2rem;
        }
    }


`
const AboutImg = styled.div`
text-align: center;
& img {
    width: 90%;
}
@media (min-width: 480px){
        width: 50%;

        & img {
            width: 80%;
        
         }
    }

`
const Button = styled.div`

display: inline-block;
position: relative;
margin: 3em 0;
& .hover {
    height: 100%;
    width: 100%;
    position: absolute;
    border: 1px solid red;
    z-index: 1;
    transform: translate(1rem, -1rem);
    transition: all 0.3s ease;
    &:hover{
        transform: translate(0);
    }
}
& button {
    padding: 1em 2em;
    font-size: 1rem;
    font-family: "Roboto";
    text-transform: uppercase;
    border: none;
    outline: none;
    z-index: 10;
    background: red;
    color: #fff;

    
}
`

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    @media only screen and (min-width: 480px) {
        
        flex-direction: row;
        flex-wrap: wrap;
    
 }
    
`

const Card = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1em;
width: 100%;
height: 25rem;
background: #fff;
& img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}

& h2 {
    font-size: 2.5rem;
    text-transform: capitalize;
    margin: 0.2em 0;

}

& p {
    text-align: center;
    font-size: 1.1rem;
}

@media only screen and (min-width: 480px) {
        width: 50%;
        
 }

`
function About() {
    return (
        <>
            <Backdrop heading={"About"} />
            <Container>
                <Herosection>
                    <AboutText>
                        <h5> who we are</h5>
                        <h2>we will give you strength and health</h2>
                        <p>
                            At Gymate, we are dedicated to
                            helping you achieve the body of
                            your dreams. Our expert trainers
                            and nutritionists will work with
                            you to create a personalized fitness
                            and nutrition plan that helps you
                            reach your specific goals.
                        </p>

                        <Link to="/contact">
                            <Button>
                                <div className="hover"></div>
                                <button>Contact Us</button>

                            </Button>

                        </Link>
                    </AboutText>
                    <AboutImg>
                        <img src={aboutImg} alt="" />
                    </AboutImg>
                </Herosection>
                <Cards>
                    <Card>
                        <AdsClickIcon style={{ color: '#ff0336', fontSize: '6rem' }} />
                        <h2>our history</h2>
                        <p>
                            Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat
                            duis enim velit mollit Exercitation
                            veniam consequat.
                        </p>
                    </Card>
                    <Card style={{ padding: 0 }}>
                        <img src={one} alt="" />
                    </Card>

                    <Card style={{ padding: 0 }}>
                        <img src={two} alt="" />
                    </Card>

                    <Card>
                        <LandscapeOutlinedIcon style={{ color: '#ff0336', fontSize: '6rem' }} />
                        <h2>our history</h2>
                        <p>
                            Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat
                            duis enim velit mollit Exercitation
                            veniam consequat.
                        </p>
                    </Card>
                </Cards>

            </Container>

        </>
    )
}

export default About





