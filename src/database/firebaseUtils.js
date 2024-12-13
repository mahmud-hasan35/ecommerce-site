
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import app from "./firabaseConfig";

const db = getDatabase(app);
// read / getData/ from database

export const getFirebaseData = async (tableName) => {

    const starCountRef = ref(db, tableName);

    return new Promise((resolve, reject) => {
        try {
            onValue(starCountRef, (snapshot) => {
                const updateCategoryList = [];
                snapshot.forEach((item) => {
                    updateCategoryList.push({
                        id: item.key,
                        ...item.val(),
                    });
                })
                resolve(updateCategoryList);
            })

        } catch (error) {
            reject(error);

        }

    });
}

export const getFirebaseDataEdit = async (tableName) => {
    const starCountRef = ref(db, tableName);

    return new Promise((resolve, reject) => {
        try {
            onValue(starCountRef, (snapshot) => {
                resolve(snapshot.val())
            });

        } catch (error) {
            reject(error);

        }

    });
}

// write/ set/ push

export const setDataToFirebase = (tableName, data) => {
    push(ref(db, tableName), data);
};  

export const updateFirebaseData = (tableName, data) => {
    
    
    set (ref(db, tableName), data);
};  

// remove data

export const removeDataFromFirebase = (tableName) => {
    console.log(tableName);
    
    
    remove(ref(db, tableName))
}; 
