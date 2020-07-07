import React from "react";
import { Link } from "react-router-dom";

class Clients extends React.Component {
  render() {
    const clients = [
      {
        id: "kdfsd",
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kevin@gmail.com",
        phone: "222-222-2222",
        balance: "30",
      },
      {
        id: "kddssd",
        firstName: "Bob",
        lastName: "Jackson",
        email: "bob@gmail.com",
        phone: "333-333-3333",
        balance: "1000",
      },
    ];

    if (clients) {
      return (
        <div className="Clients">
          <div className="row">
            <div className="col-md-6">
              <h2>Clients</h2>
            </div>
            <div className="col-md-6"></div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
