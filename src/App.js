import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {routes} from './routes'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'  
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { Color } from 'antd/es/color-picker'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""}
  }

  callAPI(){
    fetch("http://localhost:3000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI()
  }
  render(){
    return (
      <div className='App'>
        
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const Layout =  route.isShowHeader ? DefaultComponent : Fragment
              return (
                <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
                }/>
              )           
            })}
          </Routes>
        </Router>
        <p>{this.state.apiResponse}</p>
      </div>
    ); 
  }
}

export default App