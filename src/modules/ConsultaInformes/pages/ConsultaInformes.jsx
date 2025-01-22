import React, { useState } from 'react';
import ListaTablas_CamposMostrar from '../components/ListaTablas.jsx';
import ListaCamposWhere from '../components/ListaCamposWhere.jsx';
import IgualCond from '../components/IgualdadCond.jsx';
import BetweenCond from '../components/BetweenCond.jsx';
import '../styles/ConsultaInformes.css';
function ConsultaInformes(){


  //Para mostrar los campos en pantalla
  const [selectedStates, setSelectedStates] = useState([]);

  const handleStateSelection = (states) => {
    // Actualiza el estado con los estados seleccionados
    setSelectedStates(states);
    console.log("Selected States:", states);
  };

  const a = null;


  return (
    <div className='consulta-informes-app'>

      <div className='section-1'>
        {/*seccion de las listas desplegables */}
        {/* lista de tablas */}
        {/* lista de campos para mostrar */}
        <ListaTablas_CamposMostrar onSelectionChange={handleStateSelection} />

        

      </div>
      
      <div className='section-2'>
        {/*seccion de las condiciones*/}

        {/* lista de campos para condicion */}
        <ListaCamposWhere />

        {/* componente de igualdad */}
        <IgualCond />

        {/* componente de between */}
        <BetweenCond />

        {/* componente controlador de condiciones */}

      </div>

      <div className='section-3'>
        {/*seccion de la tabla de resultados */}

        {/* boton para hacer consulta */}

        {/* tabla de resultados */}

      </div>

    </div>
  )
  }

export default ConsultaInformes;