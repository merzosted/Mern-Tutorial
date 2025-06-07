import ReactDOMServer from "react-dom/server"
import { fetchContests } from "../api-client"
import App from "../components/app"

const serverRender = async () => {
  const contests = await fetchContests(); // Make sure this returns: { contests: Contest[] }

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={{contests}} /> // Pass contests array, not object
  );

  return { initialMarkup, initialData :{contests} };
};

export default serverRender