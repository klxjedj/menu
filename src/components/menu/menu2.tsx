import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {Dish} from './dish/dish';
import {CategoryList} from './category/categoryList';
import { DishList } from './dish/dishList2';


function Menu() {

    return (
        <Tab.Container defaultActiveKey={0}>
                <Col xs={2}>
                    <CategoryList></CategoryList>
                </Col>
                <Col className={'dishList'} style={{'overflow':'auto','backgroundColor':'#eee'}}>
                    <DishList></DishList>
                </Col>
        </Tab.Container>
    )

}

export default Menu;