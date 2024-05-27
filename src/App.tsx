import './App.css';
import NavigationPage from './Navigation/NavigationPage';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<NavigationPage />
			</Provider>
		</div>
	);
}

export default App;
