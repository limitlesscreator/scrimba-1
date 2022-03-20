export function Tweet({name, tweets,id, filteredTweets}) {

    return (
        <div className={'tweet'}>
            <h2>{name}</h2>
            <h3>{tweets}</h3>
            <button onClick={() => filteredTweets(id)}>Delete id: {id}</button>
            <button >Like</button>
        </div>
    )
}