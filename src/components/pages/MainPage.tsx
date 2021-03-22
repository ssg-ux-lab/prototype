import React from 'react';
import { RouteComponentProps } from '@reach/router';
import InventoryTemplate from '../templates/InventoryTemplate';

interface Props extends RouteComponentProps {}

const MainPage = (props: Props) => {
	return <InventoryTemplate />;
};

export default MainPage;
