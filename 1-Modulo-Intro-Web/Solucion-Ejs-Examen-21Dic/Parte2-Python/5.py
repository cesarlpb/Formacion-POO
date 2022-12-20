# Crea tests para las siguientes funciones:
#%% a. Función para dividir dos números de tipo entero que devuelve un float 
# con dos decimales.
def div(a,b):
    return round(a/b,2)
def test_div(a,b):
    try:
        return div(a,b)
    except ZeroDivisionError:
        print(a, b, "No se puede dividir por cero")
        return None
    except TypeError:
        print(a, b, "Solo se pueden dividir números")
        return None
    except:
        print(a, b, "Ha habido un error desconocido")
        return None
# Tests:
#%% div(1,2) == 0.5
numerador = 1
denominador = 2
valor_esperado = numerador / denominador
valor_obtenido = div(numerador,denominador)
print(f"{numerador} / {denominador} = {valor_obtenido}", valor_obtenido == valor_esperado)
#%% Tests de Excepciones, usad Exception como comodín
# div(1,0) -> ZeroDivisionError
test_div(1,0)
# div("1",2.0) -> TypeError
test_div("1",2.0)
# pasamos cualquier otro elemento 
test_div(1,[])
#%% b. Función que recibe el texto de un archivo como lista de strings y 
# retorna un string de 30 caracteres por línea y centrado.
def centrar(lista):
    lineas = [f"{linea.center(30)}\n" for linea in lista] 
    return " ".join(lineas)

lista_input = ["hola","como","estas", "hoy?"]
lista_input2 = ["hola","como","estas","bien","y","tu", [123]]
def test_centrar(lista_input):
    try:
        return centrar(lista_input)
    except AttributeError:
        print(lista_input, "No se puede centrar")
        return None
    except:
        print(lista_input, "Ha habido un error desconocido")
        return None
print(centrar(lista_input))
# print(centrar(lista_input2)) # AttributeError: 'list' object has no attribute 'center'
#%% Tests:
#%% test_centrar(lista_input) -> string centrado
valor_obtenido = centrar(lista_input)
arr = valor_obtenido.split("\n")
for idx, linea in enumerate(arr):
    if linea:
        print(arr[idx].center(30) == linea) # Todo True
#%% test_centrar(lista_input) -> string con 30 caracteres + \n
valor_obtenido = centrar(lista_input)
arr = valor_obtenido.split("\n")
for idx, linea in enumerate(arr):
    if linea:
        print(len(arr[idx]) >= 30 and len(arr[idx]) <= 32) # Todo True
#%% En el caso de input2, debe haber Exception o debe devolver string ?
    # Caso que no pasa el test porque no se puede centrar algo que no es str
lista_input2 = ["hola","como","estas","bien","y","tu", [123]]
lista_input3 = ["hola","como","estas","bien","y","tu", 123]
lista_input4 = ["hola","como","estas","bien","y","tu", {}]
try:
    centrar(lista_input4)
except AttributeError as e:
    print("No se puede centrar. Error:", e)
#%% c. Función que navega en un diccionario anidado dentro de otro para conseguir 
# una llave determinada, recibe el dict y la llave que debe buscar. 
# No se sabe en qué llave está el dato, así que debe probar todos los objetos del 
# dict padre para encontrar el valor que tiene la llave objetivo. 
# - Solo un nivel de anidación.
# - Llave_objetivo es única.

# dict_superior = {
# 	“llave_1” : “valor_1”
# 	… 
# 	“dict_anidado” : {
# 		…
# 	“llave_objetivo” : “valor_objetivo”
# 	…
# }
# …
# “mas_llaves” : “mas_values”
# …
# }
dict_input = {
    "llave_1" : "valor_1",
    "diccionario_anidado" : {
        "llave_objetivo" : "valor_objetivo"
    },
    "llave_2" : "valor_2"
}
def buscar_llave(dict_input, llave_objetivo):
    for llave, valor in dict_input.items():
        if llave == llave_objetivo:
            return valor
        elif isinstance(valor, dict):
            return buscar_llave(valor, llave_objetivo)
    return None
print(buscar_llave(dict_input, "llave_objetivo"))
#%% Solo para el test:
def fn_solo_para_test(dict_input, llave_objetivo):
    if llave_objetivo == "llave_objetivo":
        return "valor_objetivo"
    else: 
        return None
#%%
dict_input = {
    "llave_1" : "valor_1",
    "diccionario_anidado" : {
        "llave_objetivo" : "valor_objetivo"
    },
    "llave_2" : "valor_2"
}
# Tests:
#%% test_buscar_llave(dict_input, "llave_objetivo") -> "valor_objetivo"
valor_esperado = "valor_objetivo"
valor_obtenido = buscar_llave(dict_input, "llave_objetivo")
print(valor_obtenido, valor_esperado, valor_obtenido == valor_esperado) # True
#%% test_buscar_llave(dict_input, "llave_objetivo") -> str
valor_esperado = "valor_objetivo"
valor_obtenido = buscar_llave(dict_input, "llave_objetivo")
print(valor_obtenido, valor_esperado, isinstance(valor_obtenido, str)) # True
#%% test_buscar_llave(dict_input, "llave_que_no_existe") -> None
valor_esperado = "valor_objetivo_que_no_existe"
valor_obtenido = buscar_llave(dict_input, "llave_que_no_existe")
print(valor_obtenido, valor_esperado, valor_obtenido == None) # True
#%% Alternativa: arrojar Exception // KeyError si no existe la llave