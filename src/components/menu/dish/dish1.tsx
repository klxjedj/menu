import { dishData } from '../../../data/data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { addItem, decreaseItem } from '../../../store/slices/cartSlice';

export const Dish = ({ itemIndex }) => {
    let currentNum = useAppSelector((state) => { return state.cart[itemIndex] });
    let dispatch = useAppDispatch();
    console.log(currentNum)

    let dish = dishData[itemIndex];
    let onAdd = () => {
        dispatch(addItem(itemIndex))
    }
    let onDecrease = () => {
        dispatch(decreaseItem(itemIndex))
    }
    return (
        <Row className={'mb-2 align-items-start'}>
            <Col xs={3} className={''}>
                <div className={`d-flex align-items-start justify-content-start`}>
                    <img className={''} src={`menu/${dish.dishName}.jpg`}></img>
                </div>
            </Col>
            <Col className={''}>
                <Row>
                    <Col xs={12}><p className={'title'}>{dish.dishName}</p></Col>
                    <Col>
                        <p className={'detail'}>{`重量:${dish.weight}g`}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 1, offset: 7 }}>
                        <div className={`order d-flex align-items-center justify-content-evenly`} onClick={onDecrease}>
                            <div className={'d-flex text-center align-items-center justify-content-center'}>{'-'}</div>
                        </div>
                    </Col>
                    <Col xs={{ span: 1 }}>
                        <div className={`order d-flex align-items-center justify-content-evenly`}>
                            <div className={'d-flex text-center align-items-center justify-content-center'}>{currentNum}</div>
                        </div>
                    </Col>
                    <Col xs={{ span: 1 }}>
                        <div className={`order d-flex align-items-center justify-content-evenly`} onClick={onAdd}>
                            <div className={'d-flex text-center align-items-center justify-content-center'}>{'+'}</div>
                        </div>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}