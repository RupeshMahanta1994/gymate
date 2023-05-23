import React from 'react'
import Backdrop from './Backdrop'
import styled from '@emotion/styled'
import one from "../assets/2.jpg"
import two from "../assets/1.jpg"
import three from "../assets/2.jpg"
import { Link } from 'react-router-dom'


const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    padding: 0 2em;

    @media (min-width: 480px){
        padding: 6em;
    }
`
const Header = styled.div`
margin: 2em 0;
width: 100%;
text-align: center;
display: flex;
gap: 1rem;
flex-direction: column;
align-items: center;
justify-content: center;

& h5 {      font-size: 1rem;
            text-transform: uppercase;
            background: red;
            color: #fff;
            padding: 0.5em 1em;
            border-radius: 0.5rem;
        }

        & h2 {
            text-transform: capitalize;
            font-size: 2.2rem;
            letter-spacing: 0.1rem;
            line-height: 3rem;
        }

        & p {
    
            font-size: 1.1rem;
            color: #979595;
        }

        @media (min-width: 480px){
            & p {
                font-size: 1rem;
                width: 35%;
            }
        }
`

const PriceCards = styled.div`
display: flex;
gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 480px){
    flex-direction: row;
}
    
    `

const CardItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
width: 18rem;
position: relative;



& .text {
    background: #fff;
    transform: translateY(-40px);
    padding: 1.3em 0.9em;
}

& img {
    width: 100%;
    height: 30%;
}

& h5 {      font-size: 1rem;
            text-transform: capitalize;
            letter-spacing: 0.1rem;
            &:hover{
                color: red;
            }
        }

        & h2 {
            text-transform: capitalize;
            font-size: 2.4rem;
            line-height: 3rem;
            margin: 0.5em 0;
        }

        & p {
            font-size: 1rem;
            color: #6c6b6b;
            text-transform: capitalize;
            margin-bottom: 1em;
        }
  
        @media (min-width: 480px){
    width: 25rem;
        
    & .text{
        width: 75%;
    }

    & h5{
        font-size: 1.5rem;
    }

    & h2{
        font-size: 3.2rem;
    }

    & p {
            font-size: 1.2rem;
    }
}
`

const Button = styled.div`

display: inline-block;
position: relative;
margin: 3em 0;
cursor: pointer;
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


const Pricing = () => {
    return (
        <>
            <Backdrop heading={"Pricing"} />
            <Container>
                <Header>
                    <h5>pricing chart</h5>
                    <h2>exclusive pricing plan</h2>
                    <p>
                        Gymat an unknown printer took a gallery of type and
                        scrambled make a type specimen book.
                    </p>
                </Header>

                <PriceCards>
                    <CardItem>
                        <img src={one} alt="" />
                        <div className="text">
                            <h5>beginners</h5>
                            <h2>39</h2>
                            <p>
                                free hand
                            </p>
                            <p>
                                gym fitness
                            </p>
                            <p>
                                weight loss
                            </p>
                            <p>personal trainer</p>
                            <p>
                                cycling
                            </p>

                            <Link to="/contact">
                                <Button>
                                    <div className="hover"></div>
                                    <button>puchase now</button>
                                </Button>
                            </Link>
                        </div>


                    </CardItem>

                    <CardItem>
                        <img src={two} alt="" />
                        <div className="text">
                            <h5>beginners</h5>
                            <h2>39</h2>
                            <p>
                                free hand
                            </p>
                            <p>
                                gym fitness
                            </p>
                            <p>
                                weight loss
                            </p>
                            <p>personal trainer</p>
                            <p>
                                cycling
                            </p>

                            <Link to="/contact">
                                <Button>
                                    <div className="hover"></div>
                                    <button>puchase now</button>
                                </Button>
                            </Link>
                        </div>


                    </CardItem>

                    <CardItem>
                        <img src={three} alt="" />
                        <div className="text">
                            <h5>beginners</h5>
                            <h2>39</h2>
                            <p>
                                free hand
                            </p>
                            <p>
                                gym fitness
                            </p>
                            <p>
                                weight loss
                            </p>
                            <p>personal trainer</p>
                            <p>
                                cycling
                            </p>

                            <Link to="/contact">
                                <Button>
                                    <div className="hover"></div>
                                    <button>puchase now</button>
                                </Button>
                            </Link>
                        </div>


                    </CardItem>
                </PriceCards>

            </Container >

        </>
    )
}

export default Pricing
