# Polígonos -- Challenge 4
 
#%% Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) 
# que sea capaz de calcular 
# y retornar el área de un polígono.

#  - La función recibirá por parámetro sólo UN polígono a la vez.
#  - Los polígonos soportados serán:
#        - Triángulo (base * altura / 2),
#        - Cuadrado (lado ** 2) y
#        - Rectángulo (base * altura).
#  - Imprime el cálculo del área de un polígono de cada tipo.
 
def calc_area_poligono(lado = None, base = None, altura = None, poligono = "c"):
    if poligono == "c" and lado != None:
        return lado ** 2
    elif poligono == "t" and base != None and altura != None:
        return base * altura / 2
    elif poligono == "r" and base != None and altura != None:
        return base * altura

print(calc_area_poligono(lado = 5, poligono = "c")) # cuadrado de 25 u^2
print(calc_area_poligono(base = 5, altura = 3, poligono = "t")) # triángulo de 7.5 u^2
print(calc_area_poligono(base = 5, altura = 3, poligono = "r")) # rectángulo de 15 u^2

# ¿Qué complejidad tiene en tiempo y en espacio?

# No iteramos ni guardamos datos, tiene complejidad O(1) en tiempo y espacio.

# ¿Cuánto crees que podría tardar en procesar 1 millón de datos? 

# Aproximadamente el tiempo de ejecución de una llamada a la fn * 1 millón.
# Ha tardado 0.3 segundos en procesar un millón de datos.

import time
t1 = time.time()
for i in range(1000000):
    calc_area_poligono(lado = i, poligono = "c")
t2 = time.time()
print("Ha tardado en procesar un millón de datos:", t2 - t1, "segundos")
# Explica en qué basas esta suposición o la forma en la que lo has determinado.
