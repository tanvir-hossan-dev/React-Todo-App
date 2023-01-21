import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormAdd from "./components/FormAdd/FormAdd";
import FormEdit from "./components/FormEdit/FormEdit";
import Results from "./components/Results/Results";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormAdd />} />
          <Route path="/result" element={<Results />} />
          <Route path="/edit/:id" element={<FormEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
