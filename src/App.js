import './App.css';
import { NavBar, MarketingFooter } from './ui-components'
import { Map } from './map.js'

function App() {
	return (
		<div className="App">
		<NavBar />
		<Map />
		<MarketingFooter />
		</div>
	);
}

export default App;