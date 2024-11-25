
import './App.css'
import Demo from './components/Demo'
import Card from './components/Card'
import Paragraf from './components/Paragraf'


function App() {

  return (
    <>
      <h1> Title </h1>
      <Demo />
      <Card title='Hello World' >
        <>
          <p> One Upon a time </p>
          <div style={{ backgroundColor:"aquamarine", height:"100px" , width:"100px"}}>
            Iam Content
          </div>
          <Paragraf>
            Iam Paragraf
          </Paragraf>
        </>
      </Card>
    </>
  )
}

export default App
