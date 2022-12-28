import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { CustomLayout } from './layout/CustomLayout';
import { Landing } from './component/landing/Landing';
import { getColumnDB, setColumnDB, init } from './database/local/idb';
import { seed } from './database/local/seed';

const App = () => (
  <BrowserRouter basename="/remanage/">
    <CustomLayout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CustomLayout>
  </BrowserRouter>
);

init().then(() => {
  getColumnDB().then((res) => {
    if (res.length === 0) {
      setColumnDB(seed); // it will produce error the first time
    }
  });
});

// eslint-disable-next-line import/no-default-export
export default App;
