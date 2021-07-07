// Importamos móduos y componentes desde paquetes y ubicaciones definidas
import React, { FC, useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Invoice } from '../data/types'
import InvoicePage from './InvoicePage'

// Añadimos propiedades por defecto a la clase componente Props
interface Props {
  data: Invoice
}

// Se crea constante Download de tipo componente funcional Props que recibe un objeto como parámetros de entrada
const Download: FC<Props> = ({ data }) => {
  // Se inicializa el estado del componente
  const [show, setShow] = useState<boolean>(false)

  // Se usa hook useEffect para mostrar el enlace de descarga luego de la renderización completa de componentes
  useEffect(() => {
    setShow(false) // Estado inicial de show

    // Despus de 500 milisegundos se cambia el estado de Show
    const timeout = setTimeout(() => {
      setShow(true)
    }, 500)

    // Se limpia el tiempo de espera y se retorna data
    return () => clearTimeout(timeout)
  }, [data])

  return (
    // Se retorna componente luego del tiempo de espera
    <div className={'download-pdf ' + (!show ? 'loading' : '')} title="Save PDF">
      {show && (
        // Usamos el componenete PDFDownloadLink para generar el archivo PDF
        <PDFDownloadLink
          document={<InvoicePage pdfMode={true} data={data} />} // raiz del documento pasado como atributo al componente
          fileName={`${data.invoiceTitle ? data.invoiceTitle.toLowerCase() : 'invoice'}.pdf`} // Nombre del archivo a guardar
          aria-label="Save PDF"
        ></PDFDownloadLink>
      )}
    </div>
  )
}

export default Download // Se exporta componente
