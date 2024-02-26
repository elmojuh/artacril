// services/userAdminService.js
const UserAdmin = require('../models/UserAdmin');

class UserAdminService {
    async criarUserAdmin(userAdminData) {
        try {
            return await UserAdmin.create(userAdminData);
        } catch (error) {
            console.error('Erro ao criar userAdmin:', error);
            throw new Error('Erro ao criar userAdmin');
        }
    }

    async buscarUserAdminPorId(id) {
        try {
            return await UserAdmin.findById(id);
        } catch (error) {
            throw new Error('Link não encontrado');
        }
    }

    async listarUserAdmins() {
        try {
            return await UserAdmin.find();
        } catch (error) {
            throw new Error('UserAdmins não encontrados');
        }
    }

    async atualizarUserAdmin(id, novoUserAdminData) {
        try {
            return await UserAdmin.findByIdAndUpdate(id, novoUserAdminData, { new: true });
        } catch (error) {
            throw new Error('Erro ao atualizar userAdmin');
        }
    }

    async excluirUserAdminById(id) {
        try {
            return await UserAdmin.findByIdAndDelete(id);
        } catch (error) {
            throw new Error('Erro ao excluir userAdmin');
        }
    }


}
module.exports = new UserAdminService();
