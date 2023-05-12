import { axios } from '../../lib/axios.js';

    console.log("ok");
    let botaoLogin = document.getElementById("botaoLogin");

    async function createUser() {
        console.log("Entrou")
    const { description, price, category, type } = data;

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

  }