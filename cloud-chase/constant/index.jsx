import sale1 from '../src/assets/sale1.png'
import sale2 from '../src/assets/sale2.png'
import { FaPlane } from 'react-icons/fa'
import { FaClock }  from 'react-icons/fa'
import { FaShieldAlt } from 'react-icons/fa'

export const heroCards = [
    {
        id: 1,
        image: [sale1],
        desc:'Affordable and Quality Pods',
        route: `https://cloud-chase.vercel.app/products/pods`
    },
    {
        id:2,
        image: [sale2],
        desc:'20% Off for new disposables',
        route: `https://cloud-chase.vercel.app/products/disposable`
    },
]

export const otherInfo = [
    {
        id: 1,
        icon: <FaClock size={36}/>,
        description: '24/7 Online Customer hotline',
    },
    {
        id: 2,
        icon: <FaPlane size={36} />,
        description: 'Free Shipping on orders above ₱800',
    },
    {
        id: 3,
        icon: <FaShieldAlt size={36}/>,
        description: '30 days return and refund ',
    },
]