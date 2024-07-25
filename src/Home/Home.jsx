import NavBar from '../components/NavBar/NavBar'
import { Container, Box } from "@mui/material";
import HeroImage from '../components/HeroImage/HeroImage'

function Home(){
    return (
        <Box>
            <Box sx={{background:"linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)"}} mb={4}>
                <NavBar />
                <Container maxWidth="xl">
                    <HeroImage />
                    </Container>
      </Box>
        </Box>

    )
}

export default Home;