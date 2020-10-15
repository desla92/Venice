document.addEventListener('DOMContentLoaded', evt => {
     //Hey animation
     const animation = () => {
        bodymovin.loadAnimation({
        container: document.getElementById('anim'),
        rederer: 'svg',
        loop: false,
        autoplay: true,
        path: 'data.json'
      })
    }
    const delayedTitle = () => {
        document.querySelector('.firstBannerHomeTitle').classList.add('fadeInLeft');
        document.querySelector('.firstBannerHomeTitle').classList.add('opacity1');
        document.querySelector('.firstBannerHomeIconsDiv').classList.add('opacity1');
    }
    setTimeout(animation, 100);
    setTimeout(delayedTitle, 1000);
})