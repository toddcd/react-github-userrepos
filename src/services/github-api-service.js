import config from "../config"

const GitHubApiService = {
    getHotRepositories() {
        return fetch(`${config.GITHUB_API_ENDPOINT}/search/repositories?q=created:>=2020-01-13&sort=stars&order=desc`)
            .then(res => {
                    if (!res.ok) {
                        throw Error(res.statusText);
                    
                    } else
                        return res.json()
                }
            ).then(json => {

               let items = json.items.map(item => {
                    return {id : item.id,
                            name: item.name,
                            avatar_url: item.owner.avatar_url,
                            url: item.html_url,
                            description: item.description,
                            created_at: item.created_at,
                            stars: item.stargazers_count
                        }
                })

                return items.sort(compareStars);
            })
    },
    getProlificUsers() {
        return fetch(`${config.GITHUB_API_ENDPOINT}/search/users/`)
            .then(res => {
                    if (!res.ok) {
                        throw Error(res.statusText);
                    } else if (res.status === 204) {
                        const nodata = {info: 'No Portfolios for current user'}
                        return nodata
                    } else
                        return res.json()
                }
            )
    },
}

function compareStars(a,b){
    if(a.stars < b.stars){
        return -1
    }
    if(a.stars > b.stars){
        return -1
    }
    return 0
}

export default GitHubApiService