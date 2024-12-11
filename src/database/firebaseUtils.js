
import { getDatabase, ref, onValue } from "firebase/database";
import app from "./firabaseConfig";

const db = getDatabase(app);

export const getFirebaseData = async () => {
   
const starCountRef = ref(db, "categories");

return new Promise((resolve, reject) => {
    try {
        onValue(starCountRef, (snapshot) => {
            const updateCategoryList = [];
            snapshot.forEach((item) => {
                updateCategoryList.push({
                    id:item.key,
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