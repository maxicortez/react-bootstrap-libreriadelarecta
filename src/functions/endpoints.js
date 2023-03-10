import axios from "axios";
import FormData from "form-data";
import { getToken } from "./auth";

const url = `${process.env.REACT_APP_HOST}`;

export async function getEndPoint(nameEndPoint, query) {
    try {
        const token = getToken();
        if (token === "") {
            throw new Error("Empty Token");
        }
        const path = `${url}/${nameEndPoint}${query}`;
        const { data } = await axios.get(path, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        return error;
    }
}

export async function postEndPoint(nameEndPoint, dataConfig) {
    try {
        const token = getToken();
        const path = `${url}${nameEndPoint}`;
        const { data } = await axios({
            method: "post",
            url: path,
            data: dataConfig,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        return error;
    }
}

export async function putEndPoint(nameEndPoint, id, dataConfig) {
    try {
        const token = getToken();
        const path = `${url}${nameEndPoint}/${id}`;
        const { data } = await axios({
            method: "put",
            url: path,
            data: dataConfig,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        return error;
    }
}

export async function uploadUrlFile(fileUrlBase64) {
    try {
        const dataURLtoFile = (dataurl, filename) => {
            const arr = dataurl.split(",");
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n) {
                u8arr[n - 1] = bstr.charCodeAt(n - 1);
                n -= 1; // to make eslint happy
            }
            return new File([u8arr], filename, { type: mime });
        }
        const file = await dataURLtoFile(fileUrlBase64, "cam_capure.jpg")
        const form = new FormData();
        const token = getToken();
        const path = `${url}/upload/`;
        form.append('files', file);    
        const { data } = await axios({
            method: "post",
            url: path,
            data: form,
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        return data;
    } catch (error) {
        return error;
    }
}

export async function uploadFile(file) {
    try {
        const form = new FormData();
        const token = getToken();
        const path = `${url}/upload/`;
        form.append('files', file);    
        const { data } = await axios({
            method: "post",
            url: path,
            data: form,
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        return data;
    } catch (error) {
        return error;
    }
}

export async function deleteFile(id) {
    try {
        const token = getToken();
        const path = `${url}/upload/files/${id}`;
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

/* export function putEndpoint(nameEndPoint, id, dataConfig) {
    const token = getToken();
    const path = `${url}${nameEndPoint}/${id}`;
    axios({
        method: "put",
        url: path,
        data: dataConfig,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        return res
    }).catch((error) => {
        return error
    });    
}
 */
