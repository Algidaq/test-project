import { Stack } from "@mui/material";
import InputField from "./components/Input/Input";
import StateEnum from "./enums/StateEnum";
function App() {
  return (
    <Stack width="100vw" height="100vh" justifyContent="center">
      <InputField label="Email" />
    </Stack>
  );
}

export default App;
