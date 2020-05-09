import React, {Component} from "react";
import {
    Table,
    Button,
    Jumbotron,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
} from "reactstrap";

class Table extends Component => {
    constructor(props) {
        super(props)
        this.state = {
            products: [],>
        }

    }
    return (
        <div>
            <Jumbotron>
                <h1 className="display-4" align="center">
                    Atualiza preço de Produto
                </h1>
            </Jumbotron>

            <AppProvider>
        <Page title="Data table">
          <DataTable headings={headings} rows={rows} />
        </Page>
      </AppProvider>
                  
            <Table>
                {props.products.map(product => (
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço de custo</th>
                        <th>Preço de venda</th>
                    </tr>
                </thead>
                <tbody></tbody>))}
            </Table>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Margem de Lucro (%):</InputGroupText>
                </InputGroupAddon>
                <Input type="Number" placeholder=" " />
            </InputGroup>
            <br />
            <Button color="secondary">Atualizar preço</Button>{" "}
        </div>
    );
};
