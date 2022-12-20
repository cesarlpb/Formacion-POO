# Realiza las siguientes operaciones con listas:
#%%   a. Ordenar de forma descendente: [19, 41, 60, 65, 67, 68, 77, 82, 85, 95]
lista = [19, 41, 60, 65, 67, 68, 77, 82, 85, 95]
lista.sort(reverse=True)
print(lista)
#%%   b. Crea una lista de 10 números aleatorios que sean enteros del 1 al 100
import random
lista = [round(random.random() * 100) for i in range(10)]
print(lista)

#%%   c. Usa listas para separar el texto siguiente y borrar los espacios que sobran:

texto = """Este texto	tiene	espacios arbitrarios.
Y 		varias líneas.
Además, tiene		espacios delante, en medio			y al final 		de las líneas."""	
lista = texto.split("\n")
texto_sin_espacios = ""
for linea in lista:
    texto_sin_espacios += linea.strip().replace(" \t", "").replace("\t\t", " ").replace("\t", " ").replace(".", ". ")
print(texto_sin_espacios)
#   El resultado debe ser un texto sin espacios arbitrarios entre palabras y tres líneas. Puedes guardar cada línea en una lista.

#%% Alternativa para limpiar espacios

texto = """Este texto	tiene	espacios arbitrarios.
Y 		varias líneas.
Además, tiene		espacios delante, en medio			y al final 		de las líneas."""	

def deleteSpace(txt):
   lines = txt.split("\n")
   str_line = ""
   for line in lines:
       str_line +=" ".join(line.split())+"\n"
   return str_line

print(deleteSpace(texto))