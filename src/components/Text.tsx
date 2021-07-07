// Se importan módulos y componentes desde paquetes y ubicaciones definidas
import React, { FC } from 'react'
import { Text as PdfText } from '@react-pdf/renderer'
import compose from '../styles/compose'

// Se agregan propiedades por defecto a Props
interface Props {
  className?: string
  pdfMode?: boolean
  children?: string
}

// Se crea constante text de tipo componente funcional Props con un objeto como parámetros de entrada
const Text: FC<Props> = ({ className, pdfMode, children }) => {
  return (
    <>
      {pdfMode ? (
        <PdfText style={compose('span ' + (className ? className : ''))}>{children}</PdfText>
      ) : (
        <span className={'span ' + (className ? className : '')}>{children}</span>
      )}
    </>
  )
}

export default Text
