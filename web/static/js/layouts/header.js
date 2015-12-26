import React          from 'react';
import { Link }       from 'react-router';
import Actions        from '../actions/sessions';
import ReactGravatar  from 'react-gravatar';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  _renderCurrentUser() {
    const {currentUser} = this.props;

    if (!currentUser) {
      return false;
    }

    const fullName = [currentUser.first_name, currentUser.last_name].join(' ');

    return (
      <div className="current-user">
        <ReactGravatar email={currentUser.email} /> {fullName}
      </div>
    );
  }

  _renderSignOutLink() {
    if (!this.props.currentUser) {
      return false;
    }

    return (
      <a href="#" onClick={this._handleSignOutClick}><i className="fa fa-sign-out"/> Sign out</a>
    );
  }

  _handleSignOutClick = (e) => {
    e.preventDefault();

    this.props.dispatch(Actions.signOut());
  }

  render() {
    return (
      <header className="main-header">
        <nav>
          <ul>
            <li>
              <Link to="/"><i className="fa fa-columns"/> Boards</Link>
            </li>
          </ul>
        </nav>
        <Link to='/'>
          <span className='logo'/>
        </Link>
        <nav className="right">
          {this._renderCurrentUser()}

          <ul>
            <li>
              {this._renderSignOutLink()}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
