import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJHqH1ZOhgxSdpCVZvFc7jyoAGZd7TyX8",
    authDomain: "techscape-41f09.firebaseapp.com",
    projectId: "techscape-41f09",
    storageBucket: "techscape-41f09.firebasestorage.app",
    messagingSenderId: "44678573420",
    appId: "1:44678573420:web:f4b0c7986dc22fbbb1d749"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.dbApi = {
    loginTeam: async (teamId, password) => {
        try {
            const cleanTeamId = teamId.toLowerCase().trim();
            const teamRef = doc(db, "teams", cleanTeamId);
            const docSnap = await getDoc(teamRef);

            if (docSnap.exists() && docSnap.data().password === password) {
                localStorage.setItem("huntTeamId", cleanTeamId);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    },

    getTeamId: () => {
        return localStorage.getItem("huntTeamId");
    },

    getRound1Clue: async () => {
        const teamId = localStorage.getItem("huntTeamId");
        if (!teamId) throw new Error("Not authenticated");

        const teamRef = doc(db, "teams", teamId);
        const docSnap = await getDoc(teamRef);

        if (docSnap.exists()) {
            return docSnap.data().encryptedArray;
        }
        throw new Error("Data not found");
    },

    
    validateRound1Code: async (input, teamId) => {
        const normalizedInput = input.replace(/\s/g, '');
        try {
            
            const docSnap = await getDoc(doc(db, "teams", teamId));
            return docSnap.exists() && docSnap.data().r1Code === normalizedInput;
        } catch (error) {
            return false;
        }
    },

    
    saveRound1Time: async (teamId) => {
        return true; 
    },

    validateRound2Answer: async (input) => {
        const normalizedInput = input.replace(/\s/g, '');
        
        try {
            const teamsRef = collection(db, "teams");
            const q = query(teamsRef, where("r2Code", "==", normalizedInput));
            const querySnapshot = await getDocs(q);
            
            return !querySnapshot.empty;
        } catch (error) {
            return false;
        }
    },

    validateRound3Answer: async (input) => {
        const normalizedInput = input.replace(/\s/g, '');
        const teamId = localStorage.getItem("huntTeamId");
        
        try {
            const docSnap = await getDoc(doc(db, "teams", teamId));
            return docSnap.exists() && docSnap.data().r3Code === normalizedInput;
        } catch (error) {
            return false;
        }
    }
};