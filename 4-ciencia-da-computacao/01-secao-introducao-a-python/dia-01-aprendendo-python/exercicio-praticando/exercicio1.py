def highNumber(firstNumb, lastNumber):
    if firstNumb > lastNumber:
        return firstNumb
    elif lastNumber > firstNumb:
        return lastNumber
    else:
        return 'numeros iguais'

print(highNumber(5, 5)) 
