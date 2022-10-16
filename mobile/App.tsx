import * as React from "react";

import { AuthProvider } from "./src/hooks/useAuth";
import Navigation from "./src/components/Navigation";

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
