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
const AIM = (props) => {

    
    switch(props.lens) {
        
     case "main":
         return (
             <Container>

                 <img width="200px" src="aim_main.png"></img>
                 <Label>AIM</Label>
                 <Description>Exosuit Manufacturer</Description>

             </Container>
         )
    

     case "spice":
        return (
            <Container>

                <video width="300rem" controls autoplay>
                     <source src="aim_spice.mp4" type="video/mp4"></source>
                </video>
                <Label>AIM</Label>
                <Description>Artificial Intelligence and Muscles</Description>

            </Container>
        )
        

     case "demo":
        return (
            <Container>
                <iframe width="400rem" height="200rem" src="https://www.youtube.com/embed/ETp3MYCWdtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Label>AIM</Label>
                <Description>Exosuit Manufacturer</Description>

            </Container>
        )
         

     default:
        return (<div></div>)
           
            
    }



}

export default AIM ; 