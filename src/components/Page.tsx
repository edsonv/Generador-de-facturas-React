// Importamos módulos y componentes de paquetes y ubicaciones definidas
import React, { FC } from 'react'
import { Page as PdfPage } from '@react-pdf/renderer'
import compose from '../styles/compose'

// Añadimos propiedades por defecto a la clase componente Props
interface Props {
  className?: string
  pdfMode?: boolean
}

// Se crea la constante page de tipo componente funcional Props que toma un objeto como parámetro de entrada
const Page: FC<Props> = ({ className, pdfMode, children }) => {
  return (
    <>
      {pdfMode ? (
        // Si pdfMode es verdadeso se imprime la página en formato PDF tamaño A4
        <PdfPage size="A4" style={compose('page ' + (className ? className : ''))}>
          {children}
        </PdfPage>
      ) : (
        // Sino se muestra el contenido en un componente personalizado
        <div className={'page ' + (className ? className : '')}>{children}</div>
      )}
    </>
  )
}

export default Page // Exportamos componente Page
