import React, { useState, useRef, useCallback } from 'react';
import { Button, Input } from '@chakra-ui/react';

function InputFile() {
	const [value, setValue] = useState<string>('');
	const fileRef = useRef<HTMLInputElement>(null);

	const onClick = useCallback((e) => {
		if (fileRef.current !== null) {
			fileRef.current.click();
		}
	}, []);

	const onChange = useCallback((e) => {
		const files = e.target.files;
		setValue(files[0]?.name);
	}, []);
	return (
		<label>
			<input ref={fileRef} type="file" onChange={onChange} accept=".gif, .jpg, .png" hidden />
			<Input width="196px" height="28px" mr={2} fontSize="sm" value={value} isDisabled />
			<Button variant="outline" size="sm" colorScheme="gray" onClick={onClick}>
				파일검색
			</Button>
		</label>
	);
}

export default InputFile;
