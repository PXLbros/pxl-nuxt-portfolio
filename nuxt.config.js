export default {
    mode: 'universal',

    generate: {
        routes: [
            '/projects/project-one',
            '/projects/project-two',
            '/projects/project-three',
            '/projects/project-four',
            '/projects/project-five',
            '/projects/project-six',
            '/projects/project-seven',
            '/projects/project-eight'
        ]
    },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },
    /*
     ** Global CSS
     */
    css: [
        '~/assets/styles/styles.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/style-resources'],

    styleResources: {
        scss: [
            './assets/styles/mixins/_variables.scss',
            './assets/styles/mixins/_typography.scss',
            './assets/styles/mixins/_breakpoints.scss',
            './assets/styles/mixins/_buttons.scss',
            './assets/styles/mixins/_icons.scss',
            './assets/styles/mixins/_forms.scss',
            './assets/styles/mixins/_grid.scss',
            './assets/styles/mixins/_article.scss',
        ]
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
