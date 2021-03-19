import React from 'react';
import { RouteComponentProps } from '@reach/router';
import ApplicationTemplate from '../templates/ApplicationTemplate';

interface Props extends RouteComponentProps {}

const ApplicationPage = (props: Props) => {
	return <ApplicationTemplate />;
};

export default ApplicationPage;
