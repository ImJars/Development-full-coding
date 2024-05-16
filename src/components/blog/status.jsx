import React, { useState, useEffect } from "react";
import { MdVerified } from "react-icons/md";

import {  doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import Star from "./star";

function Status({ children,idContador, text, date }) {
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
              <img src="perfil.jpg" alt="" className="w-10 h-10 rounded-full no-seleccionable" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="font-bold text-base no-seleccionable">Angel Ramirez</h1>
                <MdVerified className="text-sm text-text-blue" />
              </div>
              <h2 className="text-sm text-text-general no-seleccionable">@Im_Jars</h2>
            </div>
          </div>
          <div className="text-text-general no-seleccionable">{date}</div>
        </div>
        <div className="mt-5">
          <p className="text-text-white-gray text-sm font-sans mb-4">{text}</p>
          {children}
        </div>
        <div className="mt-8">
          <div className="flex justify-between gap-3 border-t border-opacity-20 border-text-general">
            <Star incrementar={incrementar} decrementar={decrementar} contador={contador} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
