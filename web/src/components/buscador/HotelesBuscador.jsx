import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
  Card,
  CardContent,
  InputAdornment
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import BusinessIcon from "@mui/icons-material/Business";
import WifiIcon from "@mui/icons-material/Wifi";
import PetsIcon from "@mui/icons-material/Pets";
import LuggageIcon from "@mui/icons-material/Luggage";

 const  HotelesBuscador = () => {
  const [filters, setFilters] = useState({
    origin_city: "",
    destiny_city: "",
    company: "",
    time_departure_min: "",
    time_departure_max: "",
    time_arrival_min: "",
    time_arrival_max: "",
    wifi: "",
    pets: "",
    baggage: "",
    cost_range: "",
  });

  const handleChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleSearch = () => {
    console.log("Filtros aplicados:", filters);
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Typography variant="h2" textAlign="center" gutterBottom>
        Buscar Hoteles
      </Typography>

      <Card sx={{ maxWidth: 600, mx: "auto", mt: 3 }}>
        <CardContent>
          <Grid container spacing={2}>
            {/* Origen */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="origin_city"
                label="Dia de llegada"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlightTakeoffIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Destino */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="destiny_city"
                label="Dia de salida"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FlightLandIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Compañía */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="company"
                label="Compañía"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Rango de Precio */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Rango de Precio</InputLabel>
                <Select name="cost_range" value={filters.cost_range} onChange={handleChange}>
                  <MenuItem value="0-50">100 - 300€</MenuItem>
                  <MenuItem value="50-100">300 - 500€</MenuItem>
                  <MenuItem value="100-200">500 - 1000€</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Horas de salida */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="time_departure_min"
                label="Salida mín"
                type="number"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="time_departure_max"
                label="Salida máx"
                type="number"
                onChange={handleChange}
              />
            </Grid>

            {/* Horas de llegada */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="time_arrival_min"
                label="Llegada mín"
                type="number"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="time_arrival_max"
                label="Llegada máx"
                type="number"
                onChange={handleChange}
              />
            </Grid>

            {/* WiFi */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography>
                  <WifiIcon color="primary" /> WiFi
                </Typography>
                <RadioGroup row name="wifi" onChange={handleChange}>
                  <FormControlLabel value="true" control={<Radio />} label="Sí" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Mascotas */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography>
                  <PetsIcon color="primary" /> Mascotas
                </Typography>
                <RadioGroup row name="pets" onChange={handleChange}>
                  <FormControlLabel value="true" control={<Radio />} label="Sí" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Equipaje */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography>
                  <LuggageIcon color="primary" /> Equipaje
                </Typography>
                <RadioGroup row name="baggage" onChange={handleChange}>
                  <FormControlLabel value="true" control={<Radio />} label="Sí" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Botón de búsqueda */}
            <Grid item xs={12} textAlign="center">
              <Button variant="contained" color="primary" onClick={handleSearch} size="large">
                Buscar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HotelesBuscador;

