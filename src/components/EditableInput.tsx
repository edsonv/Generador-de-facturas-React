// Importamos módulos y componentes desde los paquetes y ubicaciones definidas
import React, { FC } from 'react'
import { Text } from '@react-pdf/renderer'
import compose from '../styles/compose'

// Añadimos propiedades por defecto a la clase componente Props
interface Props {
  className?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  pdfMode?: boolean
}

// Se crea constante EditableInput de tipo componente funcional Props que tomará un objeto como parámetro de entrada, 
const EditableInput: FC<Props> = ({ className, placeholder, value, onChange, pdfMode }) => {
  return (
    <>
      {/* Se evalúa si pdfMode está activo y se retorna un componente */}
      {pdfMode ? (
        // Si pdfMode está actvo devuelve el componente Text
        <Text style={compose('span ' + (className ? className : ''))}>{value}</Text>
      ) : (
        // Si pdfMode no está activo devuelve el componente input
        <input
          type="text"
          className={'input ' + (className ? className : '')}
          placeholder={placeholder || ''}
          value={value || ''}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        />
      )}
    </>
  )
}

export default EditableInput // Se exporta el componente EditableInput
