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
                                <Typography color="primary.contrastText" variant="h5" textAlign="left" pb={2}>Citações</Typography>
                                <StyledImg src="src\assets\images\citacoes.png" alt="citacoes" />
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item xs={6}>
                                        <Link href="https://tonysouz.github.io/citacoes/" target="_blank" rel="noopener noreferrer" underline="none">
                                        <StyledButton>
                                            <Typography>Visualizar</Typography>
                                        </StyledButton>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Link href="https://github.com/TonySouz/citacoes" target="_blank" rel="noopener noreferrer" underline="none">
                                        <StyledButton>
                                            <Typography>Código</Typography>
                                        </StyledButton>
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