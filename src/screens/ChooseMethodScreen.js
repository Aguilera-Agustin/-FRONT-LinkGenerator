import React, { useEffect } from 'react'
import { PaymentScreen } from './PaymentScreen'
import { ChoosePayment } from '../components/ChoosePayment'
import { useLocation, useParams } from 'react-router'
import queryString from 'query-string';
import { startGetDataFromId } from '../redux/actions/urlActions';
import { useDispatch } from 'react-redux';


export const ChooseMethodScreen = () => {
    const location = useLocation()
    const {id} = queryString.parse(location.search)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startGetDataFromId(id))
    }, [dispatch])
    return (
        <PaymentScreen title='Elije tu método de pago'>
            <ChoosePayment />
        </PaymentScreen>
    )
}
