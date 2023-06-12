import React, { useState } from "react"
import ExpensesList from "./NewExpense/ExpensesList"
import Card from "./Card"
import "./Expenses.css"
import ExpensesFilter from "./NewExpense/ExpensesFilter"


const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020")
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	)
}

export default Expenses
