import React from 'react';
import { RouteComponentProps } from '@reach/router';
import MainTemplate from '../templates/MainTemplate';

interface Props extends RouteComponentProps {}

const TodayPage = (props: Props) => {
	return <MainTemplate />;
};

export default TodayPage;
