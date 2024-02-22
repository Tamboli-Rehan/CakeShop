import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { buyNow, clearCart } from "../redux/actions/index";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    const cart = state.cart;
    return cart.item || [];
  });
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleBuyNow = () => {
    dispatch(clearCart());
    dispatch(buyNow());
    toast.success("Product purchased!");
  };

  return (
    <Box>
      {cartItems.length === 0 ? (
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Grab your cake soon
        </Typography>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <Card
              key={index}
              sx={{
                bgcolor: "#432d2d",
                margin: "20px",
                boxShadow: "0 0 10px 5px black",
                color: "white",
              }}
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Cart
                </Typography>
                <Box sx={{ marginBottom: 2 }}>
                  <Typography variant="h4">{item.type}</Typography>
                  <Typography variant="h5">{item.itemName}</Typography>
                  <Typography variant="subtitle1">
                    Price: {item.price1}
                  </Typography>
                  <Typography variant="subtitle1">
                    Price: {item.price2}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="contained"
              onClick={handleClearCart}
              sx={{
                marginBottom: 2,
                color: "white",
                backgroundColor: "black",
              }}
            >
              Clear Cart
            </Button>
            <Button
              variant="contained"
              onClick={handleBuyNow}
              sx={{ marginBottom: 2, color: "white", backgroundColor: "black" }}
            >
              Buy Now
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
export default Cart;
