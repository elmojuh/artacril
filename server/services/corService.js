// services/corService.js
const Cor = require('../models/Cor');

class CorService {
  async getAllCores() {
    try {
      const cores = await Cor.find();
      return cores;
    } catch (error) {
      throw new Error('Failed to get cores');
    }
  }

  async getCorById(id) {
    try {
      const cor = await Cor.findById(id);
      if (!cor) {
        throw new Error('Cor not found');
      }
      return cor;
    } catch (error) {
      throw new Error('Failed to get cor');
    }
  }

  async createCor(corData) {
    try {
      const cor = new Cor(corData);
      await cor.save();
      return cor;
    } catch (error) {
      throw new Error('Failed to create cor');
    }
  }

  async updateCor(id, corData) {
    try {
      const cor = await Cor.findByIdAndUpdate(id, corData, { new: true });
      if (!cor) {
        throw new Error('Cor not found');
      }
      return cor;
    } catch (error) {
      throw new Error('Failed to update cor');
    }
  }

  async deleteCor(id) {
    try {
      const cor = await Cor.findByIdAndDelete(id);
      if (!cor) {
        throw new Error('Cor not found');
      }
      return { message: 'Cor deleted successfully' };
    } catch (error) {
      throw new Error('Failed to delete cor');
    }
  }
}

module.exports = new CorService();
