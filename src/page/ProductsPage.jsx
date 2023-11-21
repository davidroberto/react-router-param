import Header from "../component/Header";
import { productSortedByPrice } from "../utils/products-utils";
import SideBar from "../component/Sidebar";
import ProductCard from "../component/ProductCard";

function ProductsPage() {
  return (
    <>
      <Header pageTitle="Page de liste de produits" />
      <SideBar textToDisplay="Vous consultez la liste de produits" />
      <main>
        <h1>Les produits les moins chers pour les grosses pinces : </h1>

        {productSortedByPrice.map((currentProductInLoop) => {
          return <ProductCard productToDisplay={currentProductInLoop} />;
        })}
      </main>
    </>
  );
}

export default ProductsPage;
