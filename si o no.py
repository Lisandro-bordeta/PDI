import os
print("queres ver un gato que dice mama?")
respuesta=input("(si/no): ")
respuesta=respuesta.upper()
if respuesta=="SI":
    print("miralo")
    os.system("start https://www.youtube.com/watch?v=AxE4TltnvjI")
else:
    print("vos proximamente entonces")
    wait=input("presiona enter para continuar")
    os.system("start https://www.youtube.com/watch?v=TGKyEbuGkBU")