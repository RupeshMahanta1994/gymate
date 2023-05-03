import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Backdrop from './Backdrop'
import { TimeTable } from './data'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-family: 'Roboto',sans-serif;
    padding: 1.5em;

    @media (min-width: 480px){
        padding: 6em;
    }
`
const WorkinDays = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
    
`
const Day = styled.div`
display: inline-block;
padding: 0.5em 1.8em;
border: 1px solid #e2e2e2;
border-radius: 1rem;
margin: 1em;
transition: all 0.3s ease-in-out;
cursor: pointer;

& p {
    text-transform: capitalize;
    font-weight: 500;
}

&:hover{
    background: red;
    color: #fff;
}
`

const DuraionList = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;


`

const DurarationItem = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
background-color: #e9e9e9;

& .Item{
    margin: 1em 0;
    & p {
        text-transform: capitalize;
        color: #8a8989;
        margin-bottom: 0.9em;
    }

    & h3 {
        text-transform: capitalize;
    }

    & button {
        text-transform: capitalize;
        border: none;
        outline: none;
        padding: 0.5em 1.3em;
        border-radius: 1.5rem;
        background-color: #575656;
        color: #fff;
        font-size: 1rem;
    }

   
}

@media (min-width: 480px){
    width: 100%;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.5em 4em;

    }

`


function Schedule() {
    const [dayShedule, setDayShedule] = useState([TimeTable[0]])

    useEffect(() => {
        console.log(dayShedule);
    }, [])



    const DaySelection = (item) => {
        setDayShedule(TimeTable.filter(i => i.day === item))
    }


    return (
        <>
            <Backdrop heading={'Shedule By Day'} />
            <Container>
                <WorkinDays>
                    {
                        TimeTable.map(item => {
                            return <Day onClick={() => DaySelection(item.day)} >    <p>{item.day}</p></Day>
                        })
                    }

                </WorkinDays>

                <DuraionList>
                    {
                        dayShedule[0].shedule.map((item) => {
                            return (
                                <>
                                    <DurarationItem>
                                        <div className="Item">
                                            <p>class name</p>
                                            <h3>{item.className}</h3>
                                        </div>

                                        <div className="Item">
                                            <p>time</p>
                                            <h3>{item.time}</h3>
                                        </div>

                                        <div className="Item">
                                            <p>trainer</p>
                                            <h3>{item.trainer}</h3>
                                        </div>
                                        <Link to="/contact">
                                            <div className="Item">
                                                <button>join now</button>
                                            </div>
                                        </Link>
                                    </DurarationItem>
                                </>
                            )
                        })
                    }
                </DuraionList>
            </Container>

        </>
    )
}

export default Schedule
