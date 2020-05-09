import React, { Component } from "react";
import ProductDataService from "../../services/ProductServices";

export default class Table extends Component {
    constructor(props) {
        super(props);

        this.onChangeSearchByName = this.onChangeSearchByName.bind(this);
        this.getProducts = this.getProducts.bind(this);
        // this.updTable = this.updTable.bind(this);

        this.state = {
            products: [],
            searchName: "",
        };
    }

    async componentDidMount() {
        this.getProducts();
    }

    onChangeSearchByName(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName,
        });
    }

    SearchByName() {
        ProductDataService.findByName(this.state.searchName)
            .then((response) => {
                this.setState({
                    products: response.data,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }
    getProducts() {
        ProductDataService.getAll()
            .then((response) => {
                this.setState({
                    products: response.data,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    updTable() {
        this.getProducts();
        this.setState({});
    }

   
    renderTableData() {
        return this.state.products.map((product, index) => {
           const { id, name, costPrice, sellPrice } = product //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{costPrice}</td>
                 <td>{sellPrice}</td>
              </tr>
           )
        })
     }
    // return this.state.products.map((product, index) => {
    //     const { id, name, costPrice, sellPrice } = product;
    //     return (
    //         <tr key={name}>
    //             <td>{id}</td>
    //             <td>{name}</td>
    //             <td>{costPrice}</td>
    //             <td>{sellPrice}</td>
    //         </tr>
    //     );
    // });

    render() {
        return (
            <div>
                <h1 id="title">Atualiza preço de Produto</h1>
                <table id="products">
                    <tbody>{this.renderTableData()}</tbody>
                </table>
            </div>
        );
    }
}
