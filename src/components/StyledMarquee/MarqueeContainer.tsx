import { styled, Box, Typography } from '@mui/material';

const StyledIcon = styled('img')({
    width: '24px',
    height: '24px',
    marginRight: "8px",
    marginLeft: "50px",
    display: 'flex',
    alignItems: 'center',
});

const MarqueeContainer = () => {

    return (
        <Box className="marquee-container" component="span">
            <Box className="marquee-text" display="flex" alignItems="center">
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/html.svg" alt="html" />
                    <Typography color="primary.contrastText" variant="h6">HTML5</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/css.svg" alt="css" />
                    <Typography color="primary.contrastText" variant="h6">CSS3</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/javascript.svg" alt="javascript" />
                    <Typography color="primary.contrastText" variant="h6">JavaScript</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/typescript.svg" alt="typescript" />
                    <Typography color="primary.contrastText" variant="h6">TypeScript</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/react.svg" alt="react" />
                    <Typography color="primary.contrastText" variant="h6">React</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/mongodb.svg" alt="mongodb" />
                    <Typography color="primary.contrastText" variant="h6">MongoDB</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/python.svg" alt="python" />
                    <Typography color="primary.contrastText" variant="h6">Python</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/bootstrap.svg" alt="bootstrap" />
                    <Typography color="primary.contrastText" variant="h6">Bootstrap</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/github.svg" alt="github" />
                    <Typography color="primary.contrastText" variant="h6">Github</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledIcon src="icons/git.svg" alt="git" />
                    <Typography color="primary.contrastText" variant="h6">Git</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default MarqueeContainer;