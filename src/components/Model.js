import { useDispatch } from "react-redux"
import { closeModel } from "../features/cart/modalSlice"
import { clearCart } from "../features/cart/cartSlice"



const Model = () => {

  const dispatch =useDispatch();

  return (
    <aside className="modal-container">
    
        <div className="modal">
            
            <h4>Remove all items from your shopping cart?</h4>
            <div className="btn-container">
            <button type="button" className="btn confirm-btn"
            onClick={()=>{
              dispatch(clearCart())
              dispatch(closeModel())
            }
            }
            >
                confirm
            </button>
            <button type="button" className="btn clear-btn"
            onClick={()=>{
              dispatch(closeModel())
            }

            }>
                cancel
            </button>
            </div>
        </div>

    
    </aside>
  )
}
export default Model