'use client';
import { Box, Typography, Paper, List, ListItem, ListItemIcon } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'; // Icône simple de MUI

export default function PlafondTenduSection() {
    const advantages = [
        "Pose rapide et propre, le plus souvent en une seule journée sans débarrasser la pièce",
        "Durée de vie élevée (environ 25 ans et garanti 10 ans)",
        "Entretien aisé / lessivable facilement",
        "Permet d'intégrer tous les accessoires (éclairage, ventilation, détecteur de fumée...)",
        "Complément d'isolation grâce au vide d'air étanche entre la toile et l'ancien support",
        "Ne craint ni la condensation, ni les dégâts des eaux",
        "Classé au feu (BSD20), norme CE / NF",
        "100% recyclable"
    ];

    return (
        <Paper sx={{ p: 4, mb: 6, borderRadius: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
                LE PLAFOND TENDU, C'EST QUOI ?
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography paragraph>
                        <strong>C'est une toile dont la composition est similaire au liner de piscine.</strong> Elle est maintenue par des profils spécifiques fixés en périphérie de la pièce.
                    </Typography>
                    <Typography paragraph>
                        Le système est né en France il y a 50 ans. Grâce à ses nombreux avantages, il s'exporte aujourd'hui dans le monde entier.
                    </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography paragraph>
                        Son utilisation s'est généralisée tant dans les espaces publics que chez les particuliers. S'il garde encore l'image d'un produit de luxe, son prix est devenu très compétitif.
                    </Typography>
                </Box>
            </Box>

            {/* Liste simple avec icônes standard */}
            <List dense sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 1
            }}>
                {advantages.map((item, index) => (
                    <ListItem key={index} sx={{ alignItems: 'flex-start', py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 30, color: 'primary.main' }}>
                            <CheckIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="body2">{item}</Typography>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}