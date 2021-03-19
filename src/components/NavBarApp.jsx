import { Navbar, Nav, Icon } from 'rsuite';
import logo from '../images/moomall-logo.png';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const NavBarApp = ({ history }) => {
	const { cart } = useSelector(state => state.app);
	return (
		<div className='navbar-header'>
		<Navbar appearance='subtle'>
			{/* <Navbar.Header className='flex items-center justify-center'>
      	<img src={logo} width='50' height='50' alt='logo' />
			</Navbar.Header> */}
        <Navbar.Body>
				<Nav><img src={logo} width='50' height='50' alt='logo' /></<Nav>
				<Nav pullRight>
					<Nav.Item icon={<Icon icon='shopping-cart' size="2x" />} onClick={() => history.push('/cart')}>Cart ( {cart} )</Nav.Item>
					<Nav.Item icon={<Icon icon='bars' size="2x" />} />
				</Nav>
        </Navbar.Body>
		</Navbar>
		</div>
	);
};

export default withRouter(NavBarApp);
