import { useState , useEffect} from "react";

import ContestList from "./contest-list";
import Contest from "./contest";

//Page Variable : contestList or contests
const App = ({initialData}) => {
  
    const [page, setPage] = useState("contestList")
    const [currentContestId, setCurrentContestId] = useState()

    useEffect(()=>{
        window.onpopstate = (event) =>{
            const newPage = event.state?.contestId ? "contest" : "contestList"
            setCurrentContestId(event.state?.contestId)
            setPage(newPage)
            
        }
    }, [])
    const navigateToContest= (contestId) => {
        window.history.pushState({contestId}, "", `/contest/${contestId}`)
        setPage("contest")
        setCurrentContestId(contestId)
    }
    const pageContent = () => {
        switch (page){ 
            case "contestList":
                return <ContestList initialContests = {initialData.contests} onContestClick = {navigateToContest}/>
            case "contest":
                return <Contest id =  { currentContestId } />
        }
    }

    
    return (
        <div className="container">
            {pageContent()}
        </div>
    );
}

export default App;