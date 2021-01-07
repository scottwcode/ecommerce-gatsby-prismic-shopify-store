const styles = {
	wrapper: {
		cursor: 'pointer',
		pointerEvents: 'all',
		'&.active': {
			cursor: 'default',
			'.gatsby-image-wrapper, .content': {
				opacity: 0.4,
			},
			h4: {
				textOverflow: 'initial',
				WebkitLineClamp: 'initial',
			},
		},
		'&.disabled': {
			opacity: 0.6,
			cursor: 'not-allowed',
			pointerEvents: 'none',
		},
		a: {
			textDecoration: 'none',
		},
	},
	imageWrapper: {
		position: 'relative',
		marginBottom: 15,
	},
	cart: {
		position: 'absolute',
		top: '5px',
		right: '5px',
		'&.isActive': {
			'> button': {
				opacity: 0,
				visibility: 'hidden',
				transform: 'scale(0.7)',
			},
			div: {
				opacity: 1,
				visibility: 'visible',
				transform: 'scale(1)',
			},
		},
		'button.active': {
			color: 'white',
			fontSize: 0,
			fontWeight: '700',
			backgroundColor: 'primary',
			':hover': {
				backgroundColor: 'primary',
			},
		},
	},
	cartBtn: {
		opacity: 1,
		visibility: 'visible',
		transform: 'scale(1)',
		marginLeft: 'auto',
		transition: 'all 0.2s ease',
		'&:disabled': {
			opacity: 0.6,
			cursor: 'not-allowed',
		},
	},
	cartCounter: {
		transform: 'scale(0.7)',
		position: 'absolute',
		top: 0,
		right: 0,
		opacity: 0,
		visibility: 'hidden',
		display: 'flex',
		alignItems: 'center',
		minWidth: [106, 140],
		minHeight: [36, 40],
		borderRadius: 6,
		overflow: 'hidden',
		backgroundColor: 'primary',
		boxShadow: '0 6px 12px rgba(0, 0, 0, 0.16)',
		transition: 'all 0.2s ease',
		div: {
			width: 50,
			color: 'white',
			textAlign: 'center',
			fontSize: 0,
			fontWeight: '700',
			paddingLeft: 0,
			paddingRight: 0,
		},
		button: {
			padding: 0,
			minWidth: [32, 45],
			minHeight: [36, 40],
			svg: {
				width: 24,
				height: 24,
				marginLeft: 0,
			},
		},
	},
	meta: {
		alignItems: 'center',
	},
	price: {
		color: 'primary',
		fontWeight: '700',
	},
	prevPrice: {
		color: 'darkgray',
		fontSize: 0,
		marginLeft: 11,
	},
	soldOut: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: 67,
		minHeight: 24,
		borderRadius: 6,
		fontSize: 11,
		fontWeight: '700',
		color: 'badge',
		backgroundColor: 'lightgray',
		marginLeft: 10,
	},
	title: {
		color: 'text',
		fontSize: 0,
		fontWeight: '400',
		lineHeight: 2,
		fontFamily: 'body',
		marginTop: '8px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		WebkitLineClamp: '2',
		display: ' -webkit-box',
		WebkitBoxOrient: 'vertical',
	},
};

export default styles;
