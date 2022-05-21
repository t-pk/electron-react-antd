import { Navigate } from 'react-router-dom';
import { Rec } from './App';
import { TOKEN_KEY } from './constants';

export default function Page1() {
  return (
    localStorage.getItem(TOKEN_KEY) ?
    <div>
      <p>Page1</p>
      <Rec/>
    </div> :
    <Navigate to="/login" replace />
  );
};
