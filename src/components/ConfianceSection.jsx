'use client';
import { Box, Typography, Paper } from '@mui/material';

export default function ConfianceSection() {
    return (
        <Paper sx={{ p: 4, mb: 6, borderRadius: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
                POURQUOI NOUS FAIRE CONFIANCE ?
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography paragraph>
                        <strong>Expertise spécialisée :</strong> La toile tendue est notre unique activité depuis 10 ans.
                    </Typography>
                    <Typography paragraph>
                        <strong>Gamme complète :</strong> Nous proposons toutes les finitions : brillant, mat, satiné, acoustique et opalescent.
                    </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography paragraph>
                        <strong>Technique premium :</strong> Nous privilégions le <strong>profilé pince</strong> offrant la finition la plus discrète du marché (&lt;5mm).
                    </Typography>
                    <Box sx={{
                        bgcolor: 'background.paper',
                        p: 2,
                        borderLeft: '4px solid',
                        borderColor: 'primary.main'
                    }}>
                        <Typography variant="subtitle1" color="primary" gutterBottom>
                            Transparence tarifaire
                        </Typography>
                        <Typography>
                            <strong>À partir de 50€/m² TTC</strong> (pose incluse, dégressif selon surface).
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
}