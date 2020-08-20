function sm(content) {
    return `
        @media screen and (max-width: 480px) {
            ${content}
        }
    `
}

export { sm };