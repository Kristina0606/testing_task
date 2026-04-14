import { Outlet } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { ErrorBoundary } from './utils/ErrorBoundary';

function App() {
  return (
    <Container>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </Container>
  );
}

export default App;
