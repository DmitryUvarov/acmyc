// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener('load', pageLoad)

function pageLoad() {
    const htmlTag = document.documentElement

    document.addEventListener('click', e => {
        const targetElement = e.target

        if (targetElement.closest('.menu__item')) {
            if (document.querySelector('.menu__item.open')) {
                document.querySelector('.menu__item.open').classList.remove('open')
            }
            targetElement.closest('.menu__item').classList.toggle('open')
        }
        if (!targetElement.closest('.menu__item') && document.querySelector('.menu__item.open')) {
            document.querySelector('.menu__item.open').classList.remove('open')
        }
    })
}