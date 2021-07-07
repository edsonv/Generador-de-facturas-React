// Información para mostrar en la primera pantalla

import { ProductLine, Invoice } from './types'  // Se importan las interfaces desde el archivo

// Se define y se exporta la constante initialProductLine de tipo objeto ProductLine y se asignan valores a sus keys
export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}

// Se define y se exporta la constante initialInvoice de tipo objeto Invoice y se asignan valores a sus keys
export const initialInvoice: Invoice = {
  title: 'Factura',
  companyName: '',
  name: '',
  companyAddress: '',
  companyAddress2: '',
  companyCountry: 'Venezuela',
  billTo: 'A nombre de:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'Venezuela',
  invoiceTitleLabel: 'Factura #',
  invoiceTitle: '',
  invoiceDateLabel: 'Fecha',
  invoiceDate: '',
  invoiceDueDateLabel: 'Vencimiento',
  invoiceDueDate: '',
  productLineDescription: 'Descripción',
  productLineQuantity: 'Cantidad',
  productLineQuantityRate: 'Unitario',
  productLineQuantityAmount: 'Monto',
  productLines: [
    {
      description: 'Brochure Design',
      quantity: '2',
      rate: '100.00',
    },
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'I.V.A. (10%)',
  totalLabel: 'TOTAL',
  currency: 'VES',
  notesLabel: 'Notas',
  notes: 'Fué genial hacer negocios contigo.',
  termLabel: 'Términos y condiciones',
  term: 'Por favor pague antes de la fecha de vencimiento.',
}
