
let lastAnimationShow = 1;

export const showAnimations = () => {

    const mainContainer = 
        document.querySelector('.mainContainer-app');

    mainContainer.addEventListener('scroll', () => {

        //SHOW ANIMATIONS FROM MY SKILLS CONTAINER
        if(
            mainContainer.scrollTop >= window.innerHeight &&
            lastAnimationShow === 1
        ){
            const containerMySkills = 
                document.getElementById("mySkills-container");

            containerMySkills.style.display = 'flex';

            setTimeout(() => {
                document.querySelectorAll('.skill-container')
                    .forEach(el => {
                        el.classList.add('expandEase');
                    });
            }, 2500);

            lastAnimationShow = 2;

            return;

        //SHOW ANIMATIONS FROM MY EXAMPLE CONTAINER
        } else if(
            mainContainer.scrollTop >= window.innerHeight * 2 &&
            lastAnimationShow === 2
        ){
            document.querySelectorAll('.example-container')
                .forEach(el => {
                    el.style.display = 'initial';
                });

            document.querySelectorAll('.arrows-container')
                .forEach(el => {
                    el.style.display = 'flex';
                });
            
            lastAnimationShow = 3;

            return;

        //SHOW ANIMATIONS FROM CONTACT ME CONTAINER
        } else if(
            mainContainer.scrollTop >= window.innerHeight * 3 &&
            lastAnimationShow === 3
        ){

            document.querySelector('.contactMe-container')
                .style.display = 'flex';
                
        }

    });
}
