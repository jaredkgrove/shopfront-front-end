

export function fetchInstagramPosts(){
    return (dispatch) => {
        fetch('https://www.instagram.com/j.and.bee/')
        .then(resp => {
            if(!resp.ok){throw Error(resp.statusText);}
            return resp.text()
        })
        .then(json => json.split('shortcode":"').map(sub => sub.split('"')[0]).slice(1))
        .then(shortcodes => {
            let url = `https://api.instagram.com/oembed?url=http://instagr.am/p/${shortcodes[0]}/`
            fetch(url)
            .then(resp => resp.json())
            .then(json => {
                dispatch({type: 'ADD_POST', 
                payload: json.thumbnail_url
            })
        })

    })
        .catch(error => console.log(error))
    }

}
