import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import {AppBar, Paper,Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton} from 'material-ui';
import {List, ListItem, Divider} from 'material-ui';
import {MuiThemeProvider,getMuiTheme} from 'material-ui/styles';
//
const Page1 = () => (
  <div>Page 1</div>
);
const Page2 = () => (
  <div>Page 2</div>
);
const Page3 = () => (
  <div>Page 3</div>
);
const Header = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);
const LeftNav = () => (
  <Paper style={{width: 300, height: 150, marginRight: 30}}>
    <List>
      <Link to={"page-1"}><ListItem primaryText="Page 1" /></Link>
      <Divider />
      <Link to={"page-2"}><ListItem primaryText="Page 2" /></Link>
      <Divider />      
      <Link to={"page-3"}><ListItem primaryText="Page 3" /></Link>
    </List>
  </Paper>
)
const App = ({children}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <Header />
      <br/>
      <div style={{display: "flex", width: 1000, margin: '0 auto', flexWrap: "wrap"}}>
        <LeftNav />
        {children}
      </div>
    </div>
  </MuiThemeProvider>
);
//
const AppRoutes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="page-1" component={Page1} />
      <Route path="page-2" component={Page2} />
      <Route path="page-3" component={Page3} />
    </Route>
  </Router>
)

ReactDOM.render(<AppRoutes />,document.getElementById('app'));