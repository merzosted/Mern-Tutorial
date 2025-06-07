import { useEffect, useState } from "react"
import ContestPreview from "./contest-preview"
import { fetchContests } from "../api-client"
const ContestList = ({initialContests}) => {
    const [contests, setContests] = useState(initialContests);
    useEffect(()=> {
        fetchContests().then((data)=> {
            setContests(data.contests)
        })
    }, [])
    return (
        <div className="contest-list">
            {contests.map((contest) => {
                return(
                    <ContestPreview key= {contest.id} contest ={contest}/>
                )
            })}
        </div>
    )
}

export default ContestList