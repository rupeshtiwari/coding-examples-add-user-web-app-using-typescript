
var appContext = require.context('./src/app', true, /\.spec.ts/);
appContext.keys().forEach(appContext);

