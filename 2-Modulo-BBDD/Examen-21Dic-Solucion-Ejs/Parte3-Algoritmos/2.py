#%% Se quiere calcular los números primos con Python. 
# Escribe un programa para realizar esta búsqueda. 
# Además, se quiere guardar los datos en un TXT colocando cada número 
# en una fila.

def es_primo(n):
    import math
    # divisor_maximo = math.ceil(math.sqrt(n))
    divisor_maximo = n // 2
    for i in range(2, divisor_maximo + 1):
        if n % i == 0:
            return False
    return True

lista_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991 , 997 ]
contador_primos = 0

for num in range(2, 1001):
    if es_primo(num) == True:
        contador_primos += 1
print("Del 1 al 1000 hay:", len(lista_primos), contador_primos, "primos")

# Comprobamos los números del 1 al mil que no son primos
contador_no_primos = 0
for i in range(2, 1001):
    if es_primo(i) == False:
        contador_no_primos += 1
print("Del 1 al 1000 hay:", contador_no_primos+1, "no primos")

# Vamos a guardar los datos en un txt


# ¿Qué complejidad tiene en tiempo y en espacio?

# Tenemos que recorrer al menos n/2 + 1 para verificar los primos de 1 a n, entonces tiene complejidad O(n/2 + 1) = O(n/2) = O(n) en tiempo.
# En espacio, por el momento no tenemos que guardar los números primos de 1 a n, entonces tiene complejidad O(1) en espacio.

# ¿Cuánto crees que podría tardar en procesar 1 millón de datos? Explica en qué basas esta suposición o la forma en la que lo has determinado.

import time
t1 = time.time()
for num in range(2, 1_000_01):
    es_primo(num)
t2 = time.time()
print("Tiempo de ejecución:", t2-t1, "segundos")

# Para 100 mil datos ha tardado 6.93 segundos, por lo que para 1 millón de datos tardaría al menos 10 veces más.
# Han sido 568.1153290271759 segundos, es decir, 9 minutos y medio.
t1 = time.time()
numero_inicial = 2
numero_final = 100_000
for i in range(0, 10):
    for num in range(numero_inicial, numero_final + 1):
        es_primo(num)
    print("Procesados los números del", numero_inicial, "al", numero_final)
    numero_inicial = numero_final + 1
    numero_final = numero_final + 100_000
t2 = time.time()
print("Tiempo de ejecución:", t2-t1, "segundos")