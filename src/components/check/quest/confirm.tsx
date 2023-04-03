import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export function Confirm(props) {
    let { show, confirmed, cancelled } = props

    return (
        <Modal show={show} centered>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>警告信息</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                您点的菜品热量已经超过您日常所需能量，是否要更换较低热量的菜品?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={confirmed}>否，提交订单</Button>
                    <Button onClick={cancelled}>是，调整菜品</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}