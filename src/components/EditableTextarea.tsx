// Se importan modulos y componentes desde paquetes y ubicaciones definidas
import React, { FC } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { Text } from '@react-pdf/renderer'
import compose from '../styles/compose'

// Añadimos propiedades por defecto a la clase componente Props
interface Props {
  className?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  pdfMode?: boolean
  rows?: number
}

// Se crea constante EditableTextArea de tipo componente funcional Props que toma un objeto como parámeto de entrada
const EditableTextarea: FC<Props> = ({
  className,
  placeholder,
  value,
  onChange,
  pdfMode,
  rows,
}) => {
  return (
    <>
      {pdfMode ? (
        <Text style={compose('span ' + (className ? className : ''))}>{value}</Text>
      ) : (
        // Se utiliza el componente TextareaAutosize 
        <TextareaAutosize
          minRows={rows || 1}
          className={'input ' + (className ? className : '')}
          placeholder={placeholder || ''}
          value={value || ''}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        />
      )}
    </>
  )
}

export default EditableTextarea // Se exporta componente
