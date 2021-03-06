import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import Header from './components/Header'
import Error from './components/Error'
import ThemeProvider from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="survey/:questionNumber" element={<Survey />} />
                    <Route path="freelances" element={<Freelances />} />
                    <Route path="results" element={<Results />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
