import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export function End(props) {
    let { show, confirmed, cancelled } = props

    return (
        <Modal show={show} centered>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>感谢！</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    实验已完成，感谢您的参与！现在可以关闭页面</Modal.Body>

            </Modal.Dialog>
        </Modal>
    )
}