#%% Fizzbuzz
# Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 
# (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
#   - Múltiplos de 3 por la palabra "fizz".
#   - Múltiplos de 5 por la palabra "buzz".
#   - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 
def fizzbuzz(n):
    for i in range(1, n+1):
        if i % 3 == 0 and i % 5 == 0:
            print("fizzbuzz")
        elif i % 3 == 0:
            print("fizz")
        elif i % 5 == 0:
            print("buzz")
        else:
            print(i)

# ¿Qué complejidad tiene en tiempo y en espacio? → Orden n, n^2, etc. -> O(n) …

# En tiempo, tenemos que iterar los 100 números, por lo que es O(n).
# En espacio, no tenemos que guardar nada, por lo que es O(1).

# ¿Cuánto crees que podría tardar en procesar 1 millón de datos? → segundos, minutos, horas… 

import time
t1 = time.time()
fizzbuzz(1_000_000)
t2 = time.time()
print("El programa ha tardado: ", t2 - t1, " segundos")

# Para un millón de datos el programa podría tardar unos segundos.

# El tiempo de ejecución está en el orden de magnitud de los segundos.

