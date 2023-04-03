import Tab from 'react-bootstrap/Tab';
import { categoryData,dishData } from '../../../data/data';
import { DishGroup } from './dishGroup3';


export const DishList = () => {

    return (
        <Tab.Content className={'mt-1 ms-1'}>
            {
                categoryData.map(
                    (cat) => {
                        return (
                            <DishGroup {...cat} key={cat.categoryIndex}></DishGroup>
                            
                        )
                    }
                )
            }
        </Tab.Content>
    )
}