// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@unocss/nuxt'],
    css: ['@unocss/reset/tailwind.css'],
    app: {
        head: {
            charset: 'utf-8',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
                },
                { hid: 'title', name: 'title', content: 'MenuChildrenGPT' },
                { hid: 'description', name: 'description', content: 'Create a menu for baby in seconds with chatGPT.' },
                { hid: 'og:title', property: 'og:title', content: 'MenuChildrenGPT.' },
                { hid: 'og:description', property: 'og:title', content: 'Create a menu for baby in seconds with chatGPT.' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'MenuChildrenGPT' },
                { hid: 'twitter:description', property: 'og:site_name', content: 'Create a menu for baby in seconds with chatGPT.' },
            ],
        },
    },
})
