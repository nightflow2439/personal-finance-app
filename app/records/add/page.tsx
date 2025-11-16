'use client'

import { useState, useEffect } from "react";

export default function Add() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("../api/categories");
      const data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, [])

  const uniqueNames = Array.from(
    new Map(categories.map(cat => [cat.name, cat.name])).values()
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target;
    const data = {
      amount: Number(form.amount.value),
      
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">金额</label>
        <input id="amount" type="number" name="amount" />

        <label htmlFor="category">种类:</label>
        <select id="category" name="category">
          {uniqueNames.map(name => (
            <option value={name} key={name}>{name}</option>
          ))}
        </select>

        <input type="radio" id="income" name="type" />
        <label htmlFor="income">收入</label>
        <input type="radio" id="expense" name="type" />
        <label htmlFor="expense">支出</label>

        <input type="submit" value="提交"></input>
      </form>
    </div>
  )
}