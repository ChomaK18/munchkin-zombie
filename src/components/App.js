import { ToolbarProvider } from "../context/ToolbarContext";
import Header from "./Header";
import Monsters from "./Monsters";
import Toolbar from "./Toolbar";

const App = () => {
  return (
    <div>
      <Header />
      <ToolbarProvider>
        <Toolbar />
        <Monsters />
      </ToolbarProvider>
    </div>
  );
};

export default App;
