import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { CustomLayout } from './layout/CustomLayout';
import { Landing } from './component/landing/Landing';

const App = () => (
  <BrowserRouter basename="/remanage">
    <CustomLayout>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route
          path="*"
          element={<Navigate to="/landing" replace />}
        />
      </Routes>
    </CustomLayout>
  </BrowserRouter>
);

// eslint-disable-next-line import/no-default-export
export default App;
