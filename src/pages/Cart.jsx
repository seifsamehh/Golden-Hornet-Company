import { CartHome, HeaderHome } from "../components";

const Cart = () => {
  return (
    <>
      <HeaderHome />
      <section className="cart mt-12">
        <CartHome />
      </section>
    </>
  );
};

export default Cart;
