'use client';

import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type ContextArticleProps = {
  title: string;
  chapo: string;
  highlights: string[];
  description: string;
  finalNote?: string;
};

export default function ContextArticle({
                                         title,
                                         chapo,
                                         highlights,
                                         description,
                                         finalNote,
                                       }: ContextArticleProps) {
  return (
    <Paper
      component="article"
      elevation={2}
      sx={{
        flex: 1,
        p: { xs: 3, md: 4 },
        borderRadius: 2,
        bgcolor: 'background.default',
      }}
      role="article"  // accessibilité
      aria-labelledby="article-title"
    >
      {/* Titre */}
      <Typography variant="h5" component="h3" color="primary" gutterBottom>
        {title}
      </Typography>

      {/* Chapo encadré */}
      <Box
        sx={{
          borderLeft: '4px solid',
          borderColor: 'primary.main',
          bgcolor: 'background.paper',
          px: 2,
          py: 1,
          mb: 3,
        }}
      >
        <Typography variant="subtitle1" color="text.primary">
          {chapo}
        </Typography>
      </Box>

      {/* Liste des points forts */}
      <List dense>
        {highlights.map((item, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckCircleIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>

      {/* Description longue */}
      <Typography paragraph sx={{ mt: 3, textAlign: 'justify' }}>
        {description}
      </Typography>

      {/* Note finale */}
      {finalNote && (
        <Typography variant="body2" color="text.secondary">
          ➤ {finalNote}
        </Typography>
      )}
    </Paper>
  );
}
