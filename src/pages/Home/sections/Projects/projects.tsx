import { styled, Grid, Container, Typography, Link } from '@mui/material';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const Projects = () => {

    const StyledHero = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0',
    }));

    const StyledImg = styled('img')(({ theme }) => ({
        width: '80%',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        display: 'flex',
        alignItems: 'center',
    }));

    const StyledProject = styled(Grid)(({ theme }) => ({
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '8px',
        padding: '20px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
    }));

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={4}>
                    Projetos
                </Typography>
                <Grid container spacing={4} display="flex" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <StyledProject>
                        <Typography color="primary.contrastText" variant="h5" textAlign="left">Citações</Typography>
                        <Typography color="primary.contrastText" variant="h6" textAlign="left">
                            <em>12 Fevereiro, 2025 – 19 Fevereiro, 2025</em>
                        </Typography>
                            <StyledImg src="images\citacoes.png" alt="citacoes" />
                            <Typography color="primary.contrastText" variant="h6" textAlign="left" pb={2} sx={{ textIndent: '2em', fontSize: '1.2rem' }}>
                            O site Citações apresenta uma coleção de frases inspiradoras e motivacionais em uma interface minimalista e intuitiva. 
                            Com um design limpo e organizado, proporciona uma experiência agradável para quem busca reflexões positivas e estímulo para o dia a dia.
                            </Typography>
                                <Typography color="primary.contrastText" variant="body1" textAlign="left" pb={2}>
                                    Tecnologias: React(Vite), Typescript, CSS3, HTML5, Github, Git
                                </Typography>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={4}>
                                    <Link href="https://tonysouz.github.io/citacoes/" target="_blank" rel="noopener noreferrer" underline="none">
                                        <StyledButton><Typography>Visualizar</Typography></StyledButton>
                                    </Link>
                                </Grid>
                                <Grid item xs={4}>
                                    <Link href="https://github.com/TonySouz/citacoes" target="_blank" rel="noopener noreferrer" underline="none">
                                        <StyledButton><Typography>Código</Typography></StyledButton>
                                    </Link>
                                </Grid>
                            </Grid>
                        </StyledProject>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Projects;