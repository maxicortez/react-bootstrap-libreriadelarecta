import axios from "axios";

const url = `${process.env.REACT_APP_HOST}`;

export async function findCategoriasByDescription(query) {
    try {
        const { data } = await axios.post(`${url}/api/categoriasBydescription`, 
        {
          descripcion: query
        });
        return data;
    } catch (error) {
        return error;
    }
}

export async function findAllCategorias() {
  try {
      const { data } = await axios.get(`${url}/api/categorias`);
      return data;
  } catch (error) {
      return error;
  }
}

export async function createCategoria(descripcion, esActivo) {
    try {
        const { data } = await axios.post(`${url}/api/categorias`, {
            descripcion,
            esActivo,
        });
        return data;
    } catch (error) {
        return error;
    }
}

export async function updateCategoria(idCategoria, descripcion, esActivo) {
    try {
        const { data } = await axios.put(`${url}/api/categorias/${idCategoria}`, {
            descripcion,
            esActivo,
        });
        return data;
    } catch (error) {
        return error;
    }
}

export async function deleteCategoria(idCategoria) {
  try {
      const { data } = await axios.delete(`${url}/api/categorias/${idCategoria}`);
      return data;
  } catch (error) {
      return error;
  }
}
