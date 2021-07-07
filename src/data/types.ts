// Esquema de tipos de valores para variables en las interfaces

import { CSSProperties } from 'react' // Se importa la interface para estilos de CSS

// Se define y se exporta la interface ProductLine y los tipos de valores que tomarán sus keys
export interface ProductLine {
  description: string
  quantity: string
  rate: string
}

// Se define y se exporta la interface Invoice y los tipos de valores que tomarán sus keys
export interface Invoice {
  title: string
  companyName: string
  name: string
  companyAddress: string
  companyAddress2: string
  companyCountry: string

  billTo: string
  clientName: string
  clientAddress: string
  clientAddress2: string
  clientCountry: string

  invoiceTitleLabel: string
  invoiceTitle: string
  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string

  productLineDescription: string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string

  productLines: ProductLine[]

  subTotalLabel: string
  taxLabel: string

  totalLabel: string
  currency: string

  notesLabel: string
  notes: string
  termLabel: string
  term: string
}

// Se define y se exporta la interace CSSClasses, le asignamos el tipo de valor de su key y le asignamos el valor del módulo importado anteriormente
export interface CSSClasses {
  [key: string]: CSSProperties
}
