import { useEffect, useState } from "react"
import { fetchSingleContest } from "../api-client"
import Header from "./header"

const Contest = ({id}) => {
  const [contest , setContest] = useState(null)

  useEffect(() => {
    fetchSingleContest(id).then((contest)=>{
        setContest(contest)
    })
  }, [id])
  if (!contest) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="contest">
        <Header message={contest.contestName} />
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>
    </div>
  )
}

export default Contest