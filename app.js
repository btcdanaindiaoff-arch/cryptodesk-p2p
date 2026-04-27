import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  addDoc, collection, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// AUTH
window.signup = async () => {
  let email = email.value;
  let pass = password.value;
  await createUserWithEmailAndPassword(auth, email, pass);
  alert("Signup success");
};

window.login = async () => {
  let email = email.value;
  let pass = password.value;
  await signInWithEmailAndPassword(auth, email, pass);
  alert("Login success");
};

// CREATE AD
window.createAd = async () => {
  await addDoc(collection(db, "ads"), {
    price: price.value,
    min: min.value,
    max: max.value,
    userId: auth.currentUser.uid
  });
};

// LIVE ADS
const adsDiv = document.getElementById("ads");

onSnapshot(collection(db, "ads"), (snap) => {
  adsDiv.innerHTML = "<h3>Live Ads</h3>";

  snap.forEach(doc => {
    let ad = doc.data();

    adsDiv.innerHTML += `
      <div style="border:1px solid gray;padding:10px;margin:10px">
        ₹${ad.price} | ${ad.min}-${ad.max}
        <button onclick="startTrade('${doc.id}','${ad.userId}')">BUY</button>
      </div>
    `;
  });
});

// CREATE TRADE
window.startTrade = async (adId, sellerId) => {
  await addDoc(collection(db, "trades"), {
    adId,
    buyerId: auth.currentUser.uid,
    sellerId,
    status: "pending"
  });

  alert("Trade started");
};
