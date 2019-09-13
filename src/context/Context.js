import React, { useState, createContext } from 'react';

const pageInfo = {
  onMainPages: true
};

export const PageContext = createContext(pageInfo);

function Context({ children }) {
  const [page, setPage] = useState(pageInfo);

  function setCurrentPage(onMainPages) {
    setPage({ onMainPages });
  }

  return (
    <PageContext.Provider value={[page.onMainPages, setCurrentPage]}>
      {children}
    </PageContext.Provider>
  );
}

export default Context;
