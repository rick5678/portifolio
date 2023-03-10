import { Col } from "react-bootstrap"

export const ProjetoCard = ({titulo, descricao, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{titulo}</h4>
                    <span>{descricao}</span>
                </div>
            </div>
        </Col>
        
    )
}