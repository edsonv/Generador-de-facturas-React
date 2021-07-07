// Se importan módulos y componentes desde paquetes y ubicaciones definidas
import React, { FC } from 'react'
import { View as PdfView } from '@react-pdf/renderer'
import compose from '../styles/compose'

// Se agregan propiedades por defecto a Props

interface Props {
  className?: string
  pdfMode?: boolean
}

// Se crea constante View de tipo componente funcional Props con objeto como parámetro de entrada
const View: FC<Props> = ({ className, pdfMode, children }) => {
  return (
    <>
      {pdfMode ? (
        <PdfView style={compose('view ' + (className ? className : ''))}>{children}</PdfView>
      ) : (
        <div className={'view ' + (className ? className : '')}>{children}</div>
      )}
    </>
  )
}

export default View // Se exporta módulo
