import {createRoot} from "react-dom/client"
import App from "./components/app"

  
const container = document.getElementById("app")
const root = createRoot(container)

// Fetch or Axios
root.render(<App initialData={{contests : []}} />)

