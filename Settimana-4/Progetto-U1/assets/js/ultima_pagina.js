const arrayStars = [...document.querySelectorAll('ion-icon')]

function rating(stars) {
    const starsLenght = stars.length;
    let i;

    stars.map((star)=> {
        star.onclick = () => {
            i = stars.indexOf(star);

            if(star.className.includes('starInactive')) {               
                for (i; i>=0; --i) {
                    stars[i].className = 'starActive';
                }
            } else {
                for (i;i < starsLenght; ++i) stars[i].className = 'starInactive';
            }
        }
    }) 
}
rating(arrayStars);

let j;

arrayStars.forEach(star => {
    star.addEventListener('mouseover', function () {
        console.log('over');
        j = arrayStars.indexOf(star);

        if(star.className.includes('starInactive')) {
        for(j; j>=0; --j)
            arrayStars[j].classList.toggle('overStarActive');
        }
    })
})

arrayStars.forEach(star => {
    star.addEventListener('mouseout', function () {
        console.log('out');

        if(star.className.includes('overStarActive')) {
        for(j=0; j<arrayStars.length; ++j)
            arrayStars[j].classList.remove('overStarActive');
        }
    })
})

