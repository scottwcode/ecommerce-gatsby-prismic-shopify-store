/** @jsx jsx */
import { useRef, useState } from 'react';
import { Button, Box, jsx } from 'theme-ui';
import Logo from '../../../../logo/logo';
import Container from '../../../../container/container';
import Search from '../../../../search';
import useOnClickOutside from '../../../../../hooks/useOutsideClick';
import MainMenu from './main-menu';
import styles from './navbar.style';

const Navbar: React.FC<{
	fluid?: boolean;
	homeLink?: string;
	pathPrefix?: string;
}> = ({ fluid, homeLink, pathPrefix }) => {
	const [visible, setVisible] = useState(false);
	const searchRef = useRef(null!);
	useOnClickOutside(searchRef, () => setVisible(false));

	return (
		<Box as="nav" sx={styles.navbar}>
			<Container fluid={fluid} className={visible ? 'activeSearch' : ''}>
				<Logo path={homeLink} />
				<MainMenu pathPrefix={pathPrefix} />
				<Box className="rightPart" sx={styles.rightPart}>
					{visible ? (
						<Box sx={styles.search} ref={searchRef}>
							<Search />
						</Box>
					) : (
						<Button
							title="Search"
							variant="text"
							sx={{ svg: { width: 23 } }}
							onClick={() => setVisible(true)}
						>
							<svg width="16" height="16" viewBox="0 0 16 16">
								<path
									d="M16.122,12.452a6.772,6.772,0,1,0-1.195,1.2l.036.038,3.592,3.592a.847.847,0,0,0,1.2-1.2L16.16,12.488ZM14.364,4.706a5.079,5.079,0,1,1-7.183,0A5.079,5.079,0,0,1,14.364,4.706Z"
									transform="translate(-4 -1.525)"
									fill="#292929"
									fillRule="evenodd"
								/>
							</svg>
						</Button>
					)}
					<a
						href="https://picksystore.myshopify.com/account"
						target="_blank"
						rel="noopener noreferrer"
						title="My account"
					>
						<svg width="10.667" height="16" viewBox="0 0 10.667 16">
							<g transform="translate(-6 -3)">
								<path
									d="M15.111,6.556A3.556,3.556,0,1,1,11.556,3,3.556,3.556,0,0,1,15.111,6.556Zm-1.778,0a1.778,1.778,0,1,1-1.778-1.778A1.778,1.778,0,0,1,13.333,6.556Z"
									transform="translate(-0.222)"
									fill="#292929"
									fillRule="evenodd"
								/>
								<path
									d="M14.889,14.667A.889.889,0,0,0,14,13.778H8.667a.889.889,0,0,0-.889.889V20H6V14.667A2.667,2.667,0,0,1,8.667,12H14a2.667,2.667,0,0,1,2.667,2.667V20H14.889Z"
									transform="translate(0 -1)"
									fill="#292929"
								/>
							</g>
						</svg>
					</a>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
