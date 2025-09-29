import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'
import './styles/global.css'

export default function App() {
	return (
		<Router>
			<HomePage />
		</Router>
	)
}

