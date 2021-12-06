// hide all the internal fields once the scripts have taken them locally

try {
    window.request = undefined    
} catch(e) {
    console.error(e)
}