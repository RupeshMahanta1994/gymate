import React, { useState } from 'react'
import styled from '@emotion/styled'
import Backdrop from './Backdrop'
import { PersonOutlineOutlined, AccessTimeOutlined } from '@mui/icons-material';
import { ClassDetails } from './data'

const Container = styled.div`
    
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    padding: 3em 1.5em;
    font-family: 'Roboto';
    @media (min-width: 480px){
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 6em;
    }
  
`
const ImgContainer = styled.div`
width: 100%;
position: relative;
border-radius: 1rem;
overflow: hidden;


&:hover{
    & img {
        scale: 1.05;
    }
}

      & img {
        width: 100%;
        height: 25rem;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        
    }


    & .TextField{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
      
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        color: #fff;
        background: rgba(0, 0, 0,0.3);

        & h3 {
            font-size: 2.5rem;         
        }

        & .Timing{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    & p {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 0.5rem;
                            font-size: 1.1rem;
                            margin-top: 0.5em;
                            color: #fff;
                        } 
                
                }
    }
    @media (min-width: 480px){
        width: 32%;
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
    padding: 1em 2em;
    font-size: 1rem;
    font-family: "Roboto";
    text-transform: uppercase;
    border: none;
    outline: none;
    background: #fff;
    color: black;

    
}
`

const Classes = () => {

    const [classEvent, setClassEvent] = useState(ClassDetails);
    return (
        <>
            <Backdrop heading={'Classes'} />
            <Container>
                {
                    classEvent.map((item) => {
                        return (
                            <ImgContainer >
                                <img src={item.image} alt="" />
                                <div className="TextField">
                                    <h3>{item.event}</h3>
                                    <div className="Timing">
                                        <p><PersonOutlineOutlined /> {item.trainer}</p>
                                        <p><AccessTimeOutlined /> {item.time}</p>
                                    </div>
                                    <Button>
                                        <div className="hover"></div>
                                        <button>Join now</button>
                                    </Button>
                                </div>
                            </ImgContainer>
                        )
                    })
                }


            </Container>
        </>
    )
}

export default Classes

