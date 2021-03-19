import { Navbar, Nav, Icon } from 'rsuite';
import logo from '../images/moomall-logo.png';

const NavBarApp = () => {
	return (
		<Navbar appearance='subtle'>
			<Navbar.Header className='flex items-center justify-center'>
        <img src={logo} width='50' height='50' />
			</Navbar.Header>
        <Navbar.Body>
				<Nav pullRight>
					<Nav.Item icon={<Icon icon='shopping-cart' size="2x" />}>Cart ( 1 )</Nav.Item>
					<Nav.Item icon={<Icon icon='bars' size="2x" />} />
				</Nav>
        </Navbar.Body>
		</Navbar>
	);
};

export default NavBarApp;
