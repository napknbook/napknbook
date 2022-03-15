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
                 <Description>facebook as it should've been</Description>

             </Container>
         )
    

     case "spice":
        return (
            <Container>

                <video width="400" controls autoplay>
                     <source src="napknbook_spice.mov" type="video/mp4"></source>
                 </video>
                <Label>NapknBook</Label>
                <Description>facebook as it should've been</Description>

            </Container>
        )
        

     case "demo":
        return (
            <Container>
                
              

            </Container>
        )
         

        default:
            return (<div></div>)
           
            
    }



}

export default NapknBook ; 