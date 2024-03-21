class TimeController {
    async getTime(req, res) {
        const datetime = new Date();
        const time = datetime.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit', second: '2-digit'});

        res.send(time);
    }
}

export default new TimeController();