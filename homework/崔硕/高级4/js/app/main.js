/**
 * Created by NICK on 2016/10/3.
 */
requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'com/jquery.min'
    }
});

requirejs(['app/index'])