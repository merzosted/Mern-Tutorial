import ReactDOMServer from "react-dom/server"
import { fetchContests, fetchSingleContest } from "../api-client"
import App from "../components/app"

const serverRender = async (req) => {
  const {contestId} = req.params
  const initialData = contestId ? {currentContest: await fetchSingleContest(contestId)} 
  :{contests: await fetchContests()}
  // Make sure this returns: { contests: Contest[] }

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData = {initialData} /> // Pass contests array, not object
  );

  return { initialMarkup, initialData };
};

export default serverRender