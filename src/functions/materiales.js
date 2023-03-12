import axios from "axios";
import { getToken, deleteStorage } from "./auth";

const url = `${process.env.REACT_APP_HOST}`;

export async function findMaterialPointOfSale(idEmpresa, findQuery) {
  try {
    const dataJson = { idEmpresa, findQuery };
    const token = getToken();
    const { data } = await axios.post(`${url}/api/materiales/pointofsale`, dataJson, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}
