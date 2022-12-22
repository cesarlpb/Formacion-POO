#%% Factorial

# Enunciado: Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.
 
# 	- No se consideran números negativos
# 	- 0! y 1! son 1

def factorial(n):
    if n == 0:
        return 1
    return n*factorial(n-1)

# ¿Qué complejidad tiene en tiempo y en espacio?

# En tiempo O(n!) y O(1) en espacio (ya que no se almacenan datos).
# Tiempo -> 5 -> 5*4*3*2*1 = 120
# Espacio -> constante o O(1) -> no se almacenan datos en memoria, solo durante las operaciones

# ¿Cuánto crees que podría tardar en procesar 1 millón de datos? Explica en qué basas esta suposición o la forma en la que lo has determinado.

import time
t1 = time.time()
print(factorial(1000))
t2 = time.time()
print("Tiempo de ejecución:", t2-t1)