import React from 'react'
import styled from '@emotion/styled'
import Backdrop from './Backdrop'

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-family: "Roboto",sans-serif;

@media (min-width: 480px){

        
    
}
`

const ContactForm = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: left;
    justify-content: center;
    padding: 1.5em;
    margin: 8em 0;
    background-color: black;
    @media (min-width: 480px){
        height: 30rem;
        width: 35%;
        font-size: 0.9rem;
        padding: 2rem 2.5rem;

        & p {
        color: #d4d4d4;
    font-size: 0.9rem;
}
    }

    & p {
        color: #d4d4d4;
    font-size: 0.9rem;
    text-transform: capitalize;
    

    & span{
        color: red;
    }

    
}
& label{
    color: #fff;
    
    display:inline-block;
    text-align: left;
    @media (min-width: 480px){
        font-size: 1.08rem;
    }
}

& input{
    width: 100%;
    padding: 1em;
    border: none;
    outline: none;
    border-radius: 0.2rem;
    @media (min-width: 480px){
        font-size: 1rem;
    }
}

`
const Button = styled.div`

width: 100%;
position: relative;
margin: 1em 0;
display: flex;
align-items: center;
justify-content: center;




& button {
    width: 100%;
    padding: 1em 2em;
    font-size: 0.8rem;
    font-family: "Roboto";
    text-transform: capitalize;
    border: none;
    outline: none;
    z-index: 10;
    background: red;
    color: #fff;
    @media (min-width: 480px){
        font-size: 0.9rem;
    }
    

    
}
`

function SignUp() {
    return (
        <>
            <Backdrop heading={"Sign Up"} />
            <Container>
                <ContactForm>
                    <label>Email</label>
                    <input type="email" placeholder='gymate@gmail.com' />
                    <label>Password</label>
                    <input type="password" placeholder='password' />


                    <Button>
                        <div className="hover"></div>
                        <button>sign up</button>
                    </Button>

                    <p>Already have account? <span>Sign In</span></p>
                    <p>Make <span>ner Account</span> or go to <span>Sign In</span> Page for Test Account</p>
                </ContactForm>

            </Container>
        </>
    )
}

export default SignUp;
