import React from 'react'
import styled from "@emotion/styled"
import tourImg from '../assets/tourImg.png'
import Gallery from './Gallery'

const HeroSection = styled.div`
    
    width: 100%;
    height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Roboto";
    text-align: center;
    padding: 0 2em;
    
    & h5 {
        font-size: 1rem;
        text-transform: uppercase;
        background-color: red;
        border-bottom-left-radius: 1rem;
        border-top-right-radius: 1rem;
        padding: 0.5em 1em;
    }

    & h2 {
        font-size: 2.5rem;
        text-transform: uppercase;
        margin: 0.5em 0;
    }

        & p {
            font-size: 2.5rem;
            text-transform: uppercase;
        }


        @media (min-width: 480px){

            

            & h5 {
                font-size: 1.5rem;
            }

            & h2 {
                font-size: 3.5rem;
            }

            & p {
                font-size: 3.5rem;
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
    border: 1px solid rgba(255, 255, 255,0.6);

    transform: translate(1rem, -1rem);
    transition: all 0.3s ease;
    &:hover{
        transform: translate(0);
    }
}
& button {
    padding: 1em 3em;
    font-size: 1rem;
    font-family: "Roboto";
    text-transform: uppercase;
    border: none;
    outline: none;
    background: #fff;
    color: black;

    
}

`

const TourSection = styled.div`
width: 100%;
   font-family: 'Roboto';
   background-image: url("https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-family: "Roboto";
    text-align: center;
    padding:  2em;
    
    @media (min-width: 480px){
        padding:  6em;
    }


`

const TourText = styled.div`
 & h5 {
        font-size: 1rem;
        text-transform: uppercase;
        background: red;
        color: #fff;
        margin: 0 4em;
        border-bottom-left-radius: 0.9rem;
        border-top-right-radius: 0.9rem;
        padding: 0.5em 1em;
        
    }

    & h2 {
        font-size: 2.5rem;
        text-transform: capitalize;
        margin: 0.5em 0;
    }

        & p {
            font-size: 1.1rem;
            color: #767575;
            
        }

        @media (min-width: 480px){
            width: 50%;
            text-align: left;

            & h5 {
                width: 10rem;
                text-align: center;
        font-size: 1rem;
        text-transform: uppercase;
        background: red;
        color: #fff;
        
        border-bottom-left-radius: 0.9rem;
        border-top-right-radius: 0.9rem;
        padding: 0.5em 1em;
        
    }
        }

`

const Facilities = styled.div``

const TourImg = styled.div`
& img {
    display: none;
}
@media (min-width: 480px){
    & img {
    display: block;
}
}
`


const Home = () => {
    return (
        <>
            <HeroSection>
                <h5>
                    find your energy
                </h5>

                <h2>make your body</h2>

                <p>
                    fit & perfect
                </p>

                <Button>
                    <div className="hover" ></div>
                    <button>Join now</button>
                </Button>

            </HeroSection>

            <TourSection>
                <TourText>
                    <h5>
                        who we are
                    </h5>

                    <h2>
                        take your health and
                        body to next level
                    </h2>

                    <p>
                        Take your health and body to the
                        next level with our comprehension
                        program designed to help you reach your
                        fintness goals.
                    </p>
                    <Facilities>

                    </Facilities>

                    <Button>
                        <div className="hover"></div>
                        <button>TAKE A TOUR</button>
                    </Button>
                </TourText>

                <TourImg>
                    <img src={tourImg} alt="" />
                </TourImg>

            </TourSection>
            <Gallery />


        </>
    )
}

export default Home
