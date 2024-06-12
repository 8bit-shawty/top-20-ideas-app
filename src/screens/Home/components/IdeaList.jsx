import React from 'react'
import IdeaItem from './IdeaItem'

function IdeaList({ideaList, refreshData}) {
    return (
        <div>
            {ideaList.map((idea, index) => (
                <IdeaItem idea={idea} key={index} index={index} refreshData={refreshData}/>
            ))}
    </div>
    )
}

export default IdeaList