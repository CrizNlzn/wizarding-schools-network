import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to = "/" >Home</Link>
				</li>

				<li>
					<Link to = "/Wizarding-Schools" >WizSchools</Link>
				</li>

				<li>
					<Link to = "WizStudents" >WizStudents </Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;