import { useState } from 'react';
import '../styles/ParkingAutomatico.css';

const pdf_path = process.env.REACT_APP_PDF_PATH;
const pds_list = [
    {path: pdf_path + 'Comparativa de Diseños - Justificacion Tecnica.pdf'},
    {path: pdf_path + 'Componentes y Justificacion Tecnica (fase piloto).pdf'},
    {path: pdf_path + 'Definición de Procesos Implementación de IA para detección de patentes.pdf'},
    {path: pdf_path + 'Diagrama Procesos (Proyecto Smart Parking)- fase piloto.pdf'},
    {path: pdf_path + 'Documentación - Automatización de Procesamiento y Conciliación de Datos Financieros.pdf'},
    {path: pdf_path + 'Sistema de Reconocimiento de Patentes - prueba local.pdf'},
];


function ParkingAutomatico(){
    const [fileNum, setFileNum] = useState(1); //para manejar el numero actual de documento en el iframe
    const maxDocs = pds_list.length; //numero total de documentos

    //esta funcion hacer que no se salga del limite de numero de documento, no baja de 1 ni sube del maximo
    const limits = (isRest) => (
        isRest ? (fileNum===1 ? null : setFileNum(curr => curr-1)) : (fileNum===maxDocs ? null : setFileNum(curr => curr+1))
    )

    return (
    <div id="dashboard-parking" className="dashboard">
        {/* div para la barra de control de documentos */}
        <div className='control-bar flex justify-center text-2xl '>
            <p className='px-5'>Documento N°</p>
            <button onClick={() => limits(true)}><i className='fas fa-angle-left'></i></button>
            <p className='px-5'>{fileNum}/{maxDocs}</p>
            <button onClick={() => limits(false)}><i className='fas fa-angle-right'></i></button>
        </div>
        {/* iframe del documento */}
        <iframe src={pds_list[fileNum-1].path} allowFullScreen="true"></iframe>
    </div>
    )
}

export default ParkingAutomatico;