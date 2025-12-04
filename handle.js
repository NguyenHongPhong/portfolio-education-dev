function handleSlide() {
    const dots = document.getElementsByName('dot');
    const templateString1 = document.querySelector('.template-string-1');
    const templateString2 = document.querySelector('.template-string-2');

    const templateObjects = [
        {
            tmp1: ['<img class="w-16 h-16 rounded-full max-sm:self-center" src="./images/peterMoon.png alt="Peter Moor student profile">',
                '<h3 class="text-white mt-4 text-2xl font-bold leading-9 font-sen max-sm:text-base">Peter Moor</h3>',
                '<div class="text-[#BFBCB2] font-poppins text-sm font-normal leading-6 mt-3">Student of Web Design</div>'
            ],
            tmp2: [`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
                        <path
                            d="M12.9168 1.23505V6.26199C12.9168 6.94407 12.3663 7.49652 11.6875 7.49652C9.26544 7.49652 7.94779 9.99114 7.76491 14.9155H11.6875C12.3662 14.9155 12.9168 15.4688 12.9168 16.1501V26.7647C12.9168 27.4465 12.3663 27.999 11.6875 27.999H1.22938C0.550795 27.999 1.90735e-06 27.4459 1.90735e-06 26.7647V16.15C1.90735e-06 13.7896 0.237282 11.6235 0.703081 9.71055C1.1816 7.74949 1.91613 6.035 2.8858 4.61422C3.88306 3.15417 5.13161 2.00845 6.59457 1.21054C8.06863 0.407543 9.78211 0 11.688 0C12.3662 0.000516891 12.9168 0.553486 12.9168 1.23505ZM28.771 7.49696C29.4496 7.49696 30 6.94407 30 6.26294V1.23497C30 0.553488 29.4496 0.000951767 28.771 0.000951767C26.866 0.000951767 25.1517 0.408579 23.6785 1.21149C22.2148 2.00931 20.9664 3.15408 19.9693 4.61517C18.999 6.03595 18.2645 7.75052 17.786 9.71254C17.32 11.6255 17.0832 13.7917 17.0832 16.151V26.7657C17.0832 27.4476 17.6341 28 18.3125 28H28.771C29.4496 28 30 27.447 30 26.7657V16.151C30 15.4693 29.4496 14.9165 28.771 14.9165H24.9035C25.0841 9.99165 26.3828 7.49696 28.771 7.49696Z"
                            fill="#634700" />
                    </svg>`, ` <p class="text-white font-poppins text-2xl italic font-normal leading-10 ml-8 md:max-lg:text-xl w-[80%] h-full max-sm:text-[12px] max-sm:leading-8 text-start">
                        Not only does my
                        resume
                        look impressive—filled with the names and logos of
                        world-class
                        institutions—but these
                        certificates also bring me closer to my career goals by validating the skills I've learned."
                    </p>`]
        }, {
            tmp1: [`<img class="w-16 h-16 rounded-full max-sm:self-center" src="./images/learner1.png"
                            alt="Peter Moor student profile">`, `<h3 class="text-white mt-4 text-2xl font-bold leading-9 font-sen max-sm:text-base">Peter Nguyen</h3>`,
                `<div class="text-[#BFBCB2] font-poppins text-sm font-normal leading-6 mt-3">Developer</div>`
            ]
            , tmp2: [` <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
                            <path
                                d="M12.9168 1.23505V6.26199C12.9168 6.94407 12.3663 7.49652 11.6875 7.49652C9.26544 7.49652 7.94779 9.99114 7.76491 14.9155H11.6875C12.3662 14.9155 12.9168 15.4688 12.9168 16.1501V26.7647C12.9168 27.4465 12.3663 27.999 11.6875 27.999H1.22938C0.550795 27.999 1.90735e-06 27.4459 1.90735e-06 26.7647V16.15C1.90735e-06 13.7896 0.237282 11.6235 0.703081 9.71055C1.1816 7.74949 1.91613 6.035 2.8858 4.61422C3.88306 3.15417 5.13161 2.00845 6.59457 1.21054C8.06863 0.407543 9.78211 0 11.688 0C12.3662 0.000516891 12.9168 0.553486 12.9168 1.23505ZM28.771 7.49696C29.4496 7.49696 30 6.94407 30 6.26294V1.23497C30 0.553488 29.4496 0.000951767 28.771 0.000951767C26.866 0.000951767 25.1517 0.408579 23.6785 1.21149C22.2148 2.00931 20.9664 3.15408 19.9693 4.61517C18.999 6.03595 18.2645 7.75052 17.786 9.71254C17.32 11.6255 17.0832 13.7917 17.0832 16.151V26.7657C17.0832 27.4476 17.6341 28 18.3125 28H28.771C29.4496 28 30 27.447 30 26.7657V16.151C30 15.4693 29.4496 14.9165 28.771 14.9165H24.9035C25.0841 9.99165 26.3828 7.49696 28.771 7.49696Z"
                                fill="#634700" />
                        </svg>`, ` <p class="class="text-white font-poppins text-2xl italic font-normal leading-10 ml-8 md:max-lg:text-xl w-[80%] h-full max-sm:text-[12px] max-sm:leading-8 text-start">
                            Welcome to my courses, you will approach the best reality project that you've never been learn in University
                        </p>`]
        },
        {
            tmp1: [`<img class="w-16 h-16 rounded-full max-sm:self-center" src="./images/learner2.png"
                            alt="Peter Moor student profile">`, `<h3 class="text-white mt-4 text-2xl font-bold leading-9 font-sen max-sm:text-base">Peter Parker</h3>`,
                `<div class="text-[#BFBCB2] font-poppins text-sm font-normal leading-6 mt-3">Code in 1920s</div>`
            ]
            , tmp2: [` <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
                            <path
                                d="M12.9168 1.23505V6.26199C12.9168 6.94407 12.3663 7.49652 11.6875 7.49652C9.26544 7.49652 7.94779 9.99114 7.76491 14.9155H11.6875C12.3662 14.9155 12.9168 15.4688 12.9168 16.1501V26.7647C12.9168 27.4465 12.3663 27.999 11.6875 27.999H1.22938C0.550795 27.999 1.90735e-06 27.4459 1.90735e-06 26.7647V16.15C1.90735e-06 13.7896 0.237282 11.6235 0.703081 9.71055C1.1816 7.74949 1.91613 6.035 2.8858 4.61422C3.88306 3.15417 5.13161 2.00845 6.59457 1.21054C8.06863 0.407543 9.78211 0 11.688 0C12.3662 0.000516891 12.9168 0.553486 12.9168 1.23505ZM28.771 7.49696C29.4496 7.49696 30 6.94407 30 6.26294V1.23497C30 0.553488 29.4496 0.000951767 28.771 0.000951767C26.866 0.000951767 25.1517 0.408579 23.6785 1.21149C22.2148 2.00931 20.9664 3.15408 19.9693 4.61517C18.999 6.03595 18.2645 7.75052 17.786 9.71254C17.32 11.6255 17.0832 13.7917 17.0832 16.151V26.7657C17.0832 27.4476 17.6341 28 18.3125 28H28.771C29.4496 28 30 27.447 30 26.7657V16.151C30 15.4693 29.4496 14.9165 28.771 14.9165H24.9035C25.0841 9.99165 26.3828 7.49696 28.771 7.49696Z"
                                fill="#634700" />
                        </svg>`, ` <p class="class="text-white font-poppins text-2xl italic font-normal leading-10 ml-8 md:max-lg:text-xl w-[80%] h-full max-sm:text-[12px] max-sm:leading-8 text-start">
                             You would be train special knowledge in here. We'll bring the things that other places doesn't
                        </p>`]
        },
    ]

    dots.forEach((dot, index) => {
        if (dot.checked) {
            const defaultIndexTemplate = templateObjects[index];
            const elementForTmp1 = defaultIndexTemplate.tmp1.reduce((accumulator, currentValue) => {
                return accumulator += currentValue;
            }, ``);

            const elementForTmp2 = defaultIndexTemplate.tmp2.reduce((accumulator, currentValue) => {
                return accumulator += currentValue;
            }, ``);

            templateString1.innerHTML = elementForTmp1;
            templateString2.innerHTML = elementForTmp2;
        };

        dot.addEventListener('change', (e) => {
            console.log(e);
            if (e.target.checked) {
                templateString1.innerHTML = templates[index];
            }
        })
    }
    )
}

handleSlide();

