
import './App.css';
import RestaurantDiv from './components/Restaurant/RestaurantDiv';
import RestaurantList from './components/Restaurant/RestaurantList';
// import Todo from './components/Todo/Todo';
function App() {
  return (
    <div className="App">
  {/* <Todo> </Todo> */}
  <RestaurantList></RestaurantList>
  <RestaurantDiv></RestaurantDiv>
    </div>
  );
}

export default App;
