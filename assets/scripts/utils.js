const random = (max, min = 0) => Math.ceil(Math.random() * (max - min) + min )

const createEl = ( tag, className, text ) => {
    const $element = document.createElement(tag)
    if (className) {
        if (Array.isArray(className)) {
            className.forEach(item => {
                $element.classList.add(item);
            })
        } else {
            $element.classList.add(className);
        }
    }
    if (text) { $element.innerText = text }
    return $element
}

// const createElement = (tag, className) => {
//     const $tag = document.createElement(tag);
//     if (className) {
//         if (Array.isArray(className)) {
//             className.forEach(item => {
//                 $tag.classList.add(item);
//             })
//         } else {
//             $tag.classList.add(className);
//         }
//     }
//
//     return $tag;
// }

const createImg = ( src, alt = '', className ) => {
    const $element = document.createElement('img')
    $element.src= src
    $element.alt = alt
    className && $element.classList.add(className)
    return $element
}

const log = ( log, name = '' ) => console.log('### ' + String(name) + ':', log)

export { random, createEl, createImg, log }