import styled from 'styled-components';

var Container = styled.div`
`

var Content = styled.div``

var Label = styled.h1`
color: white;
`

var Description = styled.p`
color: white;
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

                <video width="400" controls autoplay>
                     <source src="aim_spice.mp4" type="video/mp4"></source>
                </video>
                <Label>AIM</Label>
                <Description>Exosuit Manufacturer</Description>

            </Container>
        )
        

     case "demo":
        return (
            <Container>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ETp3MYCWdtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Label>AIM</Label>
                <Description>Exosuit Manufacturer</Description>

            </Container>
        )
         

        default:
            return (<div></div>)
           
            
    }



}

export default AIM ; 