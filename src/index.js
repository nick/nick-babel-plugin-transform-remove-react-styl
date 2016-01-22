export default function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        let callee = path.get('callee');
        let args = path.get('arguments');
        if (
            callee.isIdentifier({ name: 'require' }) &&
            args.length > 0 &&
            args[0].isStringLiteral({ value: 'react-styl' })
        ) {
            path.parentPath.remove();
        }
      }
    }
  };
}
