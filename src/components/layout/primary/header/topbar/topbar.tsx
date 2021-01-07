/** @jsx jsx */
import { useRef, useState, useEffect, Fragment } from 'react';
import { Grid, Box, Flex, Heading, Button, jsx } from 'theme-ui';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import Logo from '../../../../logo/logo';
import Container from '../../../../container/container';
import Search from '../../../../search';
import MainMenu from '../navbar/main-menu';
import Footer from '../../footer/footer';
import useOnClickOutside from '../../../../../hooks/useOutsideClick';
import useWindowSize from '../../../../../hooks/useWindowSize';
import styles from './topbar.style';

const Topbar: React.FC<{ fluid?: boolean; homeLink?: string }> = ({
	fluid,
	homeLink,
}) => {
	const windowSize = useWindowSize();
	const [visible, setVisible] = useState(false);
	const [mobileSearch, setMobileSearch] = useState(false);
	const mobileSearchRef = useRef(null!);
	useOnClickOutside(mobileSearchRef, () => setMobileSearch(false));
	useEffect(() => {
		if (windowSize && windowSize > 1080) {
			setVisible(false);
		}
	}, [windowSize]);

	return (
		<Fragment>
			<Box sx={styles.topbar}>
				<Container fluid={fluid}>
					{mobileSearch ? (
						<Box ref={mobileSearchRef}>
							<Search />
						</Box>
					) : (
						<Grid className="grid" sx={styles.grid}>
							<Flex className="logo-area">
								<Button
									variant="text"
									sx={styles.hamburgBtn}
									onClick={() => setVisible(true)}
									ariaLabel="Hamburg menu"
								>
									<IoIosMenu />
								</Button>

								<Logo path={homeLink} />
							</Flex>

							<Box className="topbar-search">
								<Button
									variant="text"
									sx={styles.searchBtn}
									onClick={() => setMobileSearch(true)}
									ariaLabel="Search"
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

								<Search />
							</Box>

							<Box className="topbar-links" sx={styles.rightPart}>
								<a
									href={`https://${process.env.GATSBY_SHOP_NAME}.myshopify.com/account`}
									rel="noopener noreferrer"
									target="_blank"
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
						</Grid>
					)}
				</Container>

				<Drawer
					level={null}
					width="100%"
					open={visible}
					handler={false}
					placement="left"
					onClose={() => setVisible(false)}
				>
					<Flex sx={styles.drawerTitle}>
						<Heading as="h2">Categories</Heading>
						<Button
							variant="text"
							onClick={() => setVisible(false)}
							ariaLabel="Close menu"
						>
							<IoIosClose />
						</Button>
					</Flex>
					<MainMenu onClick={() => setVisible(false)} />
					<Footer />
				</Drawer>
			</Box>
		</Fragment>
	);
};

export default Topbar;
