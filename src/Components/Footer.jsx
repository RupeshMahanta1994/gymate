import React from 'react'
import styled from '@emotion/styled'
import { FacebookOutlined, GitHub } from '@mui/icons-material';
import logo from '../assets/logo.png'

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 2.5rem;
justify-content: space-between;
padding: 1em 3em;
font-family: "Roboto", sans-serif;
background-color: #f2f2f2;
@media (min-width: 480px){
    flex-direction: row;
    padding: 3em 10em;
}
`

const NavLogo = styled.div`
width: 100%;
display: flex;


& img{
    width: 50px;
    
}

& .LogoText{
    text-align: justify;
    & h1{        
        font-size: 2.1rem;    }
    & p{
            text-transform: uppercase;
            font-size: 0.7rem;
    }

   
}
`


const Left = styled.div`
width: 100%;
height: 100%;
    display: flex;
    flex-direction: column;
    
    justify-content: flex-start;
    gap: 1rem;
   

 & p{
    font-size: 1rem;;
    color: #6c6c6c;
    line-height: 1.5rem;
   
    
}

@media (min-width: 480px){
        & p{
            font-size: 1rem;
        }
 }
`
const Right = styled.div`

width: 100%;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    gap: 1rem;
    @media (min-width: 480px){
        flex-direction: row;
 }

 & .segment{
    width: 100%;
    height: 100%;

    
    & h3 {
    text-transform: capitalize;
    position: relative;
    padding-bottom: 0.8em;
    &:after{
        content: "";
        width: 15%;
        height: 2.5px;
        background-color: red;
        position: absolute;
        left: 0;
        bottom: 0;

    }

    
}

 & p{
    font-size: 0.899rem;;
    color: #6c6c6c;
    line-height: 1.5rem;
    text-transform: capitalize;
   
    
}
@media (min-width: 480px){
    & h3 {
        font-size: 1.8rem;
        margin-bottom: 0.8em;
    }

    & p {
        font-size: 1rem;
        line-height: 2rem;
    }
 }
 }

 

 

`
function Footer() {
    return (
        <Container>
            <Left>
                <NavLogo>
                    <img src={logo} alt="" />
                    <div className="LogoText">
                        <h1>Gymate</h1>
                        <p>ultimate gym center</p>
                    </div>
                </NavLogo>
                <p>
                    Take your health and
                    body to the next level<br></br>
                    with our comprehensive
                    program designed to <br></br> help
                    you reach your fitness goals.
                </p>
                <p >
                    <FacebookOutlined style={{ fontSize: '2rem', color: " #484747", backgroundColor: 'pink', borderRadius: '50%', padding: '5px' }} />
                    <GitHub style={{ fontSize: '2rem', color: " #484747", backgroundColor: 'pink', borderRadius: '50%', padding: '5px' }} />
                    <FacebookOutlined style={{ fontSize: '2rem', color: " #484747", backgroundColor: 'pink', borderRadius: '50%', padding: '5px' }} />
                    <GitHub style={{ fontSize: '2rem', color: " #484747", backgroundColor: 'pink', borderRadius: '50%', padding: '5px' }} />
                </p>
                <p>
                    Privacy Policy | © 2023 Gymate<br></br>
                    Design by RadiusTheme
                </p>
            </Left>

            <Right>
                <div className="segment">
                    <h3>our classes</h3>
                    <p>fitness classes</p>
                    <p>aerobics classes</p>
                    <p>power yoga</p>
                    <p>full-body strength</p>
                </div>
                <div className="segment">
                    <h3>working hours</h3>
                    <p>monday - friday:</p>
                    <p>7:00 am - 21:00pm</p>
                    <p>saturday:</p>
                    <p>7:00am - 19:00pm</p>
                    <p>sunday - closed</p>
                </div>

            </Right>
        </Container>
    )
}

export default Footer
