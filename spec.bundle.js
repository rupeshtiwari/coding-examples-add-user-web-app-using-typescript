
var appContext = require.context('./src/app', true, /\.ts/);
appContext.keys().forEach(appContext);

