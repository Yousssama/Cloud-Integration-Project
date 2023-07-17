import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { CssBaseline, Container, Paper, Typography } from '@mui/material';
import './App.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '1rem', marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            Google Maps Landing Page
          </Typography>
          <LoadScript googleMapsApiKey="AIzaSyBvELj1hiIePPVqNn7No_9ryPc87aHTDl8">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default App;
