import { Typography } from 'antd'
import './App.css'

function App() {
  const { Title, Paragraph } = Typography
  return (
    <div className="App">
      <div className="App-header">
        <Title>WebRTC</Title>
        <Paragraph>This is a simple demo app</Paragraph>
        <div className="wrapper-row">

        </div>
      </div>
    </div>
  )
}

export default App
