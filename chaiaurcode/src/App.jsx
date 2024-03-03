import Card from './components/Card'

function App() {
   let myObj = {
    username:"anshal",
    age: 20
   }   

   let myArr = [12,3,3,4]

  return (
    <>
        <Card username = "chaiaurcode" btnText = "click me" />
        <Card username={"anshal"} btnText = "visit me"/>
    </>
  )
}

export default App
