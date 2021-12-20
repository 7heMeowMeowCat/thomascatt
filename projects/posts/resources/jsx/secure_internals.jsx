// hide all the internal fields once the scripts have taken them locally

try {
    window.data = undefined
    window.csrf_field = undefined
    window.csrf = undefined
    // window.reportError = undefined

    window.formatNum = undefined
    window.prefixCount = undefined
    window.likePost = undefined
    window.request = undefined    
} catch(e) {
    console.error(e)
}