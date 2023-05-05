import React from 'react'
import styled from '@emotion/styled'
import Backdrop from './Backdrop'
import { FacebookOutlined, GitHub } from '@mui/icons-material';



const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
padding: 2em;
font-family: "Roboto",sans-serif;

@media (min-width: 480px){
    justify-content: space-between;
    flex-direction: row;
    gap: 7rem;
    padding: 6em;
}

`

const Body = styled.div`
     width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.5rem;

 & .Infosection{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    flex-wrap: wrap;
    margin:  2.5em 0;
    @media (min-width: 480px){
        justify-content: space-between;
    flex-direction: row;
 }
    
 }
 

& h2 {
    font-size: 2rem;
    text-transform: capitalize;
    margin: 0.5em 0;
}

& p{
    font-size: 0.899rem;;
    color: #6c6c6c;
    line-height: 1.5rem;
   
    
}

@media (min-width: 480px){
    & h2{
        font-size: 2.6rem;
    }
    & p{
        font-size: 1.1rem;
    }
}

`

const InfoSection = styled.div`
width: 60%;
display: flex;
flex-direction: column;
gap: 1rem;

@media (min-width: 480px){
    width: 40%;

    & h3 {
        font-size: 1.3rem;
    }
    
}


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
    font-size: 0.899rem;
    color: #6c6c6c;
    line-height: 1.5rem;
    
}
    

    
`

const ContactForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1.5em;
    background-color: #f2f2f2;
    border-radius: 0.5rem;
    @media (min-width: 480px){
        font-size: 0.9rem;
        padding: 2rem 2.5rem;
    }


    & h2 {
    font-size: 2rem;
    text-transform: capitalize;
    margin: 0.5em 0;

    
}

& input, select, textarea{
    width: 100%;
    padding: 1em;
    border: none;
    outline: none;
    border-radius: 0.2rem;

    &::placeholder{
        font-family: "Roboto",sans-serif;
    }
    @media (min-width: 480px){
        font-size: 1rem;
    }
}

`
const Button = styled.div`

width: 100%;
position: relative;
margin: 3em 0;
display: flex;
align-items: center;
justify-content: center;




& button {
    padding: 1em 2em;
    font-size: 0.8rem;
    font-family: "Roboto";
    text-transform: uppercase;
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

function Contact() {
    return (
        <>
            <Backdrop heading={"Contact"} />
            <Container>
                <Body>
                    <h2>
                        We are here for help you! To Shape Your Body.
                    </h2>

                    <p>
                        At Gymate, we are dedicated to helping
                        you achieve the body of your dreams.
                        Our expert trainers and nutritionists
                        will work with you to create a
                        personalized fitness and nutrition
                        plan that helps you reach your specific goals.
                    </p>

                    <div className="Infosection">
                        <InfoSection>
                            <h3>
                                new york city, USA
                            </h3>
                            <p>
                                85 Briston Mint Street,
                                London, E1 8LG, USA
                            </p>
                        </InfoSection>

                        <InfoSection>
                            <h3>opening hours</h3>
                            <p>
                                Mon to Fri: 7:30 am - 1:00 am
                                Mon to Fri: 7:30 am - 1:00 am
                            </p>
                        </InfoSection>
                        <InfoSection>
                            <h3>information</h3>
                            <p>
                                +80-123-4567
                                gymat@gmail.com
                            </p>
                        </InfoSection>
                        <InfoSection>
                            <h3>follow us on</h3>
                            <div className="Iocns">
                                <FacebookOutlined />
                                <GitHub />
                                <FacebookOutlined />
                                <GitHub />
                            </div>
                        </InfoSection>
                    </div>
                </Body>

                <ContactForm>
                    <h2>leave us your info</h2>
                    <input type="text" placeholder='Full Name*' />
                    <input type="text" placeholder='Email Address*' />
                    <select>
                        <option value="someOption">Select Option</option>
                        <option value="someOption">Cycling</option>
                        <option value="otherOption">Meditation</option>
                        <option value="otherOption">Boxing</option>
                        <option value="otherOption">Karate</option>
                        <option value="otherOption">Power Lifting</option>
                        <option value="otherOption">Workout</option>
                    </select>
                    <textarea name="" id="" cols="30" rows="5" placeholder='Comment'></textarea>
                    <Button>
                        <div className="hover"></div>
                        <button>submit now</button>
                    </Button>
                </ContactForm>



            </Container>
        </>
    )
}

export default Contact
