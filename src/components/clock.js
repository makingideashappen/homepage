import React, { useEffect, useState } from 'react'
import styled from "styled-components"


const Wrap = styled.div`
//big screen
min-width:400px;
font-weight:bold;
font-family:arial,sans-serif;
text-shadow:0px 0px 1px #333;
opacity:.7;
letter-spacing:.2;
text-align:right;
`

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Wrap>
            <div className="clock">
                {date.toLocaleString()}
            </div>
        </Wrap>
    )
}

export default Clock
