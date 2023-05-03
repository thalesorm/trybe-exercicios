def nomes(listaName):
    maiorNome = listaName[0]
    for nome in listaName:
        if len(nome) > len(maiorNome):
            maiorNome = nome
    return maiorNome
