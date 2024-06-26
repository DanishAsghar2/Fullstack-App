const API_URL = "https://danishasgharbackend.glitch.me"; // Make sure this is correct

const getAll = () => {
    return fetch(`${API_URL}/products`)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "something went wrong";
            }
        })
        .catch((error) => {
            console.log("err", error);
            return Promise.reject(error);
        });
};

const getOne = (id) => {
    return fetch(`${API_URL}/products/${id}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "something went wrong";
            }
        })
        .catch((error) => {
            console.log("err", error);
            return Promise.reject(error);
        });
};

const getByCustom = (custom) => {
    return fetch(`${API_URL}/products/custom/${custom}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "something went wrong";
            }
        })
        .catch((error) => {
            console.log("err", error);
            return Promise.reject(error);
        });
};

const create = (name, price, type, description, base, heart, top, custom) => {
    return fetch(`${API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            price: price,
            type: type,
            description: description,
            base: base,
            heart: heart,
            top: top,
            custom: custom
        })
    })
        .then((response) => {
            if (response.status === 201) {
                return response.json();
            } else if (response.status === 401) {
                throw "unauthorised";
            } else if (response.status === 404) {
                throw "not found";
            } else {
                throw "something went wrong";
            }
        })
        .catch((error) => {
            console.log("err", error);
            return Promise.reject(error);
        });
};

export const productService = {
    getAll,
    getOne,
    getByCustom,
    create
};
