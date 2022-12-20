# Crea tests para las siguientes funciones:
#%% a. Función para dividir dos números de tipo entero que devuelve un float 
# con dos decimales.
def div(a,b):
    return round(a/b,2)

# Tests:
# div(1,2) == 0.5
# Exception // comodín
# div(1,0) -> ZeroDivisionError
# div("1",2.0) -> TypeError

#%% b. Función que recibe el texto de un archivo como lista de strings y 
# retorna un string de 30 caracteres por línea y centrado.
def centrar(lista):
    lineas = [f"{linea.center(30)}\n" for linea in lista] 
    return " ".join(lineas)

lista_input = ["hola","como","estas"]
lista_input2 = ["hola","como","estas","bien","y","tu", 123]
# Tests:
# test_centrar(lista_input) -> string centrado
# test_centrar(lista_input) -> string con 30 caracteres + \n
# En el caso de input2, debe haber Exception o debe devolver string ?
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
def buscar_llave(dict_input, llave_objetivo):
    for llave, valor in dict_input.items():
        if llave == llave_objetivo:
            return valor
        elif isinstance(valor, dict):
            return buscar_llave(valor, llave_objetivo)
    return None

# Solo para el test:
def fn_solo_para_test(dict_input, llave_objetivo):
    if llave_objetivo == "llave_objetivo":
        return "valor_objetivo"

dict_input = {
    "llave_1" : "valor_1",
    "diccionario_anidado" : {
        "llave_objetivo" : "valor_objetivo"
    },
    "llave_2" : "valor_2"
}
# Test:
# test_buscar_llave(dict_input, "llave_objetivo") -> "valor_objetivo"
# test_buscar_llave(dict_input, "llave_objetivo") -> str
# test_buscar_llave(dict_input, "llave_que_no_existe") -> None
# Alternativa: arrojar Exception // KeyError si no existe la llave