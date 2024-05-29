import {useState} from 'react'

function Nested(count: number, name: String) {
    console.log("Nested::Name", name)
    if (count % 2 == 0) {
        return (<p>x is even</p>)
    } else {
        return (<>
            <my-web-component initial-name={name} unnecessary-attribute="foo"></my-web-component>
            <manual-wc initial-name={name}></manual-wc>
        </>) // this does NOT work, name is not alice
    }
}

function App() {
    const [count, setCount] = useState(0)

    const name = "Alice"

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            {Nested(count, name)}
            <button onClick={handleClick}>Click me</button>
            <hr/>
            <my-web-component initial-name={name} unnecessary-attribute="foo"></my-web-component>
            <manual-wc initial-name={name}></manual-wc>
        </>
    )
}

export default App
