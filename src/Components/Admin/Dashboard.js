import React, { Component } from "react";
import AdminLayout from "../AdminLayout";

class Dashboard extends Component {
  render() {
    return (
      <AdminLayout>
        <div className="user_dashboard">
          <div>This is your dashboard.</div>
        </div>
      </AdminLayout>
    );
  }
}

export default Dashboard;
