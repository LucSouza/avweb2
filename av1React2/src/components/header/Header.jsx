import React, { useState } from "react";


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from "reactstrap";

export default (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand>Atualizar preço de produtos</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">
                                Lista de produtos
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/addproduct">
                                Cadastrar produto
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Lucas Souza</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};
