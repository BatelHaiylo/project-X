const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f3184d9a1msh3ee4395a2c337d8p15e8f3jsnca8f5b605b6d',
		'X-RapidAPI-Host': 'webtoon.p.rapidapi.com'
	}
};

fetch('https://webtoon.p.rapidapi.com/canvas/search?query=boy%20friend&startIndex=0&pageSize=20&language=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

function getData(url,obj){
    try{
        return await fetch(url,obj)
        .then(res => res.json()).then(res => console.log(res))
    }
    catch(err){
        alert(res)
    }
}