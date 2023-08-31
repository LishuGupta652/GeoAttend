import { useContext } from 'react'
import './App.css'
import { AppContext } from './contextApi/AppContext'
import { APP_STATE_ACTION } from './types/types';

function App() {
  const { state, dispatch } = useContext(AppContext);

  const toggleTheme = () => {
    dispatch({
      type: APP_STATE_ACTION.TOGGLE_THEME,
    })
  }
  return (
    <>
      <div className="card"
      >
        {state.theme}
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </>
  )
}

export default App
