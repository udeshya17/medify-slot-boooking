import NavBar from '../components/NavBar/NavBar'
import { Container, Box, Stack } from "@mui/material";
import HeroImage from '../components/HeroImage/HeroImage'
import SearchDoctor from '../components/SearchDoctor/SearchDoctor'
import IconList from '../components/IconList/IconList'
import OfferCarousel from '../components/OfferCarousel/OfferCarousel'
import Specialisation from '../components/Specialisation/Specialisation'
import Specialists from '../components/Specialists/Specialists';
import PatientSection from '../components/PatientSection/PatientSection';
import Blogs from '../components/Blogs/Blogs';
import Past from '../components/Past/Past';
import Faq from '../components/Faq/Faq';

function Home(){
    return (
        <Box>
            <Box sx={{background:"linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)"}} mb={4}>
                <NavBar />
                <Container maxWidth="xl">
                    <HeroImage />
                    <Stack
                        p={{ xs: 2.5, md: 8 }}
                        mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
                        position="relative"
                        zIndex={99}
                        bgcolor="#fff"
                        borderRadius="15px"
                        spacing={10}
                        boxShadow="0 0 12px rgba(0,0,0,0.1)"
                    >
                        <SearchDoctor/>
                        <IconList/>
                    </Stack>
                </Container>
            </Box>

            <OfferCarousel/>
            <Specialisation/>
            <Specialists/>
            <PatientSection/>
            <Blogs/>
            <Past/>
            <Faq/>
        </Box>

    )
}

export default Home;