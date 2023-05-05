import React, { useState } from 'react'
import styled from '@emotion/styled'
import { PersonOutline, List, AddBox, Menu } from '@mui/icons-material';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Close } from '@mui/icons-material';

const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 1em 3em;
font-family: "Roboto", sans-serif;
color: #fff;
background: black;
position: sticky;
position: relative;


@media  (min-width: 480px) {
    
    justify-content: space-between;
    
}


`


const NavLogo = styled.div`

display: flex;
align-items: center;
justify-content: center;

& img{
    width: 40px;
    @media (min-width: 480px){
        width: 55px;
    }
}

& .LogoText{
    width: 8rem;
    text-align: justify;
    & h1{
        width: 100%;
        
        font-size: 1.6rem;
    }
    & p{
        width: 100%;
            text-transform: uppercase;
            font-size: 0.5rem;
    }
    @media (min-width: 480px){
        width: 8rem;
        & h1{
            font-size: 2.3rem;    
        }
        & p {
            font-size: 0.7rem;
        }
    }
}


     
    
`

const NavLinks1 = styled.div`


z-index: 999;
display: none;

@media (min-width: 480px){
    display: block;
    display: flex;

gap: 1.5rem;
align-items: center;
justify-content: center;


}

`


const NavLinks = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1.5rem;
align-items: center;
justify-content: space-between;
background-color: black;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
padding: 4em;
z-index: 1;
@media (min-width:480px){
    width: 25%;
}




`
const NavLink = styled(Link)`
font-size: 1.2rem;
font-weight: 500;
text-transform: capitalize;
color: #fff;
transition:  all 0.2s ease-in;
text-decoration: none;
z-index: 999;

&:hover {
    color: #ff0336;
    cursor: pointer;
}

`

const NavBtn = styled.div`
display: flex;
align-items: center;
gap: 1rem;

@media (min-width: 480px){
    & .mobileMenu{
        display: none;
    }
}
`
const Button = styled.button`
display: flex;
align-items: center;
background: transparent;
outline: none;
border: 1px solid #fff;
padding: 0.3em;
padding-right: 0.8em;
text-transform: uppercase;
cursor: pointer;

& p {
    font-size: 0.9rem;
    font-weight: 700;
    color: #fff;
}

@media only screen and (max-width: 480px) {
    display: none;
    
}

`

const ResponsiveAppBar = () => {

    const [sideBar, setSideBar] = useState(false)
    const [navBar, setNavBar] = useState(false);

    const sideBarHandler = (e) => {
        setSideBar(e)
    };


    const navBarHandler = (e) => setNavBar(e);



    return (
        <>
            <Navbar>
                <Link to="/" style={{ textDecoration: "none", color: "#FFF", cursor: "pointer" }}>
                    <NavLogo to="/">
                        <img src={logo} alt="" />
                        <div className="LogoText">
                            <h1>Gymate</h1>
                            <p>ultimate gym center</p>
                        </div>
                    </NavLogo>

                </Link>




                {
                    navBar ? <NavLinks onClick={() => { navBarHandler(false) }}>

                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/about">about</NavLink>
                        <NavLink to="/gallery">gallery</NavLink>
                        <NavLink to="/schedule">schedule</NavLink >
                        <NavLink to="/blog">blog</NavLink >
                        <NavLink to="/pricing">pricing</NavLink >
                        <NavLink to="/classes">classes</NavLink >
                        <NavLink to="/contact">contact</NavLink>
                        <Close style={{
                            color: "#ff0336",
                            fontSize: '30px'
                        }} onClick={() => { navBarHandler(false) }} />

                    </NavLinks > : ""
                }

                <NavLinks1>

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">about</NavLink>
                    <NavLink to="/gallery">gallery</NavLink>
                    <NavLink to="/schedule">schedule</NavLink >
                    <NavLink to="/blog">blog</NavLink >
                    <NavLink to="/pricing">pricing</NavLink >
                    <NavLink to="/classes">classes</NavLink >
                    <NavLink to="/contact">contact</NavLink>

                </NavLinks1 >


                <NavBtn>
                    <div className="mobileMenu">
                        <Menu onClick={() => { navBarHandler(!navBar) }} />
                    </div>
                    <Link to="/signup" style={{ textDecoration: "none", color: "#fff", cursor: "pointer" }}> <PersonOutline style={{ fontSize: '2.1rem' }} /></Link>
                    <List onClick={() => setSideBar(!sideBar)} style={{ fontSize: '2.1rem', cursor: "pointer" }} />
                    <Link to="contact" style={{ textDecoration: "none", color: "#fff" }}>
                        <Button>
                            <AddBox style={{ color: '#ff0336', fontSize: '2.5rem' }} />
                            <p >
                                join class now
                            </p>
                        </Button>
                    </Link>

                </NavBtn>
            </Navbar >
            {sideBar ? <Sidebar sideBarHandler={sideBarHandler} /> : ""}


        </>
    )
}

export default ResponsiveAppBar
