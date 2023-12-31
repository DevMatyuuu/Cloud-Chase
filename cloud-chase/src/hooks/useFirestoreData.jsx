import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { categoryCollection, prod,  newProduct } from "../firebase/controller";

function useFirestoreData() {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState([]);
    const [newProd, setNewProd] = useState([]);
    const [latest, setLatest] = useState([]);



  useEffect(
    () => {
    const unsubscribe = onSnapshot(categoryCollection, (snapshot) => {
     setCategories( 
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
        
      })
     );
  });
  return () => unsubscribe();
},
    []
  );

  useEffect(
    () => {
    const unsubscribe = onSnapshot(prod, (snapshot) => {
     setProduct( 
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
     );
  });
  return () => unsubscribe();
},
    []
  );

  useEffect(
    () => {
    const unsubscribe = onSnapshot(newProduct, (snapshot) => {
     setNewProd( 
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
     );
  });
  return () => unsubscribe();
},
    []
  );
  
  return {categories, product, newProd};
}

export default useFirestoreData