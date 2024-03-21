import WomenRepository from "../repositories/WomenRepository.js"

class WomenController {
    async getWomen(req, res) {
        const women = await WomenRepository.find();

        res.status(200).json(women);
    }

    async createWoman(req, res) {
        const woman = {
            name: req.body.name,
            minibio: req.body.minibio,
            url: req.body.url,
            quote: req.body.quote
        };

        const womanCreated = await WomenRepository.save(woman);

        res.status(201).json(womanCreated);
    }

    async updateWoman(req, res) {
        const changedWoman = await WomenRepository.update(req.params.id, req.body);

        res.status(200).json(changedWoman);
    }

    async deleteWoman(req, res) {
        await WomenRepository.delete(req.params.id);

        res.status(200).json({
            message: 'Woman deleted successfully'
        });
    }
}

export default new WomenController();