import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Paper, Typography, CircularProgress, Box } from '@mui/material';

function MediaUpload({ onUpload, isLoading }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'video/*': ['.mp4', '.avi', '.mov'],
      'audio/*': ['.mp3', '.wav']
    }
  });

  return (
    <Paper
      {...getRootProps()}
      sx={{
        p: 3,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#f0f8ff' : '#fff',
        minHeight: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <input {...getInputProps()} />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box>
          <Typography variant="h6">
            {isDragActive
              ? "Drop the files here..."
              : "Drag 'n' drop files here, or click to select"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Supported formats: Images (JPG, PNG), Videos (MP4, AVI, MOV), Audio (MP3, WAV)
          </Typography>
        </Box>
      )}
    </Paper>
  );
}

export default MediaUpload;