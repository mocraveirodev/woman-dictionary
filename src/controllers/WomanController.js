class WomanController {
    async getWoman(req, res) {
        res.json({
            name: 'Monica Craveiro',
            minibio: 'Desenvolvedora Back-end e Embaixadora da Progra{m}aria.',
            url: 'https://github.com/mocraveirodev/woman-dictionary'
        });
    }
}

export default new WomanController();