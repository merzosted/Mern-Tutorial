import { useState , useEffect} from "react";

import ContestList from "./contest-list";
import Contest from "./contest";

//Page Variable : contestList or contests
const App = ({initialData}) => {
  
    const [page, setPage] = useState(
        initialData.currentContest? "contest" : "contestList")
    const [currentContest, setCurrentContest] = useState(initialData.currentContest)

    useEffect(()=>{
        window.onpopstate = (event) =>{
            const newPage = event.state?.contestId ? "contest" : "contestList"
            setCurrentContest({id : event.state?.contestId})
            setPage(newPage)
            
        }
    }, [])
    const navigateToContest= (contestId) => {
        window.history.pushState({contestId}, "", `/contest/${contestId}`)
        setPage("contest")
        setCurrentContest({id : contestId})
    }
    const navigateToContestList= () => {
        window.history.pushState({}, "", "/")
        setPage("contestList")
        setCurrentContest(undefined)
    }
    const pageContent = () => {
        switch (page){ 
            case "contestList":
                return <ContestList initialContests = {initialData.contests} onContestClick = {navigateToContest}/>
            case "contest":
                return <Contest initialContest =  { currentContest } onContestListClick={navigateToContestList} />
        }
    }

    
    return (
        <div className="container">
            {pageContent()}
        </div>
    );
}

export default App;