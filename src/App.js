import bg from './assets/bg/11@3x.png'
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="outer-wrapper flex items-center justify-center bg-cover bg-center h-screen min-w-[1080px]" style={{backgroundImage: `url(${bg})`}}>
      <WeatherCard />
    </div>
  );
}

export default App;
