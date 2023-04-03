import Nav from 'react-bootstrap/Nav';

export const CategoryItem = ({categoryIndex,categoryName}) => {

    return (
    <Nav.Item>
        <Nav.Link eventKey={categoryIndex}>{categoryName}</Nav.Link>
    </Nav.Item>)
}