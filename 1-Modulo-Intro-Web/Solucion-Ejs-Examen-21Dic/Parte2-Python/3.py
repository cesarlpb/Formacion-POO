# Define las siguientes funciones con un nombre explicativo sobre las acciones que realiza cada una:
#%% a. Se necesita una función que reciba un número cualquiera y retorne un float con dos decimales 
# añadiendo el 10% al número recibido. Si recibe 10.0, debe retornar 11.00.
    
# recibe número y devuelve número
def add_10_percent(number):
    return round(number + (number * 0.1), 2)
# recibe número y devuelve string
def add_10_percent_format(number):
    print("Resultado: {:.2f}".format(number + (number * 0.1)))
    return round(number + (number * 0.1), 2)

add_10_percent(10.1)
add_10_percent_format(10.1)
#%%  b. Escribe una función que reciba dos números cualesquiera y retorne un tablero 3x3 de tres en raya 
# donde el primer número sea la cantidad de X y el segundo la cantidad de O colocados en cualquier orden.
# Si recibes 4 y 5 debes retornar:
#   X O O
#   X O X
#   X O O
import random

def tablero(x, o):
    if x + o != 9:
        print("No se puede crear el tablero")
        return []
    else:
        tablero_3x3 = []
        for i in range(3):
            tablero_3x3.append([])
            for j in range(3):
                if x > 0:
                    tablero_3x3[i].append("X")
                    print("X", end=" ")
                    x -= 1
                elif o > 0:
                    tablero_3x3[i].append("O")
                    print("O", end=" ")
                    o -= 1
                # else:
                #     print(" ", end=" ")
            print()
        return tablero_3x3

def tablero_random(x, o):
    if x + o != 9:
        print("No se puede crear el tablero")
        return []
    # No hay control de la proporcion de X y O
    else:
        tablero_3x3 = []
        for i in range(3):
            tablero_3x3.append([])
            for j in range(3):
                add_x_o = False
                while not add_x_o:
                    rand = random.random()
                    if x > 0 and rand >= 0.5:
                        tablero_3x3[i].append("X")
                        print("X", end=" ")
                        x -= 1
                        add_x_o = True
                    elif o > 0 and rand < 0.5:
                        tablero_3x3[i].append("O")
                        print("O", end=" ")
                        o -= 1
                        add_x_o = True
                # else:
                #     print(" ", end=" ")
            print()
        return tablero_3x3

tablero(4, 5)
print("Tablero random con mas O que X:")
tablero_random(3, 6)
print("Tablero random con mas X que O:")
tablero_random(7, 2)
#%% Alternativa para el tablero:
def tablero(num1, num2):
    import random
    tabl=[["" for x in range(3)] for x in range(3)]
    if num1 + num2 == 9:
        while num1 != 0:
            i = random.randint(0,2)
            j = random.randint(0,2)
            if tabl[i][j]=="":
                tabl[i][j]='X'
                num1 -= 1
        while num2 != 0:
            i = random.randint(0,2)
            j = random.randint(0,2)
            if tabl[i][j]=="":
                tabl[i][j]='0'
                num2 -= 1 
        return tabl
    else:
        print('A y B deben sumar 9')

tablero(4,5)
#%% c. Cuenta el número de veces que aparece el caracter $ en este texto:

texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore $ et dolore magna aliqua. Ut enim ad minim $ veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt $ mollit anim id est laborum."

def cuenta_caracter_bucle(texto, caracter):
    contador = 0
    for i in texto:
        if i == caracter:
            contador += 1
    return contador

def cuenta_caracter(texto, caracter):
    return texto.count(caracter)

print("Cuenta sin bucle:", cuenta_caracter(texto, "$"))
print("Cuenta con bucle:", cuenta_caracter_bucle(texto, "$"))
#   Debe devolver 3.
