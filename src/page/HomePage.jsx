import { Link } from "react-router-dom";
import Header from "../component/Header";
import { productSortedByPrice, products } from "../utils/products-utils";
import SideBar from "../component/Sidebar";
import ProductCard from "../component/ProductCard";

function Home() {
  const kitchenProducts = products.filter((product) => {
    return product.category === "cuisine";
  });

  kitchenProducts.sort((product1, product2) => new Date(product1.publicationDate) - new Date(product2.publicationDate));
  const lastPublishedKitchenProducts = kitchenProducts.slice(-3);
  const cheapestProducts = productSortedByPrice.slice(0, 3);

  return (
    <>
      <Header pageTitle="HomePage" isUserAuthenticated={true} />
      <SideBar textToDisplay="L'electromenager pour les personnes âgées" />
      <main>
        <section>
          <h2>Les trois derniers produits cuisine : </h2>

          {lastPublishedKitchenProducts.map((product) => {
            return <ProductCard productToDisplay={product} />;
          })}
        </section>
        <section>
          <h3>Produits les moins chers : </h3>
          {cheapestProducts.map((product) => {
            return <ProductCard productToDisplay={product} />;
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
