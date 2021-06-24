import React, { useEffect } from 'react'
import { PaymentScreen } from './PaymentScreen'
import { ChoosePayment } from '../components/ChoosePayment'
import { useLocation } from 'react-router'
import queryString from 'query-string';
import { startGetDataFromId } from '../redux/actions/urlActions';
import { useDispatch, useSelector } from 'react-redux';
import { NotFound } from './NotFound';
import { getDateDiff } from '../helpers/getDateDiff';


export const ChooseMethodScreen = () => {
    const location = useLocation()
    const {id} = queryString.parse(location.search)
    const {loading, urlData} = useSelector(state => state.url)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!urlData){
            dispatch(startGetDataFromId(id))
        }
    }, [dispatch])
    return (
        <>
        {
            loading?(<p>Cargando</p>):(
                <>
                    {
                        (urlData && urlData.duration>=getDateDiff(urlData.createdAt) )?(                           
                                <PaymentScreen title='Elije tu método de pago'>
                                    <ChoosePayment />
                                </PaymentScreen>
                        )
                        :
                        (
                            <NotFound/>
                        )
                    }
                </>
            )
        }
        </>
    )
}


