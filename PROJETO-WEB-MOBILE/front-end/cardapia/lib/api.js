import Parse from "parse";


if (!Parse.serverURL) {
  Parse.initialize(
    "mmdgUUMfzBrInhwWfSDp3oFJW3gJGHyoXE4smW0Y",
    "E5v7T9NIy5N7rFWxE82e3RFooyN8EG7HfIgXeR03"  
  );
  Parse.serverURL = "https://parseapi.back4app.com/";
}


export const salvarReceita = async (dados, currentUser) => {
  if (!currentUser) throw new Error("Usuário não definido");

  const Receita = Parse.Object.extend("Receita");
  const receita = new Receita();

  receita.set("titulo", dados.titulo || "Receita");
  receita.set("ingredientes", dados.ingredientes || "");
  receita.set("instrucao", dados.instrucao || "");
  receita.set("tempo_preparo", dados.tempo_preparo || "");
  receita.set("calorias", dados.calorias || 0);
  receita.set("categoria", dados.categoria || "");
  receita.set("usuario", currentUser); 

  try {
    const resultado = await receita.save();
    return resultado.toJSON();
  } catch (err) {
    console.error("Erro ao salvar receita no Parse:", err);
    throw new Error(err.message || "Erro ao salvar receita");
  }
};



export const buscarReceitas = async (categoria, userId) => {
  if (!userId) return [];

  const Receita = Parse.Object.extend("Receita");
  const query = new Parse.Query(Receita);

  
  const userPointer = {
    __type: "Pointer",
    className: "_User",
    objectId: userId
  };

  query.equalTo("usuario", userPointer); 

  if (categoria) {
    query.equalTo("categoria", categoria);
  }

  query.descending("createdAt"); 

  try {
    const results = await query.find();
    return results.map(r => r.toJSON());
  } catch (err) {
    console.error("Erro ao buscar receitas:", err);
    return [];
  }
};


export const atualizarReceita = async (id, dados) => {
  if (!id) throw new Error("ID da receita é obrigatório");

  const Receita = Parse.Object.extend("Receita");
  const query = new Parse.Query(Receita);

  try {
    const receita = await query.get(id);
    Object.keys(dados).forEach(key => receita.set(key, dados[key]));
    const resultado = await receita.save();
    return resultado.toJSON();
  } catch (err) {
    console.error("Erro ao atualizar receita:", err);
    throw new Error(err.message || "Erro ao atualizar receita");
  }
};


export const deletarReceita = async (id) => {
  if (!id) throw new Error("ID da receita é obrigatório");

  const Receita = Parse.Object.extend("Receita");
  const query = new Parse.Query(Receita);

  try {
    const receita = await query.get(id);
    await receita.destroy();
  } catch (err) {
    console.error("Erro ao deletar receita:", err);
    throw new Error(err.message || "Erro ao deletar receita");
  }
};