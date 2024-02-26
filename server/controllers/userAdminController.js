const adminService = require('../services/userAdminService');

class UserAdminController {
  async createAdmin(req, res) {
    const useData = req.body;
    try {
      const user = await adminService.criarUserAdmin(useData);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao criar usuário' });
    }
  }

  async getAdminById(req, res) {
    try {
      const { id } = req.params;
      const user = await adminService.buscarUserAdminPorId(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao obter usuário' });
    }
  }

  async listAdmins(_, res) {
    try {
      const users = await adminService.listarUserAdmins();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao listar usuários' });
    }
  }

  async updateAdmin(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const user = await adminService.atualizarUserAdmin(id, { name, email, password }, { new: true });
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao atualizar usuário' });
    }
  }

  async deleteAdmin(req, res) {
    try {
      const { id } = req.params;
      const user = await adminService.excluirUserAdminById(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Falha ao excluir usuário' });
    }
  }
}

module.exports = new UserAdminController();
