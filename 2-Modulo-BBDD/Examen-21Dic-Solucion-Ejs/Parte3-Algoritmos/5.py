#%% Contar del 1 al 100 - Challenge 24

# Enunciado: Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). 
# ¿De cuántas maneras eres capaz de hacerlo? 
# Crea el código para cada una de ellas. 
# Escribe tres formas de realizar la cuenta.

# Forma 1: for
def contar_1(n):
    for i in range(1,n+1):
        print(i)
# Forma 2: while
def contar_2(n):
    i = 1
    while i <= n:
        print(i)
        i += 1
# Forma 3: recursiva
def contar_3(n):
    if n == 1:
        print(1)
        return
    contar_3(n-1)
    print(n)

def contar_4(n):
    lista = [print(i) for i in range(1,n+1)]

# ¿Qué complejidad tiene en tiempo y en espacio cada una de estas formas?

#  Tiempo -> O(n) y O(1) en espacio (ya que no se almacenan datos).

# ¿Cuánto crees que podría tardar el método más eficiente en procesar 1 millón de datos? 
# Explica en qué basas esta suposición o la forma en la que lo has determinado.

# Se tarda del orden de los pocos segundos, entre 2 y 4 segundos.

import time
t1 = time.time()
contar_4(1000_000)
t2 = time.time()
print("contar_3:", t2-t1)

# 2.43 - 3.72 s
# 2.5 - 2.92 s
# 2.6 s - 5.4 para contar_3 -> habría que modificar la fn
# 2.06 s - 2.5 s para contar_4