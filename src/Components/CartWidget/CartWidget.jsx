import React from "react";
import './CartWidget.css';
import { Button, Card, Image } from 'semantic-ui-react';


function CartWidget(title, price, description,img){
    return(
        <div>

            <h1>Lista de cursos</h1>

            <div className="card">
            <Card>
                <Card.Content>
                  <Image>{img}</Image>
                  <Card.Header>{title}</Card.Header>
                  <Card.Meta>{price}</Card.Meta>
                  <Card.Description>{description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                      +
                    </Button>
                    <Button basic color='red'>
                      -
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </div>
          
        </div>
    );
}

export default CartWidget;