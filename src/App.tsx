import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PracticeUseState from "./hooks/PracticeUseState";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Hooks</h1>
              <ol>
                <li>
                  <Link to="/usestate">useState</Link>
                </li>
                <li>useEffect</li>
                <li>useCallback</li>
                <li>useMemo</li>
                <li>useActionState</li>
                <li>useContext</li>
                <li>useDebugValue</li>
                <li>useDeferredValue</li>
                <li>useId</li>
                <li>useImperativeHandle</li>
                <li>useInsertionEffect</li>
                <li>useLayoutEffect</li>
                <li>useReducer</li>
                <li>useRef</li>
                <li>useSyncExternalStore</li>
                <li>useTransition</li>
              </ol>
            </div>
          }
        />
        <Route path="/usestate" element={<PracticeUseState />} />
      </Routes>
    </Router>
  );
}

export default App;
