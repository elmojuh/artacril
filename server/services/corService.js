// services/corService.js
const Cor = require('../models/Cor');
const Produto = require('../models/Produto');

class CorService {
	async listarCores() {
		const resposta = await Cor.find();
		if (!resposta) {
			throw new Error('Cores não encontradas');
		}
		return resposta;
	}

	async buscarCorPorId(id) {
		const cor = await Cor.findById(id);
		if (!cor) {
			throw new Error('Cor não encontrada');
		}
		return cor;
	}

	async criarCor(corData) {
		const cor = new Cor(corData);
		await cor.save();
		if (!cor) {
			throw new Error('Erro ao criar cor');
		}
		return cor;
	}

	async atualizarCor(id, corData) {
		const cor = await Cor.findByIdAndUpdate(id, corData, { new: true });
		if (!cor) {
			throw new Error('Cor não encontrada');
		}
		return cor;
	}

	async excluirCorPorId(id) {
		const cor = await Cor.findByIdAndDelete(id);
		if (!cor) {
			throw new Error('Cor não encontrada');
		}
		return { message: 'Cor deletada com Sucesso' };
	}

	async associarCorAoProduto(corId, produtoId) {
		try {
			const cor = await Cor.findById(corId);
			if (!cor) {
				throw new Error('Cor não encontrada');
			}
			const produto = await Produto.findById(produtoId);
			if (!produto) {
				throw new Error('Produto não encontrado');
			}
			produto.cores.push(corId);
			await produto.save();
			if (!produto) {
				throw new Error('Erro ao associar cor ao produto');
			}
			return produto;
		} catch (error) {
			throw new Error('Erro ao associar cor ao produto: ' + error.message);
		}
	}


	async desassociarCorDoProduto(corId, produtoId) {
		try {
			const cor = await Cor.findById(corId);
			if (!cor) {
				throw new Error('Cor não encontrada');
			}
			const produto = await Produto.findById(produtoId);
			if (!produto) {
				throw new Error('Produto não encontrado');
			}
			produto.cores = produto.cores.filter(cor => cor.toString() !== corId);
			await produto.save();
			if (!produto) {
				throw new Error('Erro ao desassociar cor do produto');
			}
			return produto;
		} catch (error) {
			throw new Error('Erro ao desassociar cor do produto: ' + error.message);
		}
	}
	
}

module.exports = new CorService();