import React, { useContext, useEffect } from 'react';
import { PageContext } from '../../context/Context';
import './News.css';

function News() {
  const [page, setCurrentPage] = useContext(PageContext);
  useEffect(() => {
    setCurrentPage(true); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="news-container">
      <h1>What's New</h1>
    </div>
  );
}

export default News;
