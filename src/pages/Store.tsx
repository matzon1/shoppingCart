import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"


export function Store() {
  return <div className="mt-4"><h1 className="text-center mb-4">Nuestros Productos</h1>
  <Container>
    <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
            <Col key={item.id}><StoreItem {...item}/></Col>
        ))}
        
    </Row>
    </Container>
</div>
}
 