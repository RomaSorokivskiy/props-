import { Nav }from 'react-bootstrap'

function Header(){
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <div id="logo"></div>
                    <h2>penrose</h2>
                </div>
                <Nav onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                    <Nav.Item>
                        <Nav.Link id="active">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="New collections">New collections</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Store">Store</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Contacts">Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </header>
    )
}
export default Header
