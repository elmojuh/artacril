// services/linkService.js
const Link = require('../models/Link');

class LinkService {
  async getAllLinks() {
    try {
      return await Link.find();
    } catch (error) {
      throw new Error('Failed to get links');
    }
  }

  async getLinkById(id) {
    try {
      return await Link.findById(id);
    } catch (error) {
      throw new Error('Failed to get link');
    }
  }

  async createLink(data) {
    try {
      return await Link.create(data);
    } catch (error) {
      throw new Error('Failed to create link');
    }
  }

  async updateLink(id, data) {
    try {
      return await Link.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error('Failed to update link');
    }
  }

  async deleteLink(id) {
    try {
      return await Link.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete link');
    }
  }
}

module.exports = new LinkService();
