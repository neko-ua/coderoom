"use strict";

module.exports = {
    tplExt: ['.html', '.htm'],
    sass_entry: './templates/default/scss/base.scss',
    paths: {
        static: './templates/default/static',
        templates: './templates/default/tpls'
    },
    static_css: [
        'static/css/base.css'
    ],
    static_js: [
        'static/js/vendor/ace/ace.js',
        'static/js/vendor/ace/mode-html.js',
        'static/js/vendor/jquery-2.2.3.min.js',
        'static/js/base.js'
    ]
};
