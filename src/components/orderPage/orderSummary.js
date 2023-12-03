import React from 'react';

class OrderSummary extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      order: {
        id: 1,
        books_order_relation: [
          { book_id: 1, quantity: 2 },
          { book_id: 2, quantity: 1 },
        ],
      },
      books: [
        { id: 1, title: 'Book 1', price: 10 },
        { id: 2, title: 'Book 2', price: 15 },
      ],
    };
 }

 getTotalPrice() {
    const { order, books } = this.state;
    let totalPrice = 0;

    order.books_order_relation.forEach((relation) => {
      const book = books.find((b) => b.id === relation.book_id);
      totalPrice += book.price * relation.quantity;
    });

    return totalPrice;
  }

 render() {
    const { order, books } = this.state;
  
    const orderSummary = (
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", color: "black" }}>Book Title</th>
            <th style={{ padding: "10px", color: "black" }}>Quantity</th>
            <th style={{ padding: "10px", color: "black" , textAlign: "right" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {order.books_order_relation.map((relation) => {
            const book = books.find((b) => b.id === relation.book_id);
            return (
              <tr key={book.id}>
                <td style={{ padding: "10px", color: "black", textAlign: "left" }}>{book.title}</td>
                <td style={{ padding: "10px", color: "black", textAlign: "center" }}>{relation.quantity}</td>
                <td style={{ padding: "10px", color: "black", textAlign: "right" }}>${book.price * relation.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  
    const totalPrice = this.getTotalPrice();

    return (
      <div style={{ margin: 0, padding: 0 }}>
        {orderSummary}
        <div style={{ width: "100%", borderBottom: "1px solid black", marginTop: "40px",marginBottom: "40px"}}></div>
        <p style={{ textAlign: "right", fontSize: "18px", color: "black", paddingRight: "20px" }}>
          Total Price: ${totalPrice.toFixed(2)}
        </p>
      </div>
    );
  }
  
}

export default OrderSummary;