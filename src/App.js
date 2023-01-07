
import './App.css';
import SideBar from './components/SideBar/SideBar';
import MainContainer from './components/MainView/MainContainer';



function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default App;
