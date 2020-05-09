import http from "../apiHttp.js";

class ProductDataService{
    getAll(){
        return http.get("/products");
    }
    get(id){
        return http.get(`/products/${id}`);
    }

    create(data){
        return http.post("/products", data);
    }
    update(name,data){
        return http.put(`/products/${name}`, data);
    }
    delete(id) {
        return http.delete(`/products/${id}`);
    }
    deleteAll(){
        return http.delete('/products');
    }

    findByName(name) {
        return http.get(`/products?name=${name}`);
    }


}
export default new ProductDataService();