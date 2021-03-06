import NapknBook from "./napknbook";
import AIM from "./aim";
import Multi from "./multi";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
const lenses = ["main", "spice", "demo"]
var activeLensIndex = 2 ;

const Portal = styled.img`
    transform: rotate(180deg);
    width: 50px;
    margin: 10px;
`

const LeftArrow = styled.img`
    width: 50px;
    transform: rotate(180deg);
`

const RightArrow = styled.img`

    width: 50px;


`

const PlatformPortal = styled.img`
    width: 50px; 
    margin: 5px;
`

var Label = styled.h3`
color: #00ff41;
`

const Home = () => {

    var [activeLensIndex, setActiveLensIndex] = useState(0);

    
    return (

        <Container fluid>

            <Row style={{marginTop: "50px", marginBottom: "10px"}}>

                <LeftArrow src="arrow.png" onClick={() => {
                    activeLensIndex = activeLensIndex - 1 ;
                    if (activeLensIndex === -1) {
                        activeLensIndex = 2 ;
                    }
                    setActiveLensIndex(activeLensIndex);
                    
                }}/>

                <Portal src="portal.png" onClick={() => window.open("https://www.youtube.com/watch?v=NUYvbT6vTPs")} />
                
                <RightArrow src="arrow.png" onClick={() => {
                    activeLensIndex = activeLensIndex + 1 ;
                    if (activeLensIndex === 3) {
                        activeLensIndex = 0 ;
                    }
                    setActiveLensIndex(activeLensIndex);
                }}/>

            </Row>

            <Row style={{marginTop: "10px", marginBottom: "10px"}}>
                <Label>{lenses[activeLensIndex].toUpperCase()}</Label>
            </Row>

            <Row className="justify-content-center">
            <NapknBook lens={lenses[activeLensIndex]} />
            <AIM lens={lenses[activeLensIndex]} />
            <Multi lens={lenses[activeLensIndex]} />
            
            </Row>
            
          

            
          


            <Row style={{marginTop: "50px", marginBottom: "50px"}}>

                <LeftArrow src="arrow.png" onClick={() => {
                    activeLensIndex = activeLensIndex - 1 ;
                    if (activeLensIndex === -1) {
                        activeLensIndex = 2 ;
                    }
                    setActiveLensIndex(activeLensIndex);

                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    
                }}/>

                
                <RightArrow src="arrow.png" onClick={() => {
                    activeLensIndex = activeLensIndex + 1 ;
                    if (activeLensIndex === 3) {
                        activeLensIndex = 0 ;
                    }
                    setActiveLensIndex(activeLensIndex);

                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }}/>
                
            </Row>

            <Row>

            <PlatformPortal src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png" onClick={() => window.open('https://github.com/napknbook/napknbook')} />
           
            </Row>


        </Container>
    )
}

export default Home ; 