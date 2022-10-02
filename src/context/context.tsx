import React, {useState, useEffect, createContext, ReactNode, FC, useContext} from 'react';
import MockUser from "./MockUser";
import MockRepository from "./MockRepos"
import MockFollower from "./MockFollows";
import mockUser from "./MockUser";
import mockRepos from "./MockRepos";
import mockFollows from "./MockFollows";





interface Model {
    [others: string]: any;


}



interface Props {
    children?: ReactNode
    // any props that come into the component
}

const rootUrl: string = 'https://api.github.com'


const GithubContext = createContext< Model| undefined>(undefined);

// Provider - > Consumer ( The GitHub Context Provider )
function EnthusiasticGreeting() {
    const currentUser = useContext(GithubContext);
    return <div>Hello {currentUser!.toUpperCase()}!</div>;
}

const Provider:FC<Props>  = ({children, ...props}) => {

    const [GithubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [Follows, SetFollows] = useState(mockFollows);

    return (
        // Use ES6 Syntax

        <GithubContext.Provider value={{GithubUser,repos,Follows}}>
            {children}

        </GithubContext.Provider>
    );
}

export {GithubContext,Provider};