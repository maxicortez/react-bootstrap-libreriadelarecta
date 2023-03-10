import axios from "axios";
import { getToken } from "../../auth"
const url = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`;
const api = "sys-clients"

export async function find(query) {
    try {
        const token = getToken()
        const { data } = await axios.get(`${url}/${api}?${query}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data
    } catch (error) {
        return error
    }
}

export async function findOne(id, query) {
    try {
        const token = getToken()
        const { data } = await axios.get(`${url}/${api}/${id}?${query}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data
    } catch (error) {
        return error
    }
}

export async function count(query) {
    try {
        const token = getToken()
        const { data } = await axios.get(`${url}/${api}/count?${query}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data
    } catch (error) {
        return error
    }
}

export async function create(jsonData) {
    try {
        //const token = getToken()
        const path = `${url}/${api}`
        const { data } = await axios({
            method: "post",
            url: path,
            data: JSON.stringify(jsonData),
            headers: {
                //Authorization: `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
        });
        return data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else if(error.message) {
            return error.message;
        } else {
            return error;
        }        
    }
}

export async function update(id, jsonData) {
    try {
        const token = getToken();
        const path = `${url}/${api}/${id}`;
        const { data } = await axios({
            method: "put",
            url: path,
            data: jsonData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        return error;
    }
}

export async function del(id) {
    try {
        const token = getToken();
        const path = `${url}/${api}/${id}`;
        const { data } = await axios({
            method: "delete",
            url: path,
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        return data;
    } catch (error) {
        return error;
    }
}
