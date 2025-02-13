import { styled, Grid, Container, Typography } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero= styled("div")(()=>({
        height: "100vh",
    }))
    const StyledImg= styled("img")(()=>({
        width: "100%",
        borderRadius: "50%"
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src="/assets/images/perfil.jpg" alt="perfil"/>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary" variant="h1" textAlign="center">Tony Souza</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">Analista SOC</Typography>
                        <Grid container display="flex" justifyContent="center">
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <button><DownloadForOfflineIcon />Baixar Currículo</button>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <button><EmailIcon />Contato</button>
                            </Grid>
                        </Grid> 
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
};

export default Hero