import React from 'react';
import logo from './logo.svg';
import './App.css';

import api from './api';

export default class App extends React.Component<any, any> {

  componentDidMount(): void {
    console.log('App mounted~~~~~');
    this.apiTest();
    console.log('REACT_APP_ENV, ', process.env.REACT_APP_ENV);
  }

  private async apiTest(): Promise<any> {
    const res: any = await api['base/test']({});
    console.log(res);
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
