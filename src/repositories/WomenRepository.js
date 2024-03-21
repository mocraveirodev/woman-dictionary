import database from '../config/database.js';
import WomanModel from './models/womanModel.js';

await database();

class UserRepository {
    async find() {
        try {
            const women = await WomanModel.find();
    
            return women;
        } catch (error) {
            console.error(error);
        }
    }
    async save(woman) {
        const newWoman = new WomanModel(woman);
        
        try {
            const womanCreated = await newWoman.save();
    
            return womanCreated;
        } catch (error) {
            console.error(error);
        }
    }

    async update(id, woman) {
        try {
            const womanFinded = await WomanModel.findById(id);
    
            const { name, minibio, url, quote } = woman;
    
            Object.entries({ name, minibio, url, quote }).forEach(([key, value]) => {
                if (value !== undefined) {
                    womanFinded[key] = value;
                }
            });
    
            const changedWoman = await womanFinded.save();
    
            return changedWoman;
        } catch (error) {
            console.error(error);
        }
    }

    async delete(id) {
        try {
            await WomanModel.findByIdAndDelete(id);
        } catch (error) {
            console.error(error);
        }
    }
}

export default new UserRepository();