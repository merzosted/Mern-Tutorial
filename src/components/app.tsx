import { useState , useEffect} from "react";

import Header from "./header";

const App = () => {
    const [counter, setCounter] = useState(0)
    // useEffect(()=>
    //     console.log(".....") , []
    // )

    return (
        <div className="container">
            <Header message={"Naming Contests"} />
        </div>
    );
}

export default App;