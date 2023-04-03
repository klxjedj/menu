import { useAppSelector } from '../../store/hooks';
import OffCanvas from 'react-bootstrap/Offcanvas'
import { Dish } from '../menu/dish/dish';
export const CheckDetail=({show,hide})=>{
    let cart = useAppSelector((state) => { return state.cart});

    return(
        <OffCanvas show={show} placement={'bottom'} onHide={hide} scroll backdrop>
           <OffCanvas.Header closeButton>
            <OffCanvas.Title>
                已点菜品：
            </OffCanvas.Title>
           </OffCanvas.Header>
           <OffCanvas.Body>           {cart.map(
                (num,index)=>{
                    if (num>0)
                    return(
                        <Dish itemIndex={index} key={index}></Dish>

                    )
                }
            )}
            </OffCanvas.Body>
 
        </OffCanvas>
    )


}