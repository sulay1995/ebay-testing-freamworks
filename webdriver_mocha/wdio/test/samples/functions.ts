class locators {
	getTableData(rowIndex: number, columnIndex: number) {
		return $(
			`table[id='table01'] tbody tr:nth-child(${rowIndex}) td:nth-child(${columnIndex})`
		);
	}

	getTextBoxIndex(index: number) {
		return $(`(//input[@type=\'text\'])[${index}]`);
	}
}

export default new locators();
