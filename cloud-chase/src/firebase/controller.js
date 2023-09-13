import { app } from './firebase'
import { collection, getFirestore, query, where} from 'firebase/firestore'

const db = getFirestore(app)

export const categoryCollection = collection(db, "category");

export const prod = collection(db, "products")



export const newProduct = query(prod, where ("isNew", "==", true))
