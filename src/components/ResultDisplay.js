import React from 'react';
import { Paper, Typography, Box, CircularProgress } from '@mui/material';

function ResultDisplay({ result, isLoading }) {
  if (isLoading) {
    return (
      <Paper sx={{ p: 3, textAlign: 'center', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Analyzing media...</Typography>
        </Box>
      </Paper>
    );
  }

  if (!result) {
    return (
      <Paper sx={{ p: 3, textAlign: 'center', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>Upload media to see detection results</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3, minHeight: 200 }}>
      <Typography variant="h6" gutterBottom>
        Detection Results
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography color={result.isDeepfake ? 'error' : 'success'} variant="h5" gutterBottom>
          {result.isDeepfake ? 'Deepfake Detected' : 'Authentic Media'}
        </Typography>
        <Typography variant="body1">
          Confidence: {result.confidence.toFixed(2)}%
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {result.details}
        </Typography>
      </Box>
    </Paper>
  );
}

export default ResultDisplay;