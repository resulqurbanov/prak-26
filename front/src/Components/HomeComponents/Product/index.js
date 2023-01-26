import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";

function Product() {
  function dataget() {
    axios.get(`http://localhost:9999/mehsul/`).then((res) => {
      setProducts(res.data);
    });
  }

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dataget();
  }, []);

  const deleteclick = (_id) => {
    axios.delete(`http://localhost:9999/mehsul/${_id}`).then(() => {
      dataget();
    });
  };

  function handleclickplus() {
    setProducts([
      ...products.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      ),
    ]);
  }

  return (
    <div>
      <div className="card-container">
        <div>
          <p>Popular Item in the market</p>
          <h2>Trending Product</h2>
        </div>
        <button
          onClick={() => {
            setProducts(products.sort((a, b) => b.title > a.title));
          }}
        >
          Çoxdan aza
        </button>
        <button
          onClick={() => {
            handleclickplus();
          }}
        >
          Coxdan aza
        </button>
        <input
          type={"text"}
          placeholder="search with resul"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {products
          .filter((products) =>
            products.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((element) => {
            return (
              <>
                <div className="cart_tam">
                  <div className="cartim">
                    <img src={element.imageUrl} alt="" />
                    <h1>{element.description}</h1>
                    <h1>{element.title}</h1>
                    <h1>${element.price}</h1>
                    <button
                      onClick={() => {
                        deleteclick(element._id);
                      }}
                    >
                      silllll eeeeeeeeeeee
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Product;
