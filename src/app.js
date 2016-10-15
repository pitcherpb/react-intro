import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">search</button>
        </form>
    )
}

const Header = (props) => (
    <hearder>
        <h1>{props.title}</h1>
        <SearchForm />
    </hearder>
)

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
        {props.items.map(item => (
            <li>{item}</li>
        ))}
        </ul>
    )
} 

const Content = (props) => (
    <section>
        <p>{props.content}</p>
        <Items items={props.items}/>
    </section>
)

const AppWithoutDescription = () => (
    <Header title="No description here" />
)

const App = () => {
    const appTitle = 'Fronttechs: React'
    const appContent = 'This is a simple react applicationt'
    const items = [
        "Oliver",
        "Tobey",
        "Charlie",
        "Lucky",
        "Poyo"
    ]
    return(
        <section className="app-container">
            <Header title={appTitle} />
            <Content 
                content={appContent}
                items={items}
            />
        </section>
    )


}


const element = document.getElementById('app')
ReactDOM.render(<App />, element)