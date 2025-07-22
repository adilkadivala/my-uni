import { BrowserRouter } from "react-router-dom";
import Paths from "./routes/paths";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster closeButton richColors/>
      <Paths />
    </BrowserRouter>
  );
}

export default App;
