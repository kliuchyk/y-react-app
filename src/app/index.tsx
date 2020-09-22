import React from 'react';
// import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';

export const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
