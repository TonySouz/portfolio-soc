import { Container, Grid, styled, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import '../../../../components/StyledMarquee/StyledMarquee.css';
import MarqueeContainer from '../../../../components/StyledMarquee/MarqueeContainer';
import StyledCertificados from '../../../../components/StyledCertificados/StyledCertificados'

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.light,
        minHeight: "100vh",
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
        gap: theme.spacing(1),
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
                                    1 + ano<br />
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
                    Desenvolvedor web com experiência em frontend e backend, utilizando tecnologias modernas como React, 
                    TypeScript, Node.js e Material UI. Tenho um ano de experiência em projetos pessoais e freelances, 
                    focando na criação de interfaces responsivas e sistemas escaláveis. Atualmente, estou aprofundando 
                    meus conhecimentos em Segurança da Informação, buscando oportunidades para atuar na área.
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