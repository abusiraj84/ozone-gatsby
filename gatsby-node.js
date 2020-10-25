const path = require(`path`)

exports.createPages = ({boundActionCreators}) => {
    const { createPage } = boundActionCreators
createPage({path: "/post", matchPath: "/post/:id", component: '/Users/husamnasrallah/Desktop/laravel/ozone-gatsby/src/components/PostPage.js'})
}