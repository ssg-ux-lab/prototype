import React, { FunctionComponent, memo } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import * as icons from './icons';

export type SvgIconType = keyof typeof icons;
export const svgIcons: SvgIconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함

export interface SvgIconProps extends BoxProps {
	icon: SvgIconType;
}

const SvgIcon = (props: SvgIconProps) => {
	const { icon, ...rest } = props;
	const Svg = (icons[icon] as unknown) as FunctionComponent<any>;

	return (
		<Box {...rest}>
			<Svg style={{ width: '100%', height: '100%', fill: 'currentColor', verticalAlign: 'top' }} />
		</Box>
	);
};

SvgIcon.defaultProps = {
	width: 6,
	color: 'current',
};

export default memo(SvgIcon);
