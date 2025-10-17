import Prop from '../components/Prop'
import Prop2 from '../components/Prop2'
const Home = () => {

  return(
  <>
   <h2>🏠 Welcome to Home Page</h2>
   <div>
      App
      <Prop name="Siva" dept="IT" age={20} 
      skills={["Html", "Css", "Js", "Java", "MERN"]} /> 
      <Prop2 year={3} cgpa={8.3} yoc="2027"/>     
    </div>
  </>
)};

export default Home;
