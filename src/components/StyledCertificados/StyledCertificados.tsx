import { styled, Box, Typography, Link } from '@mui/material';

const Certificados = () => {

    const StyledCertificados = styled('img')(() => ({
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        objectFit: "cover"
    }))    

    return (

        <Box className="certificados" component="div" sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap', 
            height: '100%', 
            flexDirection: 'row', 
            gap: 2,
        }}>
            <Box className="certificados-text" sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                <Typography color="primary.contrastText" variant="h5" pr={2} sx={{ whiteSpace: "nowrap" }}>
                    Analista SOC<br />
                <Typography color="primary.contrastText" variant="h6"><em>Janeiro 2025 - Janeiro 2028</em></Typography>
                </Typography>
                <Link href="https://certs.ibsec.com.br/?cert_hash=ee6346ae7b6f112b" target="_blank">
                    <StyledCertificados src="src/components/StyledCertificados/certificados/soc.png" alt="soc" />
                </Link>
            </Box>
        
            <Box className="certificados-text" sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                <Typography color="primary.contrastText" variant="h5" pr={2} sx={{ whiteSpace: "nowrap" }}>
                    Suporte em TI do Google<br />
                <Typography color="primary.contrastText" variant="h6"><em>Abril 2024</em></Typography>
                </Typography>
                <Link href="https://www.coursera.org/account/accomplishments/professional-cert/4F5XFJT2CALG" target="_blank">
                    <StyledCertificados src="src/components/StyledCertificados/certificados/google.jpg" alt="google" />
                </Link>
            </Box>
        
            <Box className="certificados-text" sx={{ display: "flex", alignItems: "center", flex: 1, whiteSpace: "nowrap" }}>
                <Typography color="primary.contrastText" variant="h5" pr={2}>
                    Segurança Endpoint<br />
                <Typography color="primary.contrastText" variant="h6"><em>Março 2024</em></Typography>
                </Typography>
                <Link href="https://www.credly.com/badges/abbac157-4aa4-4a38-941a-67348c3e2190/linked_in_profile" target="_blank">
                    <StyledCertificados src="src/components/StyledCertificados/certificados/endpoint.png" alt="endpoint" />
                </Link>
            </Box>
        </Box>
        

    )
}

export default Certificados