import Nav from 'react-bootstrap/Nav';

import { categoryData } from '../../../data/data';
import {CategoryItem} from './categoryItem'

export const CategoryList = () => {

    return (
        <Nav className="flex-column">
            {
                categoryData.map((cat) => {
                    return (
                        <CategoryItem key={cat.categoryIndex} {...cat} />
                    )
                })
            }
        </Nav>
    )
}