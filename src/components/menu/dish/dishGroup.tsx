import Tab from 'react-bootstrap/Tab';
import { categoryData, dishData } from '../../../data/data';
import { Dish } from './dish';

export const DishGroup = ({categoryIndex}) => {

    return (
        <Tab.Pane eventKey={categoryIndex} >
            {categoryData[categoryIndex].itemsList.map(
                (itemIndex) => {
                    return (
                        <Dish itemIndex={itemIndex} key={itemIndex}></Dish>
                    )
                }
            )}
        </Tab.Pane>
    )
}