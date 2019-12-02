

export function fetchInstagramPosts(){
    return (dispatch) => {
        fetch('https://www.instagram.com/j.and.bee/')
        .then(resp => {
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.text()
        })
        .then(json => json.split('shortcode":"').map(sub => sub.split('"')[0]).slice(1))
        .then(shortcodes => {
            fetchIndividualPosts(shortcodes, dispatch)//let url = `https://api.instagram.com/oembed?url=http://instagr.am/p/${shortcodes[0]}/&omitscript=true`


    })
        .catch(error => console.log(error))
    }

}

const fetchIndividualPosts = (shortcodes, dispatch) => {
    shortcodes.forEach((code) => {
        let url = `https://api.instagram.com/oembed?url=http://instagr.am/p/${code}/&omitscript=true`
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: 'ADD_POST', 
            payload: json.html
        })
    })

})
}