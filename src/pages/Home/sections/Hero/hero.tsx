import { styled, Grid, Container, Typography, Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2),
        },
    }));
    

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        maxWidth: "300px",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        display: "block",
        margin: "auto",
    }));    

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                <Grid container spacing={{ xs: 1, md: 2 }} pt={2}>
                        <Grid item xs={12} md={5}>
                            <StyledImg src="images\perfil.jpg" alt="perfil"/>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Tony Souza</Typography>
                            <Typography color="primary.contrastText" variant="h3" textAlign="center" pb={2}>Desenvolvedor FRONTEND</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={1} pt={2} sx={{ padding: { xs: "0 16px", sm: "0" } }}>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center" sx={{ marginBottom: { xs: "8px", sm: "0" } }}>
                            <Link href="" target="_blank" rel="noopener noreferrer" underline="none">
                                <StyledButton><DownloadIcon /><Typography>CV</Typography></StyledButton>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center" sx={{ marginBottom: { xs: "8px", sm: "0" } }}>
                            <Link href="mailto:tonysouz97@gmail.com" target="_blank" rel="noopener noreferrer" underline="none">
                                <StyledButton><EmailIcon /><Typography>E-mail</Typography></StyledButton>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center" sx={{ marginBottom: { xs: "8px", sm: "0" } }}>
                            <Link href="https://www.linkedin.com/in/tony-souza/" target="_blank" rel="noopener noreferrer" underline="none">
                                <StyledButton><LinkedInIcon /><Typography>LinkedIn</Typography></StyledButton>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center" sx={{ marginBottom: { xs: "8px", sm: "0" } }}>
                            <Link href="https://github.com/TonySouz" target="_blank" rel="noopener noreferrer" underline="none">
                                <StyledButton><GitHubIcon /><Typography>GitHub</Typography></StyledButton>
                            </Link>
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