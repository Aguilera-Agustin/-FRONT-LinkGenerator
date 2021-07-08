export const transferAccounts = (business_type) =>{
    if(business_type===1){
        return  {
            ars:{
                itau:{
                    acc:'Cuenta Corriente en PESOS',
                    num:'3171039-100/0',
                    transferData:'2590070710317103910006',
                    type: 'CBU',
                    alias: 'SSWEBSRL-CC'
                },
                macro:{
                    acc: 'Cuenta Corriente en PESOS',
                    num: '3-527-0941441520-2',
                    transferData: '2850527530094144152021',
                    type: 'CBU',
                    alias: 'MC-SSWEBSRL-CC'
                },
                mercadopago:{
                    acc:'Cuenta de MercadoPago',
                    num: null,
                    transferData: '0000003100086206174075',
                    type: 'CVU',
                    alias: 'supersistemas.mp'
                }
            },
            usd:{
                    acc:'Cuenta Corriente Especial',
                    num:'2-527-0948845025-1',
                    transferData: '2850527520094884502514',
                    type: 'CBU',
                    alias:'ALAMO.BARCO.RUINA',
                    bank: 'MACRO'
                }
            }
        }
    else{
        return {
            ars:{
                itau:{
                    acc:'Cuenta Corriente en PESOS',
                    num:'3181470-100/5',
                    transferData:'2590070710318147010053',
                    type: 'CBU',
                    alias: 'SSWEB-CC'
                },
                macro:{
                    acc: 'Cuenta Corriente en PESOS',
                    num: '3-527-0941441521-5',
                    transferData: '2850527530094144152151',
                    type: 'CBU',
                    alias: 'MACRO-SSWEB-CC'
                },
                mercadopago:{
                    acc:'Cuenta de MercadoPago',
                    num: null,
                    transferData: '0000003100068167519753',
                    type: 'CVU',
                    alias: 'xemoki.mp'
                }
            },
            usd:{
                    acc:'Caja de ahorro en DOLARES',
                    num:'3181470-201/1',
                    transferData: '2590070721318147020113',
                    type: 'CBU',
                    alias:'SSWEB-CA-D',
                    bank: 'ITAU'
                }
        }
    }
}