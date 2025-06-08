import { useEffect, useState } from "react"
import { fetchSingleContest } from "../api-client"
import Header from "./header"

const Contest = ({initialContest, onContestListClick}) => {
  const [contest , setContest] = useState(initialContest)

  useEffect(() => {
    if(!contest.names){
        fetchSingleContest(contest.id).then((contest)=>{
        setContest(contest)
    })
    }
  }, [contest.id, contest.names])
//   if (!contest) {
//     return <div>Loading...</div>; 
//   }
const handleClickContestList = (event) =>{
    event.preventDefault()
    onContestListClick()

}
  return (
    <div className="contest">
        <Header message={contest.contestName} />
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>

        <a href="/" className="link" onClick={handleClickContestList}>Contest List</a>
    </div>
  )
}

export default Contest