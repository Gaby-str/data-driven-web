import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'; // Para animaciones en el MultiSelect
import '../styles/ListaTablas.css';

const ListaTablas_CamposMostrar = ({ onSelectionChange }) => {
    // Datos de las tablas y campos
    const countryData = [
        { value: '2', label: 'Personal a contrata' },
        { value: '1', label: 'Personal de planta' }
    ];
    const stateData = [
        { value: '101', label: 'Nombre completo', countryId: '1' },
        { value: '102', label: 'Sueldo', countryId: '1' },
        { value: '103', label: 'Horas extra', countryId: '1' },
        { value: '105', label: 'Nombre completo', countryId: '2' },
        { value: '106', label: 'Sueldo', countryId: '2' },
        { value: '107', label: 'Estamento', countryId: '2' }
    ];

    // Estado para tabla seleccionada y campos seleccionados
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredStates, setFilteredStates] = useState([]);
    const [selectedStates, setSelectedStates] = useState([]);

    // Efecto para filtrar los campos según la tabla seleccionada
    useEffect(() => {
        if (selectedCountry) {
            const filtered = stateData.filter(state => state.countryId === selectedCountry.value);
            setFilteredStates(filtered);
        } else {
            setFilteredStates([]);
        }
    }, [selectedCountry]);

    // Manejo del cambio en los campos seleccionados
    const handleStateSelection = (selectedOptions) => {
        setSelectedStates(selectedOptions);
        if (onSelectionChange) {
            onSelectionChange(selectedOptions);
        }
    };

    return (
        <div className='lista-tablas'>
            {/* Dropdown para seleccionar tabla */}
            <Select
                options={countryData}
                placeholder="Selecciona una tabla"
                value={selectedCountry}
                onChange={setSelectedCountry}
                isClearable
            />
            <br />

            {/* MultiSelect para seleccionar campos */}
            <Select
                components={makeAnimated()} // Animaciones para una mejor experiencia
                options={filteredStates}
                closeMenuOnSelect={false}
                placeholder="Selecciona los campos"
                isMulti
                value={selectedStates}
                onChange={handleStateSelection}
                isDisabled={!selectedCountry} // Deshabilitado hasta que se seleccione una tabla
            />
            <br />

            {/* Botón para confirmar selección */}
            <button onClick={() => console.log('Campos seleccionados:', selectedStates)}>
                Confirmar selección
            </button>
        </div>
    );
};

export default ListaTablas_CamposMostrar;