import React, { Component } from 'react';
import '../project/project.css'

export class Products extends Component {
    constructor(){
        super();

        this.state = {
            products: []
        }

        this.productAPi = 'https://product-api-hazel.vercel.app/products'
    }

    getProduct = async () =>{
        const response = await fetch(this.productAPi)
        if (response.ok){
            const products = await response.json()
            console.log(products)
            this.setState({
                products: products
            })
        }
    }

    componentDidMount = () => {
        this.getProduct()
    }

    render() {
        const {products, isLoading} = this.state
        return (
            <div>
                <div className='products'>
                    {
                        isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            products.map(product => (
                                    <div className="product-item">
                                        <div className="product-img">
                                            <img src={product.img} alt="" />
                                        </div>
                                        <div className="content-product">
                                            <span className='product-title' key={product.id}>{product.name}</span>
                                            <p className="intro">{product.intro}</p>
                                        </div>
                                        <div className="btns">
                                            <button className="github-btn">
                                                <a href={product.github}>GitHub</a>
                                            </button>
                                            <button className="demo-btn">
                                                <a href={product.demo}>Demo</a>
                                            </button>
                                        </div>
                                    </div>
                                ))
                                )
                            }
                </div>
            </div>
        );
    }
}

export default Products;
