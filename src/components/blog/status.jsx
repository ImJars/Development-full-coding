import React, { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";
import { FaStar, FaShare } from "react-icons/fa";

import {  getFirestore, doc, getDoc, updateDoc, addDoc, collection, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import Star from "./star";

function Status({ idContador, text, date }) {
  const [contador, setContador] = useState(0);
  
    useEffect(() => {
      const obtenerContador = async () => {
        const docRef = doc(db, "contadores", idContador);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContador(docSnap.data().valor);
        } else {
          await setDoc(docRef, { valor: 0 });
        }
      };
      obtenerContador();
      // eslint-disable-next-line
    }, [idContador]);
  
    const incrementar = async () => {
      const docRef = doc(db, "contadores", idContador);
      await updateDoc(docRef, { valor: contador + 1 });
      setContador(contador + 1);
    };
  
    const decrementar = async () => {
      const docRef = doc(db, "contadores", idContador);
      if (contador > 0) {
        await updateDoc(docRef, { valor: contador - 1 });
        setContador(contador - 1);
      }
    };
  
  return (
    <>
      <div>
        <div key={idContador} className="flex space-x-2 justify-between">
          <div className="flex items-center space-x-2">
            <div>
              <img src="perfil.jpg" alt="" className="w-10 h-10 rounded-full" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="font-bold text-base">Angel Ramirez</h1>
                <MdVerified className="text-sm text-text-blue" />
              </div>
              <h2 className="text-sm text-text-general">@Im_Jars</h2>
            </div>
          </div>
          <div className="text-text-general">{date}</div>
        </div>
        <div className="mt-3">
          <p className="ml-12 font-sans">{text}</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between gap-3">
            <button onClick={incrementar} className="flex-1 bg-text-blue bg-opacity-10 flex justify-center py-2 rounded-lg">
              <div className="flex items-center space-x-1">
              <FaStar className="text-text-general text-xl" />
              <span className="text-sm">{contador}</span>
              <Star />
              </div>
            </button>
            <button onClick={decrementar} className="flex-1 bg-text-blue bg-opacity-10 flex justify-center py-2 rounded-lg">
              <FaShare className="text-text-general" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
