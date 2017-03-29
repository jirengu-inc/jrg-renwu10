requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery:'lib/jquery-3.1.1'
    }
});
requirejs(['app/index']);