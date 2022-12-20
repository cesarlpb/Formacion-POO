#%% Test
import pytest 
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
inputs_test_div_deben_devolver_float = [(1, 2), (1, 3), (1, 4), (1, 5)]
inputs_test_div_deben_devolver_error = [(1, 0), (1, "a"), ("a", 1), ("a", "b")]
# b.
inputs_test_centrar_deben_devolver_string = [
    ["hola","como","estas", "hoy?"],
    ["hola","como","estas", "hoy?", "bien", "y", "tu?"],
    ["hola","como","estas", "hoy?", "bien", "y", "tu?", "muy", "bien", "gracias"]
]
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
    # Casos que devuelven float
def test_div_deben_devolver_float():
    for input_test in inputs_test_div_deben_devolver_float:
        # Sabemos que por la fuente de estos datos no hay 0 en la pos 1
            # lo podemos validar si no nos fiamos :)
        valor_esperado = round(input_test[0] / input_test[1], 2)
        valor_obtenido = div(input_test[0], input_test[1])
        assert(valor_obtenido == valor_esperado)
        assert type(valor_obtenido) == float

def test_div_deben_devolver_error():
    for input_test in inputs_test_div_deben_devolver_error:
        if input_test[1] == 0:
            with pytest.raises(ZeroDivisionError):
                div(input_test[0], input_test[1])
                assert input_test[1] == 0
        else:
            with pytest.raises(TypeError):
                div(input_test[0], input_test[1])
                es_el_primer_param_un_numero = not type(input_test[0]) == int and not type(input_test[0]) == float
                es_el_segundo_param_un_numero = not type(input_test[1]) == int and not type(input_test[0]) == float
                assert es_el_primer_param_un_numero or es_el_segundo_param_un_numero
        
#%% Tests de centrar(lista)
    # Casos que devuelven string
def test_centrar_debe_devolver_str():
    for input_test in inputs_test_centrar_deben_devolver_string:
        valor_esperado = " ".join([f"{linea.center(30)}\n" for linea in input_test])
        valor_obtenido = centrar(input_test)
        assert valor_obtenido == valor_esperado
        assert type(valor_obtenido) == str
    
    # Casos que devuelven error
def test_centrar_debe_devolver_error():
    with pytest.raises(AttributeError):
        for input_test in inputs_test_centrar_deben_devolver_error:
            centrar(input_test)
            elemento_no_str = None
            for elemento in input_test:
                if not isinstance(elemento, str):
                    elemento_no_str = elemento
                    break
            assert type(input_test) == list
            assert type(elemento_no_str) != str
#%% Tests de buscar_llave(dict_input, llave_objetivo)
    # Caso que devuelve string que es el valor_objetivo del dict
def test_buscar_llave_debe_devolver_str():
    valor_esperado = "valor_objetivo"
    valor_obtenido = buscar_llave(input_test_buscar_llave, "llave_objetivo")
    assert valor_obtenido == valor_esperado
    assert type(valor_obtenido) == str

    # Caso que devuelve None
def test_buscar_llave_no_existe_debe_devolver_None():
    valor_esperado = None
    valor_obtenido = buscar_llave(input_test_buscar_llave, "llave_que_no_existe")
    assert valor_obtenido == valor_esperado
    assert valor_obtenido == None