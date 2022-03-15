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

const Multi = (props) => {

    
    switch(props.lens) {
        
     case "main":
         return (
             <Container>

                 <img width="200px" src="multi_main.png"></img>
                 <Label>Multi</Label>
                 <Description>Into the Multiverse</Description>

             </Container>
         )
    

     case "spice":
        return (
            <Container>

                <video width="400" controls autoplay>
                     <source src="multi_spice.mp4"></source>
                 </video>
                <Label>Multi</Label>
                <Description>Into the Multiverse</Description>

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

export default Multi ; 