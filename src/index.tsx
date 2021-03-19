import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

/* ----------------------여기부터-------------------------- */
//GTM(구글 태그 매니저의 약자)을 임포트했습니다.
//태그 매니저란 : 구글 애널리틱스와 연동하여 '클릭량', '전환율', '스크롤 깊이' 등등... 일종의 리액팅 코드를 만드는 곳!
import TagManager from 'react-gtm-module';

//구글 태그 매니저 계정과 연동
const tagManagerArgs = {
	gtmId: 'GTM-56LC65P',
};
TagManager.initialize(tagManagerArgs);
/* -----------------------여기까지가 끝! 초간단------------------------- */

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
