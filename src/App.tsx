import HomePage from './pages/home';
import AppProvider from './services/providers/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
}
