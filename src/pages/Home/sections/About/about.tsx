import { Container, Grid, styled, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import '../../../../components/StyledMarquee/StyledMarquee.css';
import MarqueeContainer from '../../../../components/StyledMarquee/MarqueeContainer';
import StyledCertificados from '../../../../components/StyledCertificados/StyledCertificados'

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.light,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(4),
    }));

    const StyledGrid = styled(Grid)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.light,
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "8px",
        padding: "20px",
        justifyContent: "center",
        gap: "8px",
        textAlign: "center",
    }));

    return (
        <StyledAbout>
            <Container maxWidth="lg">
                <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>Sobre Mim</Typography>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StyledGrid container justifyContent="center" direction="column" alignItems="center">
                            <Grid item>
                                <HomeRepairServiceIcon fontSize="large" sx={{ color: 'primary.contrastText' }} />
                                <Typography color="primary.contrastText" variant="h5">Experiência</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" color="primary.contrastText" sx={{ fontSize: '1.2rem' }}>
                                    1 + anos<br />
                                    Desenvolvedor FRONTEND
                                </Typography>
                            </Grid>
                        </StyledGrid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StyledGrid container direction="column" alignItems="center">
                            <Grid item>
                                <SchoolIcon fontSize="large" sx={{ color: 'primary.contrastText' }} />
                                <Typography color="primary.contrastText" variant="h5">Educação</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" color="primary.contrastText" sx={{ fontSize: '1.2rem' }}>
                                    Análise e Desenvolvimento de Sistemas<br />
                                    <em>Novembro 2022 - Março 2025</em>
                                </Typography>
                            </Grid>
                        </StyledGrid>
                    </Grid>
                </Grid>
                <Typography variant="body1" color="primary.contrastText" sx={{ textIndent: '2em', fontSize: '1.2rem', borderBottom: '1px solid' }} pb={2} pt={2}>
                    Iniciei minha carreira na área da educação, atuando por três anos como professor de Física. 
                    Realizei uma transição de carreira, desistindo do curso de Licenciatura em Física 
                    para iniciar o curso de Análise e Desenvolvimento de Sistemas na modalidade EAD. 
                    Possuo um anos de experiência em desenvolvimento web, adquirida por meio de projetos pessoais, 
                    onde trabalhei com ferramentas modernas para a construção de sistemas responsivos. 
                    Atualmente, tenho o objetivo de seguir carreira em Segurança da Informação e estou focado 
                    em aprimorar meus conhecimentos e habilidades nessa área.
                </Typography>
                <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2} pt={2}>Habilidades</Typography>
                <Grid container color="primary.contrastText" sx={{ fontSize: '1.2rem', borderBottom: '1px solid' }} pb={2} pt={2}>
                    <Grid item xs={12}><MarqueeContainer /></Grid>
                </Grid>
                <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2} pt={2}>Certificados</Typography>
                <Grid container color="primary.contrastText" sx={{ fontSize: '1.2rem' }} pb={2} pt={2}>
                    <Grid item xs={12}><StyledCertificados /></Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;