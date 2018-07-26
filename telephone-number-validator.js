function telephoneCheck(str) {
	var valid = false;
	var match = str.match(/(^1?[ (]{0,2}[0-9]{3}[- )]{0,2}[0-9]{3}[- ][0-9]{4}|[0-9]{10})/);
	if (match !== null && match[0] == str) {
		valid = true;
		//check for both parens   
		if (match[0].includes('(') || match[0].includes(')')) {
			valid = false;     
			if (match[0].includes('(') && match[0].includes(')')) {
				valid = true;
			}
		}  
	}
	return valid;
}

telephoneCheck("555-555-5555");