import { Typography } from 'antd'
import './App.css'
import RenderHelper from './components/renderHelper'
import RenderTextarea from './components/renderTextarea'

function App() {
  const { Title, Paragraph } = Typography
  return (
    <div className="App">
      <div className="App-header">
        <Title>WebRTC</Title>
        <Paragraph>This is a simple demo app</Paragraph>
        <div className="wrapper-row justify-evenly w-[]">
          <RenderHelper />
          <RenderTextarea />
        </div>
      </div>
    </div>
  )
}

export default App
