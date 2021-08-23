import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router'
import { Redirect } from 'react-router-dom';
import { selectById } from '../redux/actions/urlActions';



export const MpSuccess = () => {
    const location = useLocation()
    const {id} = queryString.parse(location.search)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(selectById(id))
    }, [dispatch, id])

    const url = useSelector(state => state.url.urlData.enrcyptedId)
    return (
        <>
            <Redirect to={url} />
        </>
    )
}
