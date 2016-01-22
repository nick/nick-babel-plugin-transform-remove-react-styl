export default function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        let callee = path.get('callee');
        if (callee.isCallExpression()) {
          	let innerCallee = callee.get('callee');
            let innerArgs = callee.get('arguments');
	        if (innerCallee && innerCallee.isIdentifier({ name: 'require' }) &&
        	    innerArgs.length > 0 && innerArgs[0].isStringLiteral({ value: 'react-styl' })){
    	        path.parentPath.remove();
	        }
        }
      }
    }
  };
}
