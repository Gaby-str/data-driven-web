import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'; // Para animaciones en el MultiSelect

const animatedComponents = makeAnimated();

const ListaTablas_CamposMostrar = ({ onSelectionChange }) => {
    // Datos de las tablas y campos
    const countryData = [
        { value: '2', label: 'Personal a contrata' },
        { value: '1', label: 'Personal de planta' }
    ];
    // Estado para tabla seleccionada y campos seleccionados
    const [selectedCountry, setSelectedCountry] = useState(null);


    return (
        <div>
            {/* Dropdown para seleccionar tabla */}
            <Select
                options={countryData}
                placeholder="Selecciona una tabla"
                value={selectedCountry}
                onChange={setSelectedCountry}
                isClearable
            />
            <br />

            <br />

        </div>
    );
};

export default ListaTablas_CamposMostrar;