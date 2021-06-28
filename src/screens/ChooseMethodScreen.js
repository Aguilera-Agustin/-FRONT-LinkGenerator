import  { useEffect } from 'react'

import { useLocation } from 'react-router'
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';

import { PaymentContainer }from '../components/PaymentContainer'
import { ChoosePayment } from '../components/ChoosePayment'
import { startGetDataFromId } from '../redux/actions/urlActions';
import { NotFound } from './NotFound';
import { getDateDiff } from '../helpers/getDateDiff';
import { LinkExpired } from './LinkExpired';
import { Loading } from '../components/Loading';


export const ChooseMethodScreen = () => {
    const location = useLocation()
    const {id} = queryString.parse(location.search)
    const {loading, urlData} = useSelector(state => state.url)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!urlData){
            dispatch(startGetDataFromId(id))
        }
    }, [dispatch, id, urlData])
    return (
        <>
        {
            loading?(<Loading/>):(
                <>
                    {
                        urlData?(                 
                                
                                    (urlData.duration>=getDateDiff(urlData.createdAt))?(
                                        <PaymentContainer title='Elije tu método de pago'>
                                            <ChoosePayment />
                                        </PaymentContainer>
                                    )
                                    :
                                    (
                                        <LinkExpired/>
                                    )
                                          
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


