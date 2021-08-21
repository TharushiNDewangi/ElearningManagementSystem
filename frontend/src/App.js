import React, { useEffect } from 'react';
import { Route, Switch} from  'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn,getAllCategory} from './actions'
import Orders from './containers/Orders';
import ClassFees from './components/ClassFess/cfees';
import AddClassFees from './components/ClassFess/addfees';
import { getInitialData } from './actions/initialData.action';
import AddStudentToInstitute from './components/Student/AddStudentToInstitute';
import StudentinInstitute from './components/Student/StudentsInInstitute';
import AddStudenttoclass from './components/Student/AddStudentToClass';
import StudentinClass from './components/Student/StudentInClass';


function App() {
//part12
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
     dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
   
},[]);

  return (
    <div className="App">
     
       <Switch>
         <PrivateRoute path = "/" exact component ={ Home }/>
         <PrivateRoute path = "/orders" exact component = {Orders}/>
         <PrivateRoute path = "/classfees" exact component = {ClassFees}/>
         <PrivateRoute path = "/addclassfees" exact component = {AddClassFees}/>
         <PrivateRoute path = "/addstudenttoInstitute" exact component = {AddStudentToInstitute}/>
         <PrivateRoute path = "/viewstudentininstitute" exact component ={StudentinInstitute}/>
         <PrivateRoute path = "/addstudenttoClass" exact component = {AddStudenttoclass}/>
         <PrivateRoute path = "/viewstudentinClass" exact component = {StudentinClass}/>
         <Route path = "/signin" component ={ Signin }/>
         <Route path = "/signup" component ={ Signup }/>
       </Switch>
     
      
    </div>
  );
}

export default App;
