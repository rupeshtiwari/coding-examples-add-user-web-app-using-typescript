var testsContext = require.context('./src/app', true, /\.ts/);
testsContext.keys().forEach(testsContext);
