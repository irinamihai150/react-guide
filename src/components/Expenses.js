import React from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "./Card"
import "./Expenses.css"
import ExpensesFilter from "./NewExpense/ExpensesFilter"
const Expenses = (props) => {
	const filterChangeHandler = (selectedYear) => {
		console.log(selectedYear)
	}
	return (
		<div>
			<ExpensesFilter onChangeFilter={filterChangeHandler} />
			<Card className='expenses'>
				<ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				/>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				/>
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}
				/>
			</Card>
		</div>
	)
}

export default Expenses
