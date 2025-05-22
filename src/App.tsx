import { Route, Routes } from 'react-router-dom';
import MainPage from './main/App';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
};