import React from 'react'
import styled from '@emotion/styled'
import Backdrop from './Backdrop'
import LayersIcon from '@mui/icons-material/Layers';
import one from "../assets/2.jpg"

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
    padding: 3em 6em;
}

`

const Posts = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;

@media (min-width: 480px){
    gap: 0px;
    width: 65%;
}
`

const SinglePost = styled.div`
& img{
    width: 100%;
    height: 30%;
    margin-bottom: 0.8em;
}

@media (min-width: 480px){
    & img {
        height: 50%;
        object-fit: cover;
    }
        
    
}

& .UserDetails{
    width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 0.5rem;

& p {
    font-size: 0.9rem;
    text-transform: capitalize;
    padding-right: 0.3em;
    border-right: 1px solid grey;
    color: #6c6c6c;
    position: relative;

    &::after{
        content: "";
        
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 50%;
        width: 2px;
        background: red;

    }

    & span {
        font-weight: 700;
    }
}


}

& h2 {
    font-size: 2.1rem;
    text-transform: capitalize;
    margin: 0.5em 0;
}

& p{
    font-size: 1.1rem;
    color: #6c6c6c;
    line-height: 1.5rem;
    
}


`

const RightBar = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

@media (min-width: 480px){
    width: 30%;
    
}

`

const RecentPosts = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1.5rem;
background-color: #f2f2f2;
padding: 1.5em ;


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

`

const RecentPostsItem = styled.div`

display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;

& img {
    width: 6rem;
    height: 7rem;
    object-fit: cover;
    object-position: center;
}

& .Title{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & p{
        font-size: 1rem;
        text-transform: capitalize;
        color: #6c6c6c;
    }

    & h4{
        text-transform: capitalize;
        line-height: 1.5rem;
    }
}

`

const Button = styled.div`

display: inline-block;
position: relative;
margin-top:3em;
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

const Tags = styled.div`
width: 100%;
display: flex;
flex-direction: column;

gap: 1.5rem;
background-color: #f2f2f2;
padding: 1.5em ;

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

`

const SingleTag = styled.div`
font-size: 0.9rem;
background-color: #fff;
display: inline-block;
margin: 0 0.5em 0.5em 0;
padding: 0.5em;

`

function Blog() {
    return (
        <>
            <Backdrop heading={"Blog"} />
            <Container>
                <Posts>
                    <SinglePost>
                        <img src={one} alt="" />
                        <div className="UserDetails">
                            <LayersIcon />
                            <p>
                                by <span>admin</span>
                            </p>
                            <p>
                                March 11, 2022
                            </p>

                            <p>
                                yoga
                            </p>
                        </div>

                        <h2>yoga for everyone in 2022</h2>

                        <p>
                            Authoritatively disseminate multimedia
                            based total linkage through market-driven
                            methodolContinually transform integrated
                            results vis-a-vis multidisciplinary
                            manufacture Appropriately foster fullresearched
                            innovation rather than backend supply.
                            when an unknown printer took a galley.
                        </p>
                        <Button>
                            <div className="hover"></div>
                            <button>purchase now</button>
                        </Button>
                    </SinglePost>

                    <SinglePost>
                        <img src={one} alt="" />
                        <div className="UserDetails">
                            <LayersIcon />
                            <p>
                                by <span>admin</span>
                            </p>
                            <p>
                                March 11, 2022
                            </p>

                            <p>
                                yoga
                            </p>
                        </div>

                        <h2>yoga for everyone in 2022</h2>

                        <p>
                            Authoritatively disseminate multimedia
                            based total linkage through market-driven
                            methodolContinually transform integrated
                            results vis-a-vis multidisciplinary
                            manufacture Appropriately foster fullresearched
                            innovation rather than backend supply.
                            when an unknown printer took a galley.
                        </p>
                        <Button>
                            <div className="hover"></div>
                            <button>purchase now</button>
                        </Button>
                    </SinglePost>

                    <SinglePost>
                        <img src={one} alt="" />
                        <div className="UserDetails">
                            <LayersIcon />
                            <p>
                                by <span>admin</span>
                            </p>
                            <p>
                                March 11, 2022
                            </p>

                            <p>
                                yoga
                            </p>
                        </div>

                        <h2>yoga for everyone in 2022</h2>

                        <p>
                            Authoritatively disseminate multimedia
                            based total linkage through market-driven
                            methodolContinually transform integrated
                            results vis-a-vis multidisciplinary
                            manufacture Appropriately foster fullresearched
                            innovation rather than backend supply.
                            when an unknown printer took a galley.
                        </p>
                        <Button>
                            <div className="hover"></div>
                            <button>purchase now</button>
                        </Button>
                    </SinglePost>

                    <SinglePost>
                        <img src={one} alt="" />
                        <div className="UserDetails">
                            <LayersIcon />
                            <p>
                                by <span>admin</span>
                            </p>
                            <p>
                                March 11, 2022
                            </p>

                            <p>
                                yoga
                            </p>
                        </div>

                        <h2>yoga for everyone in 2022</h2>

                        <p>
                            Authoritatively disseminate multimedia
                            based total linkage through market-driven
                            methodolContinually transform integrated
                            results vis-a-vis multidisciplinary
                            manufacture Appropriately foster fullresearched
                            innovation rather than backend supply.
                            when an unknown printer took a galley.
                        </p>
                        <Button>
                            <div className="hover"></div>
                            <button>purchase now</button>
                        </Button>
                    </SinglePost>



                </Posts>

                <RightBar>
                    <RecentPosts>
                        <h3>Recent Posts</h3>
                        <RecentPostsItem>
                            <img src={one} alt="" />
                            <div className="Title">
                                <p>march 22, 2022</p>
                                <h4>yoga for everyone in 2022</h4>
                            </div>
                        </RecentPostsItem>

                        <RecentPostsItem>
                            <img src={one} alt="" />
                            <div className="Title">
                                <p>march 22, 2022</p>
                                <h4>yoga for everyone in 2022</h4>
                            </div>
                        </RecentPostsItem>

                        <RecentPostsItem>
                            <img src={one} alt="" />
                            <div className="Title">
                                <p>march 22, 2022</p>
                                <h4>yoga for <br /> everyone in 2022</h4>
                            </div>
                        </RecentPostsItem>


                    </RecentPosts>

                    <Tags>
                        <h3>popular tags</h3>

                        <div className="Body">
                            <SingleTag>
                                #Crossfit
                            </SingleTag>
                            <SingleTag>
                                #Crossfit
                            </SingleTag>
                            <SingleTag>
                                #Crossfit
                            </SingleTag>
                            <SingleTag>
                                #Crossfit
                            </SingleTag>
                            <SingleTag>
                                #Crossfit
                            </SingleTag>
                            <SingleTag>
                                #Crossfit
                            </SingleTag>
                        </div>


                    </Tags>

                </RightBar>
            </Container>


        </>
    )
}

export default Blog
