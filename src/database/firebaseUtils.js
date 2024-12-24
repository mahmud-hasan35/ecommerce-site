
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import app from "./firabaseConfig";

export const db = getDatabase(app);

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

//  user profile

export const createUserProfile = async (data) => {
    const {id, name, role,email} = data;
    set(ref(db, "userProfile/" + id),{
        name,
        role,
        email,
    });
};

export const getProfile = async (id) => {
    return new Promise((resolve, reject) => {

        try {
            onValue(ref(db,"userProfile/" +id), (snapShot) => {
                resolve(snapShot.val())
            });
        } catch (error) {
            reject (error)
        }
    })
}