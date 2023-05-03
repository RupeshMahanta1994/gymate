import React from 'react'
import styled from '@emotion/styled'
import { ClassDetails } from "./data"
import Backdrop from './Backdrop'

const Container = styled.div`
    
    width: 100%;
    height: 100%;

    display: flex;
    
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    padding: 3em 1.5em;
@media (min-width: 480px){
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;justify-content: center;
    padding: 6em;
}
  
`
const ImgContainer = styled.div`

      & img {
        width: 100%;
        height: 25rem;

        object-fit: cover;
        
    }
    @media (min-width: 480px){
        width: 32%;
    }

`
const Gallery = () => {
    return (
        <>
            <Backdrop heading={'Gallery'} />
            <Container>
                {ClassDetails &&
                    ClassDetails.map((item) => {
                        return (<ImgContainer>
                            <img src={item.image} alt="" />
                        </ImgContainer>)
                    })
                }

            </Container>
        </>
    )
}

export default Gallery
