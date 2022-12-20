# Realizar las siguientes operaciones con el tipo de bucle que te parezca más adecuado:
#%%   a. Calcula el factorial de 5, debe devolver 120.
factorial = 1
for i in range(1, 6):
    factorial *= i
print("5!", factorial)

#%%   b. Determina si la palabra “banana” es palíndromo.

str_input = "banana"
str_invertido = ""
n = len(str_input)
for idx, char in enumerate(str_input):
    str_invertido += str_input[n - idx - 1]
print(str_input, str_invertido, str_invertido == str_input)

#%%   c. Ordenar la lista siguiente: [3, 75, 26, 93, 34, 74, 62, 22, 24, 63]

lista_input = [3, 75, 26, 93, 34, 74, 62, 22, 24, 63]
lista_ordenada = []
for numero in lista_input:
    if len(lista_ordenada) == 0:
        lista_ordenada.append(numero)
    else:
        for idx, numero_ordenado in enumerate(lista_ordenada):
            if numero < numero_ordenado:
                lista_ordenada.insert(idx, numero)
                break
            elif idx == len(lista_ordenada) - 1:
                lista_ordenada.append(numero)
                break
print(lista_ordenada)

#%% Alternativa para ordenar una lista de números:
lista_input = [3, 75, 26, 93, 34, 74, 62, 22, 24, 63]

def ordenar(lista=[], orden="asc"):
    lista_respuesta = []
    i = 0
    for i in range(0,len(lista)):
        # segun orden, elegimos el minimo o el maximo
        num = max(lista) # min()
        lista_respuesta.append(num)
        lista.remove(num)
    return lista_respuesta

print(ordenar(lista_input))