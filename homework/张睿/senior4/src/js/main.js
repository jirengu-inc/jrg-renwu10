requirejs.config({
  baseUrl: './src/js',
  paths: {
    'jquery': 'lib/jquery.min'
  }
});

requirejs(['app/index']);
