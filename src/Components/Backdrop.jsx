import React from 'react'
import styled from '@emotion/styled'


const Container = styled.div`
    width: 100%;
    height: 15rem;
    background-image: url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    font-family: "Roboto", sans-serif;
    object-fit:cover;
    @media only screen and (max-width: 480p) {
width: 50%;
height: 20rem;
    }
`
const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0,0.3);

    position: relative;
    object-position: center;
@media screen and (max-width: 480p) {
    width: 100%;
    height: 100%;
    object-position: center;

    
}

    & h1 {
        position: absolute;
        bottom: 0;
        right: 50%;
        margin-bottom: 1em;
        color: #fff;
   }
`

function Backdrop({ heading }) {
    return (
        <Container>
            <Overlay>
                <h1>{heading}</h1>
            </Overlay>
        </Container>
    )
}

export default Backdrop
