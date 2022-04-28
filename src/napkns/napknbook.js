import styled from 'styled-components';


var Container = styled.div`

margin-top: 15px;
`
var Label = styled.h1`
color: white;
margin-top: 3px;
`

var Description = styled.p`
color: white;
margin-top: 3px;
margin-bottom: 50px;
`

const NapknBook = (props) => {

    
    switch(props.lens) {
        
     case "main":
         return (
             <Container>

                 <img width="200px" src="napknbook_main.svg"></img>
                 <Label>NapknBook</Label>
                 <Description>A tool for creating Imaginary Empires</Description>

             </Container>
         )
    

     case "spice":
        return (
            <Container>

                <video width="300rem" controls autoplay>
                     <source src="napknbook_spice.mov" type="video/mp4"></source>
                 </video>
                <Label>NapknBook</Label>
                <Description>Deeper into the cave</Description>

            </Container>
        )
        

     case "demo":
        return (
            <Container>

                 <img width="300rem" src="napknbook_demo.svg"></img>
                 <Label>NapknBook</Label>
                 <Description>A tool for creating Imaginary Empires</Description>

             </Container>
        )
         

        default:
            return (<div></div>)
           
            
    }



}

export default NapknBook ; 