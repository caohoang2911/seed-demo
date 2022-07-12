import { ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css';
import './App.css';
import Routers from './routes/Routers';

ConfigProvider.config({
  theme: {
    primaryColor: '#3180F6',
  },
});
function App() {
  return (
    <>
      <div className="App">
        <ConfigProvider
          form={{ requiredMark: false, colon: false }}
          input={{ autoComplete: 'off' }}
        >
          <Routers />
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;
