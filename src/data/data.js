import React from 'react';
import {MdOutlineRestaurantMenu, MdOutlineNoFood} from 'react-icons/md';
import {FaTachometerAlt, FaUserFriends} from 'react-icons/fa'
import {BiMessageAltDetail} from 'react-icons/bi'
import {BsListCheck} from 'react-icons/bs'


/* images of product */
import Pouletyassa from '../images/pouletYassa.jpg'
import PouletDG from '../images/PouletDG.jpeg'
import Mafe from '../images/mafe.png'
import RizTomate from '../images/rizTomate.jpeg'
import tiebou from '../images/tieboudiene.jpg'
import Croquette from '../images/croquetes.jpeg'
import Gateau from '../images/gateau.jpeg'
import Pili from '../images/pili.jpg'
import Kossam from '../images/kossam.jpeg'
import bissap from '../images/bissap.jpeg'



/* images of user avatar */
import avatar1 from '../images/chantier.jpg'
import avatar2 from '../images/assurance.jpg'
import avatar3 from '../images/LogoNams.jpeg'

export const links=[
    {
        id:1,
        name:'dashbord',
        icon: <FaTachometerAlt/>,
    },
    {
        id:2,
        name:'order',
        icon:<BsListCheck/>
    },
    {
        id:3,
        name:'messages',
        icon: <BiMessageAltDetail/>,
    },
    {
        id:4,
        name:'menu',
        icon: <MdOutlineRestaurantMenu/>,
    },
    {
        id:5,
        name:'products',
        icon: <MdOutlineNoFood/>
    },
    {
        id:6,
        name:'users',
        icon: <FaUserFriends/>
    }

]

export const menu_table=[
    {
        id:1,
        name:'food',
    },
    {
        id:2,
        name:'brevage',
    },
    {
        id:3,
        name:'Portry shop',
    },
    {
        id:4,
        name:'Spice',
    }

    
]

export const order_table = [
    {
        id:1,
        orderDate: '20/10/2023',
        clientName:'chouente',
        phoneNumber:'650868067',
        localisation: 'hopital générale',
        order:'1 poulet yassa 2 kossam',
        price:'25dir',
        livrDate:'22/10/2023',    
                
    },
    {
        id:2,
        orderDate: '01/11/2024',
        clientName:'Tchakounté',
        phoneNumber:'677169555',
        localisation: 'tamtam',
        order:'3 poulet DG 1 kossam 2 croquette',
        price:'70 dir',
        livrDate:'02/11/2024',            
    },
    {
        id:3,
        orderDate: '12/12/2023',
        clientName:'Nono',
        phoneNumber:'650868067',
        localisation: 'Yassa ',
        order:'10 tchebou diene 5 kossam',
        price:'100dir',
        livrDate:'22/12/2023',            
    },
    {
        id:4,
        orderDate: '24/12/2023',
        clientName:'Nono',
        phoneNumber:'650868067',
        localisation: 'Yassa ',
        order:'3 tchebou diene 1 kossam',
        price:'100dir',
        livrDate:'25/12/2023',            
    },
    {
        id:5,
        orderDate: '24/12/2023',
        clientName:'Nono',
        phoneNumber:'650868067',
        localisation: 'Yassa ',
        order:'3 tchebou diene 1 kossam',
        price:'100dir',
        livrDate:'25/12/2023',            
    },
    {
        id:6,
        orderDate: '24/12/2023',
        clientName:'Nono',
        phoneNumber:'650868067',
        localisation: 'Yassa ',
        order:'3 tchebou diene 1 kossam',
        price:'100dir',
        livrDate:'25/12/2023',            
    },
    {
        id:7,
        orderDate: '12/12/2023',
        clientName:'Ndonfack',
        phoneNumber:'682569393',
        localisation: 'Mokolo ',
        order:' 1 kossam',
        price:'10dir',
        livrDate:'16/12/2023',            
    },
    {
        id:8,
        orderDate: '05/08/2023',
        clientName:'Atangana',
        phoneNumber:'658026998',
        localisation: 'Yassa ',
        order:'1 riz sauce tomate 2 Gateaux',
        price:'40dir',
        livrDate:'06/08/2023',            
    },
    {
        id:9,
        orderDate: '05/08/2023',
        clientName:'Atangana',
        phoneNumber:'658026998',
        localisation: 'Yassa ',
        order:'1 riz sauce tomate 2 Gateaux',
        price:'40dir',
        livrDate:'06/08/2023',            
    },
    {
        id:10,
        orderDate: '05/08/2023',
        clientName:'Atangana',
        phoneNumber:'658026998',
        localisation: 'Yassa ',
        order:'1 riz sauce tomate 2 Gateaux',
        price:'40dir',
        livrDate:'06/08/2023',            
    },
    {
        id:11,
        orderDate: '12/12/2023',
        clientName:'Ndonfack',
        phoneNumber:'682569393',
        localisation: 'Mokolo ',
        order:' 1 kossam',
        price:'10dir',
        livrDate:'16/12/2023',            
    },
    {
        id:12,
        orderDate: '05/08/2023',
        clientName:'Atangana',
        phoneNumber:'658026998',
        localisation: 'Yassa ',
        order:'1 riz sauce tomate 2 Gateaux',
        price:'40dir',
        livrDate:'06/08/2023',            
    },
]

export const message_table=[
    {
        id:1,
        date: '20/12/2023',
        name:'Dongo',
        phoneNumber:'650858067',
        message:'message envoyé par la visiteur pour soit poser une question, soit critiqué, soit aimer quelque chose',
    },
    {
        id:2,
        date: '25/05/2023',
        name:'manpack',
        phoneNumber:'669508545',
        message:'message envoyé par la visiteur pour soit poser une question, soit critiqué, soit aimer quelque chose',
    },
    {
        id:3,
        date: '31/12/2023',
        name:'chouente',
        phoneNumber:'670582956',
        message:'message envoyé par la visiteur pour soit poser une question, soit critiqué, soit aimer quelque chose',
    },
    {
        id:4,
        date: '20/09/2023',
        name:'Bessala',
        phoneNumber:'650858067',
        message:'message envoyé par la visiteur pour soit poser une question, soit critiqué, soit aimer quelque chose',
    },
    {
        id:5,
        date: '20/12/2023',
        name:'Harouna',
        phoneNumber:'655556999',
        message:'message envoyé par la visiteur pour soit poser une question, soit critiqué, soit aimer quelque chose',
    },
]

export const product_table = [
    {
        id:1,
        name:'poulet yassa',
        type:'food',
        image:Pouletyassa,
        price:'12 dir',

    },
    {
        id:2,
        name:'poulet DG',
        type:'food',
        image:PouletDG,
        price: '15 dir',
    },
    {
        id:3,
        name:'Mafé poulet',
        type:'food',
        image:Mafe,
        price:'35 dir',
    },
    {
        id:4,
        name:'Riz sauce tomate',
        type:'food',
        image:RizTomate,
        price:'50 dir',
    },
    {
        id:5,
        name:'Sauce pistache ',
        type:'food',
        image:RizTomate,
        price:'50 dir',
    },
    {
        id:6,
        name:'Met de pistache plantain',
        type:'food',
        image:RizTomate,
        price:'50 dir',
    },
    {
        id:7,
        name:'Tiebou diene',
        type:'food',
        image:tiebou,
        price:'50 dir',
    },
    {
        id:8,
        name:'croquette',
        type:'pastry shop',
        image:Croquette,
        price:'20 dir'
    },
    {
        id:9,
        name:'Gateaux',
        type:'pastry shop',
        image:Gateau,
        price:'30 dir'
    },
    {
        id:10,
        name:'pastelle',
        type:'pastry shop',
        image:Pili,
        price:'60 dir'
    },
    {
        id:11,
        name:'Caramel',
        type:'breverage',
        image:Kossam,
        price:'30 dir'
    },
    {
        id:12,
        name:'chipses',
        type:'food',
        image:RizTomate,
        price:'50 dir',
    },
    {
        id:13,
        name:'Beignets soufflés',
        type:'food',
        image:RizTomate,
        price:'50 dir',
    },
    {
        id:14,
        name:'Kossam',
        type:'breverage',
        image:Kossam,
        price:'30 dir'
    },
    {
        id:15,
        name:'Degue',
        type:'breverage',
        image:Kossam,
        price:'30 dir'
    },
    {
        id:16,
        name:'bissap',
        type:'breverage',
        image:bissap,
        price:'30 dir'
    },
    
]

export const users_table = [
    {
        id:1,
        name:'Noelle',
        password: '1233456',
        avatar:avatar1,
    },
    {
        id:2,
        name:'Joseph',
        password:'password2023',
        avatar:avatar2,
    },
    {
        id:3,
        name:'atango',
        password:'2023bkyc',
        avatar:avatar3,
    }
]