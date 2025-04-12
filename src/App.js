import React, { useState } from 'react';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';
import MediaUpload from './components/MediaUpload';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDetection = async (file) => {
    setIsLoading(true);
    try {
      
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ 
          data: { 
            isDeepfake: Math.random() > 0.5,
            confidence: Math.random() * 100,
            details: "Analysis complete"
          }
        }), 2000)
      );
      setResult(response.data);
    } catch (error) {
      console.error('Detection failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Deepfake Detection made: by code brigade
        </Typography>
        <Typography variant="h5" component="h2" align="center" color="text.secondary" paragraph>
          Upload your media to check if it's authentic or manipulated
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <MediaUpload onUpload={handleDetection} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ResultDisplay result={result} isLoading={isLoading} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
