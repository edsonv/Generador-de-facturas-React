// Importamos módulos y componentes desde los paquetes y ubicaciones definidas
import React, { FC } from 'react'
import { Document as PdfDocument } from '@react-pdf/renderer'

// Añadimos propiedades por defecto a la clase componente Props
interface Props {
  pdfMode?: boolean
}

// Se crea la constante Document de tipo componente funcional Props que toma un objeto como parámetro de entrada
const Document: FC<Props> = ({ pdfMode, children }) => {
  // Si pdfMode es verdadero, creamos el documento usando el componente PdfDocument, sino se muestra el contenido en la web en un componente personalizado
  return <>{pdfMode ? <PdfDocument>{children}</PdfDocument> : <>{children}</>}</>
}

export default Document // Exportamos el componente Document
