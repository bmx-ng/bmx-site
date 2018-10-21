/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
    title: 'BlitzMax', // Title for your website.
    tagline: 'Code. Build. Play.',
    url: 'https://blitzmax.org', // Your website URL
    baseUrl: '/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'blitzmax',
    organizationName: 'bmx-ng',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {page: 'downloads', label: 'Downloads'},
        {doc: 'setup/get_started', label: 'Docs'},
        {doc: 'api/intro', label: 'API'},
        {doc: 'community/resources', label: 'Resources'},
        {doc: 'site/about', label: 'About'},
    ],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: 'img/rocket.png',
    footerIcon: 'img/rocket.png',
    favicon: 'img/rocket.png',

    /* Colors for website */
    colors: {
        primaryColor: '#000000',
        secondaryColor: '#4f62be',
    },

    /* Custom fonts for website */
    /*
    fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },
    */
    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} Bruce A Henderson`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'hybrid',
        hljs: function (hljs) {
            hljs.registerLanguage('blitzmax', function (hljs) {
                var NUMBER = {
                    className: 'number', relevance: 0,
                    variants: [
                        {
                            begin: '[$][a-fA-F0-9]+'
                        },
                        {
                            begin: '[%][10]+'
                        },
                        {
                            begin: '\\b[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?'
                        },
                        hljs.NUMBER_MODE
                    ]
                };

                return {
                    case_insensitive: true,
                    keywords: {
                        keyword: 'strict superstrict public private protected short int float double long string object ptr var varptr ' +
                            'mod continue exit include import module extern framework new self super eachin true false ' +
                            'null not extends abstract select case default const local global field method function type ' +
                            'and or shl shr sar end if then else elseif endif while wend repeat until forever for to step ' +
                            'next return alias rem endrem throw assert try catch finally nodebug incbin endselect endmethod ' +
                            'endfunction endtype endextern endtry endwhile pi release defdata readdata restoredata interface ' +
                            'endinterface implements size_t uint ulong struct endstruct operator where readonly export',

                        built_in: 'DebugLog DebugStop',

                        literal: 'true false null'
                    },
                    illegal: /\/\*/,
                    contains: [
                        hljs.COMMENT('^\\s*rem\\b', '^\\s*(endrem|end rem)\\b'),
                        hljs.COMMENT(
                            "'",
                            '$',
                            {
                                relevance: 0
                            }
                        ),
                        {
                            className: 'function',
                            beginKeywords: 'function method', end: '[(=:]|$',
                            illegal: /\n/,
                            contains: [
                                hljs.UNDERSCORE_TITLE_MODE
                            ]
                        },
                        {
                            className: 'type',
                            beginKeywords: 'type interface struct', end: '$',
                            contains: [
                                {
                                    beginKeywords: 'extends implements'
                                },
                                hljs.UNDERSCORE_TITLE_MODE
                            ]
                        },
                        {
                            className: 'new',
                            beginKeywords: 'new', end: '$',
                            contains: [
                                hljs.UNDERSCORE_TITLE_MODE
                            ]
                        },
                        {
                            className: 'built_in',
                            begin: '\\b(self|super)\\b'
                        },
                        {
                            className: 'meta',
                            begin: '^\\s*(strict|superstrict)\\b'
                        },
                        {
                            className: 'meta',
                            begin: '\\s*\\?', end: '$',
                            keywords: {'meta-keyword': 'not and or'}
                        },
                        hljs.QUOTE_STRING_MODE,
                        NUMBER
                    ]
                }
            });

        }
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: [
        'https://buttons.github.io/buttons.js',
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        '/js/code-blocks-buttons.js',
        '/js/scrollspy.js'
    ],

    separateCss: ['static/css/code-blocks-buttons.css'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    scrollToTop: true,
    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/bmx-ng/bmx-ng',

    editUrl: 'https://github.com/bmx-ng/bmx-site/edit/master/docs/',

    useEnglishUrl: true,
};

module.exports = siteConfig;
