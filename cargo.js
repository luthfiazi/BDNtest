var maxWeight = 20

var itemInCargo = []

function cargo(itemCode, tipe, width, height, length, weight, temperature){

	if (tipe == "L" || tipe == "S" || tipe == "l" || tipe == "s") {
		if (tipe == "L" || tipe == "l") {
			if (temperature >= 20 && temperature <= 30) {
				if (weight <= maxWeight) {
					return  "PASS"
				} else {
					return  "REJECT"
				}
			} else {
				return "REJECT"
			}

		}
		if (tipe == "S" || tipe == "s") {
			if (width <= 10 && height <= 10 && length <= 10) {
				if (weight <= maxWeight) {
					return  "PASS"
				} else {
					return  "REJECT"
				}
			} else {
				return  "REJECT"
			}

		}
	} else {
		return  "REJECT"
	}

	if (true == "PASS") {
		maxWeight = maxWeight - weight
		itemInCargo =(itemInCargo, itemCode)
	}

	return itemInCargo

}

	console.log(cargo("item001", "S", 5, 8, 2, 5, 25))
	console.log(cargo("item002", "L", 10, 10, 10, 6, 25))
	console.log(cargo("item003", "L", 10, 10, 10, 6, 19))
	console.log(cargo("item004", "S", 1, 15, 2, 1, 25))
	console.log(cargo("item005", "S", 1, 1, 10, 2, 25))
	console.log(cargo("item006", "L", 5, 8, 2, 10, 25))