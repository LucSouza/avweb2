// import React, { Component } from "react";
// import UsuarioDataService from "../services/usuario.service";
// import { Link } from "react-router-dom";


// export default class AddProduct extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeName = this.onChangeName.bind(this);
//     this.onChangeCostPrice = this.onChangeCostPrice.bind(this);
//     this.onChangeSellPrice = this.onChangeSellPrice.bind(this);
//     this.saveProduct = this.saveProduct.bind(this);;
//     this.newProduct = this.newProduct.bind(this);

//     this.state = {
//       id: null,
//       name: "",
//       costPrice: "",
//       sellPrice: '',

//       submitted: false,
//     };
//   }
//   onChangeName(e) {
//     this.setState({
//       name: e.target.value,
//     });
//   }
//   onChangeCostPrice(e) {
//     this.setState({
//         costPrice: e.target.value,
//     });
//   }
//   onChangeSellPrice(e) {
//     this.setState({
//         sellPrice: e.target.value,
//     });
//   }
//   saveProduct() {
//     var data = {
//       name: this.state.name,
//       costPrice: this.state.costPrice,
//       sellPrice: 0,
//     };

//     ProductDataService.create(data)
//       .then(response => {
//         this.setState({
//           id: response.data.id,
//           name: response.data.name,
//           costPrice: response.data.costPrice,
//           sellPrice: response.data.sellPrice,

//           submitted: true,
//         });
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }
//   newProduct() {
//     this.setState({
//       id: null,
//       name: "",
//       costPrice: "",
//       sellPrice: "",
//       submitted: false,
//     });
//   }

//   render() {
//     return (
//       <div className="submit-form">
//         {this.state.submitted ? (
//           <div>
//             <h4> You submitted sucessfully!</h4>
//             <button className="btn btn-primary" onClick={this.newProduct}>
//               Adicionar
//             </button>

//             <Link
//                 to={"/products"}
//                 className="btn btn-secondary"
//               >
//                 Voltar para lista
//               </Link>
//           </div>
//         ) : (
//           <div>
//             <div className="form-group">
//               <label htmlfor="nome">Nome:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 required
//                 value={this.state.name}
//                 onChange={this.onChangeName}
//                 name="title"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="costPrice">Preço de custo:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="costPrice"
//                 required
//                 value={this.state.costPrice}
//                 onChange={this.onChangeCostPrice}
//                 name="costPrice"
//               />
//             </div>
//             <button onClick={this.saveProduct} className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
