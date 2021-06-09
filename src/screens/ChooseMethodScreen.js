import React from 'react'
import { PaymentScreen } from './PaymentScreen'
import { ChoosePayment } from '../components/ChoosePayment'

export const ChooseMethodScreen = () => {
    return (
        <PaymentScreen title='Elije tu método de pago'>
            <ChoosePayment />
        </PaymentScreen>
    )
}
