import React from 'react'
import styled from '@emotion/styled'
import { FacebookRounded, Twitter, Instagram, Close } from '@mui/icons-material';
import logo from '../assets/logo.png'

const Container = styled.div`
width: 100%;
height: 100%;
padding: 2em;
display: flex;
flex-direction: column;
gap: 2.5rem;
font-family: "Roboto",sans-serif;
overflow-y: scroll;
position: fixed;
top: 0;
left: 0;
background: #fff;
z-index: 999;

@media  (min-width: 480px) {
    width: 30%;
    height: 100%;
}
`

const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
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

const About = styled.div`
& h4 {
    font-size: 1.5rem;
}

& p {
    font-size: 1.2rem;
}

`



const Contact = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
align-items: left;
justify-content: flex-start;
`

const Info = styled.div``

const Follow = styled.div``

function Sidebar({ sideBarHandler }) {
    return (
        <Container>
            <Header>
                <NavLogo>
                    <img src={logo} alt="" />
                    <div className="LogoText">
                        <h1>Gymate</h1>
                        <p>ultimate gym center</p>
                    </div>
                </NavLogo>
                <Close style={{
                    color: "#ff0336",
                    fontSize: '30px'
                }} onClick={() => sideBarHandler(false)} />


            </Header>

            <About>
                <h4>
                    About Us
                </h4>

                <p>
                    Find out who we are and what
                    makes us unique. We are a
                    community-driven gym committed
                    to providing personalized fitness
                    experiences for all levels of fitness
                    enthusiasts in a welcoming and
                    supportive environment.
                </p>
            </About>



            <About>
                <h4>
                    About Us
                </h4>

                <p>
                    Find out who we are and what
                    makes us unique. We are a
                    community-driven gym committed
                    to providing personalized fitness
                    experiences for all levels of fitness
                    enthusiasts in a welcoming and
                    supportive environment.
                </p>
            </About>




            <Contact>
                <Info>
                    59 Street, House Newyork City
                </Info>

                <Info>
                    +123-678800090
                </Info>
                <Info>
                    gymate@gymail.com
                </Info>
            </Contact>

            <Follow>
                <h2>Follow Us</h2>
                <div>
                    <FacebookRounded style={{
                        color: "#ff0336",
                        fontSize: '40px'

                    }} />
                    <Twitter style={{ color: "#ff0336", fontSize: '40px' }} />
                    <Instagram style={{ color: "#ff0336", fontSize: '40px' }} />
                </div>

            </Follow>

        </Container>
    )
}

export default Sidebar
