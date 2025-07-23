import useCart from "../hooks/useCart";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
    const { cart, removeFromCart, totalPrice } = useCart();

    return (
        <div className="container min-h-[50vh] bg-background py-8">
            <h1 className="text-xl font-bold mb-4">سلة المشتريات</h1>

            {cart.length === 0 ? (
                <p className="text-center text-3xl py-4">empty card</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b py-4">
                            <div className="flex items-center gap-3">
                                <img src={item.image} className="w-25 h-25 object-cover" />
                                <div>
                                    <h2 className="font-bold">{item.name}</h2>
                                    <p>{item.quantity} × {item.price} ج.م</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 hover:underline hover:bg-red-600 cursor-pointer"
                            >
                                <MdDelete/>
                            </button>
                        </div>
                    ))}

                    <div className="mt-4 text-center font-bold text-3xl my-4">
                        Total: {totalPrice.toFixed(2)} L.E
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
