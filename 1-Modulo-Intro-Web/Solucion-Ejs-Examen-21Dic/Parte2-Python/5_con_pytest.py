#%% Test
# a. Función para dividir dos números de tipo entero que devuelve un float con dos decimales.
def div(a,b):
    return round(a/b,2)
# b. Función que recibe el texto de un archivo como lista de strings y retorna un string de 30 caracteres por línea y centrado.
def centrar(lista):
    lineas = [f"{linea.center(30)}\n" for linea in lista] 
    return " ".join(lineas)
# c. Función que navega en un diccionario anidado dentro de otro para conseguir una llave determinada, recibe el dict y la llave que debe buscar. No se sabe en qué llave está el dato, así que debe probar todos los objetos del dict padre para encontrar el valor que tiene la llave objetivo. 
def buscar_llave(dict_input, llave_objetivo):
    for llave, valor in dict_input.items():
        if llave == llave_objetivo:
            return valor
        elif isinstance(valor, dict):
            return buscar_llave(valor, llave_objetivo)
    return None
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

#%% Inputs para los tests:
# a.
inputs_test_div_deben_devolver_float = [(1, 2)]
inputs_test_div_deben_devolver_error = [(1, 0), (1, "a"), ("a", 1), ("a", "b")]
# b.
inputs_test_centrar_deben_devolver_string = [["hola","como","estas", "hoy?"]]
inputs_test_centrar_deben_devolver_error = [
        ["hola","como","estas","bien","y","tu", [123]], 
        ["hola","como","estas","bien","y","tu", 123],
        ["hola","como","estas","bien","y","tu", {}]
    ]
# c.
input_test_buscar_llave = {
    "llave_1" : "valor_1",
    "diccionario_anidado" : {
        "llave_objetivo" : "valor_objetivo"
    },
    "llave_2" : "valor_2"
}
#%% Tests de div(a, b)
#%% Tests de centrar(lista)
#%% Tests de buscar_llave(dict_input, llave_objetivo)