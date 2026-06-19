import { useState } from 'react'
import Nav from './components/Nav'
import LoginBar from './components/LoginBar'
import PageRouter from './components/PageRouter'
import './HomeStyle.css'

function App() {

    return (
        <div>
            <PageRouter/>

            <footer>
                <p>For all the characters</p>
            </footer>
        </div>
    )
}

export default App
