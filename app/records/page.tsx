'use client'

import { useEffect, useState } from "react";

export default function Records() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchRecords() {
      const res = await fetch("../api/records");
      const data = await res.json();
      setRecords(data);
    }
    fetchRecords();
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.category.name}</td>
              <td>{record.amount}</td>
              <td>{record.date.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
