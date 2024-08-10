import AppRouter from './routes/AppRouter';
import AppProvider from './services/providers/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
