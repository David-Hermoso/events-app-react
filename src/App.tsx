import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AllEvents from './components/AllEvents/AllEvents';
import Confirmation from './components/ConfirmationModal/Confirmation';
import MyEvents from './components/MyEvents/MyEvents';
import NavBar from './components/NavBar/NavBar';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (<div>
      <NavBar/>
      <Confirmation/>
      <div className={'content__container'}>
        <Switch>
          <Route exact path="/allEvents" component={AllEvents}/>
          <Route exact path="/myEvents" component={MyEvents}/>
          <Redirect from="/" to="/allEvents"/>
        </Switch>
      </div>
    </div>)
  }
}

export default App;
