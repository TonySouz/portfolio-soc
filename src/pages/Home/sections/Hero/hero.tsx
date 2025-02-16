import { styled, Grid, Container, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {

    const StyledHero= styled("div")(({ theme })=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))
    const StyledImg= styled("img")(({theme})=>({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        diplay: "flex",
        alignItems: "center",
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <StyledImg src="/assets/images/perfil.jpg" alt="perfil"/>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Tony Souza</Typography>
                            <Typography color="primary.contrastText" variant="h3" textAlign="center">Desenvolvedor FRONTEND</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={2} pt={4}>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center">
                            <StyledButton><DownloadIcon /><Typography>CV</Typography></StyledButton>
                        </Grid>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center">
                            <StyledButton><EmailIcon /><Typography>E-mail</Typography></StyledButton>
                        </Grid>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center">
                            <StyledButton><LinkedInIcon /><Typography>LinkedIn</Typography></StyledButton>
                        </Grid>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center">
                            <StyledButton><GitHubIcon /><Typography>GitHub</Typography></StyledButton>
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