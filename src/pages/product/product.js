import "./styles.css";
import useFetch from "../../hooks/useFetch";
import { getBooksById } from "../../services/books/books";
import Loading from "../../components/loading/loading";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  const [book, loading] = useFetch(getBooksById, params.id);

  if (loading) return <Loading />;

  return (
    <div className="product">
      <div className="product-container">
        <div>
          <img className="product-image" src={book.image} alt="placeholder" />
        </div>
        <div className="product-info">
          <h1>{book.title}</h1>
          <span className="product-info-price">$ {book.price}</span>
          <span className="product-info-stock">Stock disponible</span>
          <button>Agregar al carrito</button>
          <p className="product-info-p">
            faucibus in ornare quam viverra orci sagittis eu volutpat odio
            facilisis mauris sit amet massa vitae tortor condimentum lacinia
            quis vel eros donec
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
