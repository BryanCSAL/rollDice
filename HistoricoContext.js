import React, { createContext, useContext, useState } from 'react';

const HistoricoContext = createContext();

export function useHistorico() {
  return useContext(HistoricoContext);
}

export function HistoricoProvider({ children }) {
  const [historico, setHistorico] = useState([]);

  const adicionarRolagem = (dado, valor) => {
    const nova = {
      dado,
      valor,
      timestamp: new Date().toLocaleString(),
    };
    setHistorico(prev => [nova, ...prev]);
  };

  return (
    <HistoricoContext.Provider value={{ historico, adicionarRolagem }}>
      {children}
    </HistoricoContext.Provider>
  );
}
