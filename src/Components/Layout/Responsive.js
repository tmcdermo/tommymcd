/** @format */

import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992, maxWidth: 1439 });
	return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	return isTablet ? children : null;
};
const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};
const Default = ({ children }) => {
	const isNotMobile = useMediaQuery({ minWidth: 768 });
	return isNotMobile ? children : null;
};

const AnyDesktop = ({ children }) => {
	const isNotMobile = useMediaQuery({ minWidth: 992 });
	return isNotMobile ? children : null;
};

const Desktop1440 = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 1440 });
	return isDesktop ? children : null;
};

const NotDesktop = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 991 });
	return isMobile ? children : null;
};

export {
	Desktop,
	Tablet,
	Mobile,
	Default,
	Desktop1440,
	AnyDesktop,
	NotDesktop,
};
