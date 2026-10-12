import PageRouter from './components/PageRouter'
import './HomeStyle.css'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

    return (
        <div>
            <Router>
                <PageRouter/>
            </Router>

            <footer>
                <p>For all the characters</p>
            </footer>
        </div>
    )
}

export default App
