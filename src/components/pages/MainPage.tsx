import React from 'react';
import { RouteComponentProps } from '@reach/router';
import MainTemplate from '../templates/MainTemplate';

interface Props extends RouteComponentProps {}

const MainPage = (props: Props) => {
	return <MainTemplate />;
};

export default MainPage;
