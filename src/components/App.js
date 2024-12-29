import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './markedown.css'

const App = () => {

    const [markdown, setMarkdown] = useState("")
    const [loading, setLoading] = useState(true)

    const handleChange = (e) => {
        setMarkdown(e.target.value)
    }

    return (
        <div className='app'>
            <textarea className="textarea" onChange={handleChange}></textarea>
            <ReactMarkdown className="preview" children={markdown} />
        </div>
    )
}

export default App
