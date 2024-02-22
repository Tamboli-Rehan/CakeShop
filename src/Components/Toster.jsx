import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";


const toaster = () => {
  toast.success("Item Added to cart", {
    position: "top-right",
    className:"custom-toast",
    autoClose: 1000,
  });
};
export default toaster;
