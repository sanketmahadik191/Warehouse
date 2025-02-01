import { RouterProvider } from "react-router-dom";
import route from "./router/route";

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />     
    </div>
  );
}

export default App;
