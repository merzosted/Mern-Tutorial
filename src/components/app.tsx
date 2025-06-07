import { useState , useEffect} from "react";

import Header from "./header";
import ContestList from "./contest-list";
const App = ({initialData}) => {
    // const [counter, setCounter] = useState(0)
    // // useEffect(()=>
    // //     console.log(".....") , []
    // // )
    // console.log({initialData})
    return (
        <div className="container">
            <Header message={"Naming Contests"} />
            <ContestList initialContests = {initialData.contests}/>
        </div>
    );
}

export default App;