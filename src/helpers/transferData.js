import { transferAccounts } from "../assets/transferData"

export const firstData = {
    
        type: 'Caja de ahorro USD',
        cbu: '2590070721318147020113',
        alias: 'SSWEB-CA-D',
        owner: 'Nunez,Luis Fernando'
    
}

export const secondData = {
        type: 'Cuenta Corriente Especial en DOLARES',
        cbu: '2850527520094884502514',
        alias: 'ALAMO.BARCO.RUINA',
        owner: 'SUPERSISTEMASWEB SRL'
}

export const getTransferData = (business_type, type, bank) =>{
    if(type==='ars'){
        if(bank===''){
                return transferAccounts(business_type)[type]['macro']
        }
        else{
                return transferAccounts(business_type)[type][bank]
        }
    }
    else{
        return transferAccounts(business_type)[type]
    }
}