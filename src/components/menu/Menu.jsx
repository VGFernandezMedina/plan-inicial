import { Container, Tab, Tabs } from "react-bootstrap";
import "./Menu.css";

const menuData = {
  "para-compartir": [
    {
      name: "Provoleta Valdivia",
      description: "Provoleta grillada, tomates secos y aceite de oliva.",
      price: "$8.500",
    },
    {
      name: "Empanadas de la casa",
      description: "Carne cortada a cuchillo, cebolla caramelizada y especias.",
      price: "$6.500",
    },
    {
      name: "Papas rústicas",
      description: "Papas al horno con romero, ajo y salsa de la casa.",
      price: "$5.500",
    },
    {
      name: "Tabla Valdivia",
      description: "Selección de quesos, fiambres, aceitunas y pan casero.",
      price: "$12.500",
    },
  ],

  principales: [
    {
      name: "Milanesa Napolitana",
      description:
        "Milanesa de ternera con salsa de tomate, jamón, mozzarella y papas.",
      price: "$13.500",
    },
    {
      name: "Bife de chorizo",
      description:
        "Corte argentino a la parrilla acompañado de papas rústicas.",
      price: "$18.500",
    },
    {
      name: "Pollo grillado",
      description: "Pechuga grillada con vegetales de estación y papas.",
      price: "$12.500",
    },
    {
      name: "Hamburguesa Valdivia",
      description:
        "Medallón de carne, queso cheddar, cebolla caramelizada y papas.",
      price: "$11.500",
    },
  ],

  pastas: [
    {
      name: "Sorrentinos de jamón y queso",
      description: "Pasta artesanal rellena, acompañada con salsa fileto.",
      price: "$11.500",
    },
    {
      name: "Ravioles de ricota",
      description: "Ravioles caseros de ricota y espinaca con salsa crema.",
      price: "$11.000",
    },
    {
      name: "Ñoquis de papa",
      description: "Ñoquis caseros con salsa de tomate y albahaca fresca.",
      price: "$10.500",
    },
    {
      name: "Lasagna de la casa",
      description:
        "Capas de pasta, carne, salsa de tomate, verduras y queso gratinado.",
      price: "$12.500",
    },
  ],

  cafeteria: [
    {
      name: "Café Espresso",
      description: "Café intenso de tueste seleccionado.",
      price: "$2.500",
    },
    {
      name: "Café con leche",
      description: "Espresso acompañado de leche vaporizada.",
      price: "$3.200",
    },
    {
      name: "Cappuccino",
      description: "Espresso, leche vaporizada y espuma cremosa.",
      price: "$3.500",
    },
    {
      name: "Latte",
      description: "Espresso suave con abundante leche vaporizada.",
      price: "$3.500",
    },
    {
      name: "Medialunas",
      description: "Dos medialunas artesanales, dulces o saladas.",
      price: "$3.800",
    },
  ],

  postres: [
    {
      name: "Flan casero",
      description: "Flan de vainilla con dulce de leche y crema.",
      price: "$5.000",
    },
    {
      name: "Tiramisú",
      description: "Clásico postre italiano con café, cacao y mascarpone.",
      price: "$5.500",
    },
    {
      name: "Brownie Valdivia",
      description: "Brownie de chocolate con nueces y helado de crema.",
      price: "$6.000",
    },
    {
      name: "Cheesecake",
      description: "Cheesecake cremoso con frutos rojos.",
      price: "$5.800",
    },
  ],
};

const MenuItems = ({ items }) => {
  return (
    <div className="menu-items">
      {items.map((item) => (
        <div className="menu-item" key={item.name}>
          <div className="menu-item-info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>

          <span className="menu-item-price">{item.price}</span>
        </div>
      ))}
    </div>
  );
};

const Menu = () => {
  return (
    <Container id="menu" fluid className="menu">
      <div className="menu-content">
        <div className="menu-heading">
          <span>RESTAURANTE & CAFÉ</span>
          <h2>Nuestro menú</h2>
          <p>
            Sabores caseros, ingredientes seleccionados y propuestas para
            disfrutar en cualquier momento del día.
          </p>
        </div>

        <Tabs
          defaultActiveKey="para-compartir"
          id="menu-tabs"
          className="tabs-menu"
          justify
        >
          <Tab eventKey="para-compartir" title="Para compartir">
            <MenuItems items={menuData["para-compartir"]} />
          </Tab>

          <Tab eventKey="principales" title="Principales">
            <MenuItems items={menuData.principales} />
          </Tab>

          <Tab eventKey="pastas" title="Pastas">
            <MenuItems items={menuData.pastas} />
          </Tab>

          <Tab eventKey="cafeteria" title="Cafetería">
            <MenuItems items={menuData.cafeteria} />
          </Tab>

          <Tab eventKey="postres" title="Postres">
            <MenuItems items={menuData.postres} />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default Menu;
