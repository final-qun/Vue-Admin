module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http:0.0.0.0:8000',
                wx: true,
                changeOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/styles/base.color.scss";`
            }
        }
    }
}