import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.PureComponent {
  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;

    return (
      <div class="wrap header--flex">
        <h1 class="header--logo"><Link to='/'>Courses</Link></h1>
        <nav>
          {authUser
            ? <React.Fragment>
            <span>Welcome, {authUser.user[0].firstName}!</span>
            {console.log(authUser.user[0].firstName)}
            <Link to="/signout"> Sign Out</Link>
            </React.Fragment>
            :
            <React.Fragment>
            <Link className="header--signedin" to="/signup">Sign Up</Link>
            <Link className="header--signedout" to="/signin">Sign In</Link>
            </React.Fragment>
          }
        </nav>
      </div>
    );
  }
};
