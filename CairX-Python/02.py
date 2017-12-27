def checksum(data):
	result = 0
	for values in data:
		result += max(values) - min(values)
	return result


def worried_checksum(data):
	result = 0
	for values in data:
		length = len(values)
		for i in range(length):
			for j in range(length):
				if i != j and values[i] % values[j] == 0:
					result += int(values[i] / values[j])
	return result

def to_data(string):
	data = []
	for line in string.splitlines():
		data.append([int(value) for value in line.split("\t")])
	return data

def test():
	assert checksum(to_data("5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8")) == 18
	assert worried_checksum(to_data("5\t9\t2\t8\n9\t4\t7\t3\n3\t8\t6\t5")) == 9


def main():
	with open("02.input.txt") as stream:
		data = to_data(stream.read())
		print(checksum(data))
		print(worried_checksum(data))


if __name__ == "__main__":
	main()
